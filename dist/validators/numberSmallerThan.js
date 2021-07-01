"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberSmallerThan = void 0;
const ErrorHandler_1 = __importDefault(require("../bin/ErrorHandler"));
const stringNotNull_1 = __importDefault(require("../bin/stringNotNull"));
function numberSmallerThan(stringToCheck, validatorOption) {
    let finalResult = {
        objectiveResolved: false,
        validator: "numberBiggerThan"
    };
    const error = new ErrorHandler_1.default();
    let validatorOptionTypeChecker = (validatorOption) => {
        if (typeof validatorOption !== "number") {
            error.validatorPropertyTypeError("numberBiggerThan", "number");
        }
        return typeof validatorOption;
    };
    const validatorOptionType = validatorOptionTypeChecker(validatorOption);
    if (stringNotNull_1.default(stringToCheck) && validatorOptionType === "number") {
        let numbersOfNumbersInString = 0;
        for (const character of stringToCheck) {
            let characterAsNumber = Number(character);
            if (characterAsNumber !== characterAsNumber || character === " ") {
                // numbersOfNumbersInString = numbersOfNumbersInString;
            }
            else {
                numbersOfNumbersInString++;
            }
        }
        if (numbersOfNumbersInString !== stringToCheck.length) {
            error.custom("numberBiggerThan", "should get only numbers");
        }
        const stringToCheckConverted = Number(stringToCheck);
        if (stringToCheckConverted < validatorOption) {
            finalResult.objectiveResolved = true;
            return finalResult;
        }
        else {
            finalResult.objectiveResolved = false;
            return finalResult;
        }
    }
}
exports.numberSmallerThan = numberSmallerThan;
