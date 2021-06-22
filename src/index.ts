import containCapitalLetters from "./validators/containCapitalLetters";
import isUsed from "./validators/isUed";
import containNumber from "./validators/containNumber"
import isEmail from "./validators/isEmail";
import containerValidator from "./validators/containerValidator"
import minLength from "./validators/minLength";
import maxLength from "./validators/maxLength";
import numberBiggerThan from "./validators/numberBiggerThan";
import numberSmallerThan from "./validators/numberSmallerThan";
import containSpecialCharacters from "./validators/containSpecialCharacters";

//should contain 2 capitalLetters && 2 numbers
const randomNumber = "194";
// const v_numberBiggerThan = numberBiggerThan(randomNumber, 20);
// const v_numberSmallerThan = numberSmallerThan(randomNumber, 20);
const v_specialChars = containSpecialCharacters(randomNumber, false);

console.log(v_specialChars);



// const resContainer = containerValidator([resContainNumber,resContaineCapitalLetters]);