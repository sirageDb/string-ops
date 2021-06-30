"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containNumber = void 0;
const containNumber_1 = require("./validators/containNumber");
var containNumber_2 = require("./validators/containNumber");
Object.defineProperty(exports, "containNumber", { enumerable: true, get: function () { return containNumber_2.containNumber; } });
const randomString = "azeazeze5";
const v_containNumber = containNumber_1.containNumber(randomString, 5);
console.log(v_containNumber);
