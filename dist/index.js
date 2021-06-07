"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isEmpty_1 = require("./validators/isEmpty");
const name = " ";
const status = isEmpty_1.isEmpty(name, true);
console.log(status);
