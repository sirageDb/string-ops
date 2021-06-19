import containCapitalLetters from "./validators/containCapitalLetters";
import isUsed from "./validators/isUed";
import containNumber from "./validators/containNumber"
import isEmail from "./validators/isEmail";
import containerValidator from "./validators/containerValidator"
import minLength from "./validators/minLength";
import maxLength from "./validators/maxLength";

//should contain 2 capitalLetters && 2 numbers
const password = "AA00qscqsc";
const v_maxLength = maxLength(password, 20);

console.log(v_maxLength);



// const resContainer = containerValidator([resContainNumber,resContaineCapitalLetters]);