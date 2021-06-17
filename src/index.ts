import containCapitalLetters from "./validators/containCapitalLetters";
import isUsed from "./validators/isUed";
import containNumber from "./validators/containNumber"
import isEmail from "./validators/isEmail";
import containerValidator from "./validators/containerValidator"

//should contain 2 capitalLetters && 2 numbers
const password = "AA00qscqsc";

const resContaineCapitalLetters = containCapitalLetters(password, 2);
const resContainNumber = containNumber(password, 2);

console.log(resContaineCapitalLetters);
console.log(resContainNumber);


// const resContainer = containerValidator([resContainNumber,resContaineCapitalLetters]);