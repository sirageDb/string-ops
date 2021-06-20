import containCapitalLetters from "./validators/containCapitalLetters";
import isUsed from "./validators/isUed";
import containNumber from "./validators/containNumber"
import isEmail from "./validators/isEmail";
import containerValidator from "./validators/containerValidator"
import minLength from "./validators/minLength";
import maxLength from "./validators/maxLength";
import numberBiggerThan from "./validators/numberBiggerThan";

//should contain 2 capitalLetters && 2 numbers
const randomNumber = "21";
const v_numberBiggerThan = numberBiggerThan(randomNumber, 20);


console.log(v_numberBiggerThan);



// const resContainer = containerValidator([resContainNumber,resContaineCapitalLetters]);