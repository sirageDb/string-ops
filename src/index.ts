import containCapitalLetters from "./validators/containCapitalLetters";
import isUsed from "./validators/isUed";
import containNumber from "./validators/containNumber"
import isEmail from "./validators/isEmail";

const email = "sirage.aldbiyat@gmail..com";

//conflict test
const status = isEmail(email);

console.log(status);
