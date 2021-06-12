import {containCapitalLetters} from "./validators/containCapitalLetters";
import { isEmpty } from "./validators/isEmpty";
import { containNumber } from "./validators/containNumber"

const password = "aze3215  1azezd";

//conflict test
const status = containNumber(password, 5);

console.log(status);
