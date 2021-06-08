import containCapitalLetters from "./validators/containCapitalLetters";
import { isEmpty } from "./validators/isEmpty";

const name = "qdv";



const status = isEmpty(name, true);
console.log(status);