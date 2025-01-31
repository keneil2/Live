import CreateElement from "./CreateElement.js";
import JSKLexer from "./JSX_PARSER/JSKLEXER.js";
import JSKPARSER from "./JSX_PARSER/jsk-parser.js";
export default function Render(components){
const  Rootdiv = document.getElementById("root");

 components.forEach(component=>{
const tokenizer=new JSKLexer(component);
  const tokens = tokenizer.tokenizer(component);
  const jskParser=new JSKPARSER(tokens);
   const domTree=jskParser.parser();

   const element= new CreateElement(domTree,null);

   console.log('domTree',domTree);
   
   Rootdiv.appendChild(element.create()); 
 })
}