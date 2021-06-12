"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const containNumber_1 = require("./validators/containNumber");
const password = "aze3215  1azezd";
//conflict test
const status = containNumber_1.containNumber(password, 5);
console.log(status);
