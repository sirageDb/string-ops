"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandler extends Error {
    validatorPropertyKeysNumberError(validatorName, wantedKeysNumber) {
        throw new Error('string-ops ERROR ::: ' + validatorName + ' property should get ' + wantedKeysNumber);
    }
    validatorPropertyTypeError(validatorName, typeName) {
        throw new Error('string-ops ERROR ::: ' + validatorName + ' is not a ' + typeName + ' type');
    }
    undefinedError() {
        throw new Error('string-ops ERROR ::: String to be checked has a type of undefined');
    }
}
exports.default = ErrorHandler;
