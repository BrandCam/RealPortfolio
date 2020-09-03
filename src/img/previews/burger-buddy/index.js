import image1 from "./buddy1.gif";
import image2 from "./buddy2.gif";
import image3 from "./buddy3.gif";
import image4 from "./buddy4.gif";
import image5 from "./buddy5.gif";

export const imgs = [
  {
    image: image1,
    description: "Ordering a burger.",
    id: 1,
  },
  { image: image2, description: "Mobile view.", id: 2 },
  {
    image: image3,
    description: "Viewing orders Unique to logged in user.",
    id: 3,
  },
  { image: image4, description: "Signing up and creating a burger.", id: 4 },
  {
    image: image5,
    description: "Form validation.",
    id: 5,
  },
];

export const fullDescription = {
  text: "A small app to learn firebase realtime database and refresh redux",
  tech: ["firebase RTDB", "React", "Redux", "Firebase Auth"],
  github: "https://github.com/BrandCam/Redux-refresher",
  deployed: "https://burger-buddy.netlify.app/",
  stack: ["JAM"],
};
