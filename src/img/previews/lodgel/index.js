import image1 from "./lodgel1.gif";
import image2 from "./lodgel2.gif";
import image3 from "./lodgel3.gif";
import image4 from "./lodgel4.gif";
import image5 from "./lodgel5.gif";
import image6 from "./lodgel6.gif";

export const imgs = [
  {
    image: image1,
    description:
      "Create a new guest and set the length of their stay at a given property.",
    id: 1,
  },
  { image: image2, description: "Setting up new Manager.", id: 2 },
  {
    image: image3,
    description: "Checking off tasks for a guests stay at the property.",
    id: 3,
  },
  { image: image4, description: "Add new properties.", id: 4 },
  {
    image: image5,
    description: "Update user info and stripe subsctiption system.",
    id: 5,
  },
  {
    image: image6,
    description:
      "Creating a checklist of tasks to be completed before, durring, and after a guests stay.",
    id: 6,
  },
];

export const fullDescription = {
  text:
    "Lodgel is a project designed for rental property management. It consolidates key tasks like invoicing and employee management into one central location.",
  tech: [
    "Postgress",
    "Sqlite",
    "Jest",
    "React",
    "TypeScript",
    "Firebase Auth",
    "Stripe",
    "Sendgrid",
    "KnexJS",
    "WebPack",
    "ES6 NodeJS",
  ],
  github: "https://github.com/BrandCam/labs10-cleaner-tool",
  deployed: "https://lodgel-frontend.netlify.app/",
  stack: ["React", "Node", "SQL"],
};
