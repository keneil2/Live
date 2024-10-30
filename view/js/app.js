import Nav from "./components/nav.js";
import getAttributes from "../../src/JSX PARSER/jsx-parser.js";
import Render from "../../src/RenderComponent.js";
const app = () => {
  Render([
    Nav("props passed"),
    
  ])
};
app();

console.log(getAttributes());