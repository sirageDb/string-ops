"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorHandler_1 = __importDefault(require("../bin/ErrorHandler"));
const stringNotNull_1 = __importDefault(require("../bin/stringNotNull"));
//TODO validationContainer
//TODO separate each functionality into separate exported functions e.i when validator parameter is true,number it is another separate exported fucntion
function containNumber(stringToCheck, validatorOption) {
    let finalResult = {
        objectiveResolved: false,
        validator: "containNumber"
    };
    //======================================================================
    let numberCounter = function (stringToCheck) {
        let numberOfNUmbersInString = 0;
        for (let character of stringToCheck) {
            let characterAsNumber = Number(character);
            if (characterAsNumber !== characterAsNumber || character === " ") {
            }
            else {
                numberOfNUmbersInString++;
            }
        }
        return numberOfNUmbersInString;
    };
    const error = new ErrorHandler_1.default();
    const validatorOptionTypeChecker = (validatorOption) => {
        if (typeof validatorOption === "object") {
            if (Object.keys(validatorOption).length !== 2) {
                error.validatorPropertyKeysNumberError("containNumber", 2);
            }
            if (!("minRepition" in validatorOption || "maxRepition" in validatorOption)) {
                error.validatorPropertyRequiredKeys("containNumber", "maxRepition", "minRepition");
            }
        }
        if (typeof validatorOption !== "boolean" && typeof validatorOption !== "object" && typeof validatorOption !== "number") {
            error.validatorPropertyTypeError("containNumber", typeof validatorOption);
        }
        return typeof validatorOption;
    };
    const validatorPropertyType = validatorOptionTypeChecker(validatorOption);
    const numberOfNumbersinString = numberCounter(stringToCheck);
    //=======================================================================
    if (validatorPropertyType === "object" && stringNotNull_1.default(stringToCheck)) {
        let propertyMinRepition = typeof validatorOption === "object" && validatorOption.minRepition;
        let propertyMaxRepition = typeof validatorOption === "object" && validatorOption.maxRepition;
        if (numberOfNumbersinString === 0) {
            finalResult.objectiveResolved = false;
            return finalResult;
        }
        if (propertyMinRepition === true && typeof (propertyMaxRepition) === "number") {
            numberCounter(stringToCheck);
            if (numberOfNumbersinString > propertyMaxRepition) {
                finalResult.objectiveResolved = false;
                return finalResult;
            }
            else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
        else if (typeof (propertyMinRepition) === "number" && propertyMaxRepition === true) {
            numberCounter(stringToCheck);
            if (numberOfNumbersinString < propertyMinRepition) {
                finalResult.objectiveResolved = false;
                return finalResult;
            }
            else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
        else if (typeof (propertyMinRepition) === "number" && typeof (propertyMaxRepition) === "number") {
            numberCounter(stringToCheck);
            if (numberOfNumbersinString < propertyMinRepition || numberOfNumbersinString > propertyMaxRepition) {
                finalResult.objectiveResolved = false;
                return finalResult;
            }
            else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
    }
    else if (validatorPropertyType === "boolean" && stringNotNull_1.default(stringToCheck) === true) {
        if (validatorOption === true) {
            numberCounter(stringToCheck);
            if (numberOfNumbersinString < stringToCheck.length) {
                finalResult.objectiveResolved = false;
                return finalResult;
            }
            else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
        else if (validatorOption === false) {
            numberCounter(stringToCheck);
            if (numberOfNumbersinString > 0) {
                finalResult.objectiveResolved = false;
                return finalResult;
            }
            else {
                finalResult.objectiveResolved = true;
                return finalResult;
            }
        }
    }
    else if (validatorPropertyType === "number" && stringNotNull_1.default(stringToCheck) === true) {
        numberCounter(stringToCheck);
        if (numberOfNumbersinString !== validatorOption) {
            finalResult.objectiveResolved = false;
            return finalResult;
        }
        else {
            finalResult.objectiveResolved = true;
            return finalResult;
        }
    }
}
exports.default = containNumber;
