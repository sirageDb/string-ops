import containCapitalLetters from "./validators/containCapitalLetters";
import { isEmpty } from "./validators/isEmpty";

const name = "qdv";

//conflict test

const status = isEmpty(name, true);
console.log(status);