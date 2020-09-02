const s = (sketch) => {
  //Globals
  let numIters = 6;

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

  function drawForward(drawingState, params) {
    let { x, y } = drawingState.state.position;
    let d = drawingState.state.direction;
    let newX = x + params.length * sketch.cos(d);
    let newY = y + params.length * sketch.sin(d);
    sketch.push();
    sketch.strokeWeight(drawingState.state.strokeWeight || 1);
    sketch.line(x, y, newX, newY);
    sketch.pop();
    drawingState.state.position.x = newX;
    drawingState.state.position.y = newY;
  }

  const tree = {
    params: {
      angle: 25,
      length: 2,
    },
    axiom: "X",
    rules: {
      X: "F[-X][X]F[-X]+FX",
      F: "FF",
    },
    commands: {
      F: drawForward,
      "-"(drawingState, params) {
        drawingState.state.direction -= params.angle;
      },
      "+"(drawingState, params) {
        drawingState.state.direction += params.angle;
      },
      "["(drawingState, params) {
        drawingState.push();
      },
      "]"(drawingState, params) {
        drawingState.pop();
      },
    },
  };

  let system = tree;

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

  const CANVAS_BOUNDS = new Point(1000, 1000);

  function setup() {
    sketch.createCanvas(CANVAS_BOUNDS.x, CANVAS_BOUNDS.y);
    sketch.angleMode(sketch.DEGREES);
    sketch.noLoop();
  }

  function drawSystem(system, fragmentIterator, drawingState) {
    const drawFrame = () => {
      const iter = fragmentIterator.next();
      console.log(iter);
      if (iter.done) {
        return;
      }
      const fragment = iter.value;
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
    const origin = new Point(sketch.mouseX, sketch.mouseY);
    let systemState = system.axiom;
    console.log(systemState);
    for (let i = 1; i < numIters - 1; i++) {
      systemState = renderAGeneration(system, systemState);
      console.log(systemState);
    }
    const drawingState = new DrawingState(origin, -90);
    const fragmentIterator = fragmentGenerator(system, systemState);
    drawSystem(system, fragmentIterator, drawingState);
  }

  sketch.setup = setup;

  sketch.mouseClicked = mouseClicked;
};

export default s;
