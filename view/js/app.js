import Nav from "./components/nav.js";
import Render from "../../src/RenderComponent.js";
//todo:manage components better here make them easier to manage
const app = () => {
  Render([
    Nav(),
    
  ])
};
// parser=new DOMParser;
app();
