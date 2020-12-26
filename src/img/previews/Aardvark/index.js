import image1 from "./chat.png";
import image2 from "./dash.png";
import image3 from "./guest_invite.png";
import image4 from "./project_select.png";
import image5 from "./report_create.png";
import image6 from "./reports_view.png";
import image7 from "./update_report.png";

export const imgs = [
  {
    image: image1,
    description: "Project group chat.",
    id: 1,
  },
  { image: image2, description: "Project Dashboard.", id: 2 },
  {
    image: image3,
    description:
      "Invite a Beta tester, to send an email link for submiting bugs.",
    id: 3,
  },
  { image: image4, description: "Project selection.", id: 4 },
  {
    image: image5,
    description: "Reoprt creation.",
    id: 5,
  },
  {
    image: image6,
    description: "Project reports.",
    id: 6,
  },
  {
    image: image7,
    description: "Report update form.",
    id: 7,
  },
];

export const fullDescription = {
  text:
    "Bug tracker with team chat, and the ability to send gust links for public tests.",
  tech: ["React", "Graphql", "Node", "Apollo Server/Client"],
  github: "https://github.com/BrandCam/aardvark-dashboard",
  deployed: "https://aardvark.netlify.app/",
  stack: ["MERN"],
};
