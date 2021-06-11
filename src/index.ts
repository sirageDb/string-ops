import containCapitalLetters from "./validators/containCapitalLetters";
import { isEmpty } from "./validators/isEmpty";
import { containNumber } from "./validators/containNumber"

const password = "aze3a3z3e";

//conflict test

const status = containNumber(password, {minRepition: true, maxRepition: 5});
console.log(status);