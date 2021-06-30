"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorHandler_1 = __importDefault(require("../bin/ErrorHandler"));
const stringNotNull_1 = __importDefault(require("../bin/stringNotNull"));
function containSmallLetters(stringToCheck, validatorOption) {
    let finalResult = {
        objectiveResolved: false,
        validator: "containSmallLetters",
    };
    //======================================================================
    let smallLettersCounter = function (stringToCheck) {
        let numberOfSmallLetters = 0;
        for (let i = 0; i < stringToCheck.length; i++) {
            if (stringToCheck[i] === stringToCheck[i].toLowerCase() &&
                stringToCheck[i] !== stringToCheck[i].toUpperCase()) {
                numberOfSmallLetters++;
            }
        }
        return numberOfSmallLetters;
    };
    const error = new ErrorHandler_1.default();
    const validatorOptionTypeChecker = (validatorOption) => {
        if (typeof validatorOption === "object") {
            if (Object.keys(validatorOption).length !== 2) {
                error.validatorPropertyKeysNumberError("containSmallLetters", 2);
            }
            if (!("minRepition" in validatorOption || "maxRepition" in validatorOption)) {
                error.validatorPropertyRequiredKeys("containSmallLetters", "maxRepition", "minRepition");
            }
        }
        if (typeof validatorOption !== "boolean" && typeof validatorOption !== "object" && typeof validatorOption !== "number") {
            error.validatorPropertyTypeError("containSmallLetters", typeof validatorOption);
        }
        return typeof validatorOption;
    };
    const validatorOptionType = validatorOptionTypeChecker(validatorOption);
    const numberOfSmallLetters = smallLettersCounter(stringToCheck);
    //======================================================================
    if (validatorOptionType === "boolean") {
        if (validatorOption === true) {
            let regex = /[A-Z]/;
            if (regex.test(stringToCheck)) {
                finalResult.objectiveResolved = false;
                return finalResult;
            }
            else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
        if (validatorOption === false) {
            let regex = /[a-z]/;
            if (regex.test(stringToCheck)) {
                finalResult.objectiveResolved = false;
                return finalResult;
            }
            else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
    }
    else if (validatorOptionType === "number" && stringNotNull_1.default(stringToCheck)) {
        smallLettersCounter(stringToCheck);
        if (validatorOption !== numberOfSmallLetters) {
            finalResult.objectiveResolved = false;
            return finalResult;
        }
        else {
            finalResult.objectiveResolved = true;
            return finalResult;
        }
    }
    else if (validatorOptionType === "object" &&
        stringNotNull_1.default(stringToCheck)) {
        const minRepition = typeof validatorOption === "object" && validatorOption.minRepition;
        const maxRepition = typeof validatorOption === "object" && validatorOption.maxRepition;
        if (minRepition === true && typeof maxRepition === "number") {
            smallLettersCounter(stringToCheck);
            if (numberOfSmallLetters === 0 || numberOfSmallLetters > maxRepition) {
                finalResult.objectiveResolved = false;
                return finalResult;
            }
            else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
        else if (typeof minRepition === "number" && maxRepition === true) {
            smallLettersCounter(stringToCheck);
            if (numberOfSmallLetters === 0 || numberOfSmallLetters < minRepition) {
                finalResult.objectiveResolved = false;
                return finalResult;
            }
            else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
        else if (typeof minRepition === "number" && typeof maxRepition === "number") {
            smallLettersCounter(stringToCheck);
            if (numberOfSmallLetters < minRepition || numberOfSmallLetters > maxRepition) {
                finalResult.objectiveResolved = false;
                return finalResult;
            }
            else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
    }
}
exports.default = containSmallLetters;
