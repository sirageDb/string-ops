"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const containNumber_1 = require("./validators/containNumber");
const password = "aze3a3z3e";
//conflict test
const status = containNumber_1.containNumber(password, { minRepition: true, maxRepition: 5 });
console.log(status);
