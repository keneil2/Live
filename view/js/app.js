import Nav from "./components/nav.js";
// import getAttributes from "../../src/JSX PARSER/jsx-parser.js";
import Render from "../../src/RenderComponent.js";
import Hero from "./components/hero.js";
const app = () => {
  Render([
    // Nav("props passed"),
    Hero()
  ])
};
app();

// console.log(getAttributes());