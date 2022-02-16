import { AboutMe } from "./AboutMe.esm";
import { TechStack } from "./TechStack.esm";

new AboutMe({
  node: document.querySelector("#aboutMe"),
  key: "aboutMe",
});

new TechStack({
  node: document.querySelector("#techStack"),
  key: "techStack",
});
