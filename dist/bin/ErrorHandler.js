"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandler extends Error {
    validatorPropertyKeysNumberError(validatorName, wantedKeysNumber) {
        throw new Error('string-ops ERROR ::: ' + validatorName + ' property should get ' + wantedKeysNumber);
    }
    validatorPropertyTypeError(validatorName, typeName) {
        throw new Error('string-ops ERROR ::: ' + validatorName + ' is not a ' + typeName + ' type');
    }
    //TODO maybe giving an array and make all 
    validatorPropertyRequiredKeys(validatorName, requiredKeyName1, requiredKeyName2) {
        throw new Error('string-ops ERROR ::: ' + validatorName + ' should have both  ' + requiredKeyName1 + ' and ' + requiredKeyName2);
    }
    undefinedError() {
        throw new Error('string-ops ERROR ::: String to be checked has a type of undefined');
    }
    custom(validatorName, customizedMessage) {
        throw new Error('string-ops ERROR ::: ' + validatorName + ' ::: ' + customizedMessage);
    }
}
exports.default = ErrorHandler;
