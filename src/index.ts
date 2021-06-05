import containCapitalLetters from "./validators/containCapitalLetters";

const name = "sirage";
const name1 = "Sirage";
const status = containCapitalLetters(name1, 2);
console.log(status);