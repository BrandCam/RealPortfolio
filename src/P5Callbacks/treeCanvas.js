//TODO rewrite this in a seperate program...

const s = (sketch) => {
  //GLOBALS
  let numIters = 5;
  const treeColors = [
    "rgba(100,255,100,0.25)",
    "rgba(255,100,100,0.25)",
    "rgba(255,255,255,0.25)",
    "rgba(100,100,255,0.25)",
  ];

  // CONSTRUCTORS
  class Point {
    constructor(xOrPoint, y) {
      if (xOrPoint.x !== undefined && xOrPoint.y !== undefined) {
        this.x = xOrPoint.x;
        this.y = xOrPoint.y;
      } else {
        this.x = xOrPoint;
        this.y = y;
      }
    }
  }

  class DrawingState {
    constructor(position, direction) {
      this.state = Object.create(null);
      this.state.position =
        (position && new Point(position.x, position.y)) || new Point(0, 0);
      this.state.direction = direction || 0;
      this.stack = [];
    }

    push() {
      this.stack.push(JSON.stringify(this.state));
    }

    pop() {
      this.state = JSON.parse(this.stack.pop() || "{}");
    }

    get depth() {
      return this.stack.length;
    }
  }

  class Tree {
    constructor(rgba) {
      this.params = {
        pAngle: 20,
        mAngle: 20,
        xAngle: 0,
        zAngle: 20,
        length: 10,
        rgba: rgba,
      };
      this.axiom = "X";
      this.rules = {
        X: "FF[+XZ++X-F[+ZX]][-X++F-X]",
        F: "FX[FX[+XF]]",
        Z: "[+F-X-F][++ZX]",
        //   X: "F-[[>6X]+X]+F[>6+FX]",
        //   F: "FF",
        //   F: "FFF[-FF][+FF[xFF[yFF]F]FFF]F",
      };
      this.commands = {
        F: drawForward,
        "-"(drawingState, params) {
          drawingState.state.direction -= params.mAngle;
        },
        "+"(drawingState, params) {
          drawingState.state.direction += params.pAngle;
        },
        "["(drawingState, params) {
          drawingState.push();
        },
        "]"(drawingState, params) {
          drawingState.pop();
        },
        X(drawingState, params) {
          drawingState.state.direction += params.xAngle;
        },
        Z(drawingState, params) {
          drawingState.state.direction += params.zAngle;
        },
      };
    }
  }

  // HELPER FUNCTIONS
  // TODO Implement a has map to track if lines have been drawn before
  function drawForward(drawingState, params) {
    let { x, y } = drawingState.state.position;
    let d = drawingState.state.direction;
    let xDist = params.length * sketch.cos(d);
    let yDist = params.length * sketch.sin(d);
    // let lineLeng = Math.sqrt(xDist * xDist + yDist * yDist);
    let newX = x + xDist;
    let newY = y + yDist;
    sketch.push();
    //set stroke based on line length
    // console.log(lineLeng);
    sketch.stroke(params.rgba);
    sketch.strokeWeight(drawingState.state.strokeWeight || 1);
    sketch.line(x, y, newX, newY);
    sketch.pop();
    drawingState.state.position.x = newX;
    drawingState.state.position.y = newY;
  }

  function applyRule(rules, char) {
    return rules[char] || char;
  }

  function* fragmentGenerator(system, string) {
    for (const char of string) {
      yield applyRule(system.rules, char);
    }
  }

  function renderAGeneration(system, previousGeneration) {
    let nextGeneration = "";
    for (const character of previousGeneration) {
      const nextCharacters = applyRule(system.rules, character);
      nextGeneration += nextCharacters;
    }
    return nextGeneration;
  }

  // CANVAS SIZE
  const CANVAS_BOUNDS = new Point(window.innerWidth * 0.9, 500);

  //P5 FUNCTIONS
  function setup() {
    sketch.createCanvas(CANVAS_BOUNDS.x, CANVAS_BOUNDS.y);
    sketch.angleMode(sketch.DEGREES);
    sketch.noLoop();
  }

  function drawSystem(system, fragmentIterator, drawingState) {
    const drawFrame = () => {
      let done = false;
      let fragment = "";
      const numbIts = 5;
      console.log(numbIts);
      for (let i = 0; i < numbIts; i++) {
        let iter = fragmentIterator.next();
        fragment = fragment += iter.value;
        if (iter.done && i === 0) {
          done = true;
          break;
        }
      }

      if (done) {
        return;
      }

      for (const character of fragment) {
        const drawingFunction = system.commands[character];
        if (drawingFunction) {
          drawingFunction(drawingState, system.params);
        }
      }

      requestAnimationFrame(drawFrame);
    };
    requestAnimationFrame(drawFrame);
  }

  async function mouseClicked() {
    const system = new Tree(treeColors[Math.floor(Math.random() * 4)]);

    const origin = new Point(sketch.mouseX, sketch.mouseY);
    let systemState = system.axiom;

    for (let i = 1; i < numIters - 1; i++) {
      systemState = renderAGeneration(system, systemState);
    }
    const drawingState = new DrawingState(origin, -90);
    const fragmentIterator = fragmentGenerator(system, systemState);
    drawSystem(system, fragmentIterator, drawingState);
  }

  function windowResize() {
    sketch.resizeCanvas(window.innerWidth * 0.9, 700);
  }

  //APPLYING P5 FUNCTIONS
  sketch.setup = setup;
  sketch.windowResize = windowResize;
  sketch.mouseClicked = mouseClicked;

  //Old tree Object
  // const tree = {
  //   params: {
  //     pAngle: 20,
  //     mAngle: 20,
  //     xAngle: 0,
  //     zAngle: 20,
  //     length: 10,
  //   },
  //   axiom: "X",
  //   rules: {
  //     X: "FF[+XZ++X-F[+ZX]][-X++F-X]",
  //     F: "FX[FX[+XF]]",
  //     Z: "[+F-X-F][++ZX]",
  //     //   X: "F-[[>6X]+X]+F[>6+FX]",
  //     //   F: "FF",
  //     //   F: "FFF[-FF][+FF[xFF[yFF]F]FFF]F",
  //   },
  //   commands: {
  //     F: drawForward,
  //     "-"(drawingState, params) {
  //       drawingState.state.direction -= params.mAngle;
  //     },
  //     "+"(drawingState, params) {
  //       drawingState.state.direction += params.pAngle;
  //     },
  //     "["(drawingState, params) {
  //       drawingState.push();
  //     },
  //     "]"(drawingState, params) {
  //       drawingState.pop();
  //     },
  //     X(drawingState, params) {
  //       drawingState.state.direction += params.xAngle;
  //     },
  //     Z(drawingState, params) {
  //       drawingState.state.direction += params.zAngle;
  //     },
  //   },
  // };
};

export default s;
