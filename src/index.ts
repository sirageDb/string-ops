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
import containSmallLetters from "./validators/containSmallLetters";

//should contain 2 capitalLetters && 2 numbers
const randomString = "sirAage";
// const v_numberBiggerThan = numberBiggerThan(randomNumber, 20);
// const v_numberSmallerThan = numberSmallerThan(randomNumber, 20);
// const v_specialChars = containSpecialCharacters(randomNumber, true);
const v_containSmallLetter = containSmallLetters(randomString, true);

console.log(v_containSmallLetter);
//TODO try containNumber with 0 numbers 


// const resContainer = containerValidator([resContainNumber,resContaineCapitalLetters]);