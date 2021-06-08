export default class ErrorHandler extends Error {
    
    validatorPropertyKeysNumberError (validatorName: string, wantedKeysNumber: string){
        throw new Error('string-ops ERROR ::: ' + validatorName + ' property should get ' + wantedKeysNumber);
    }

    validatorPropertyTypeError(validatorName: string, typeName: string) {
        throw new Error('string-ops ERROR ::: ' + validatorName + ' is not a ' + typeName + ' type');
    }

    undefinedError() {
        throw new Error('string-ops ERROR ::: String to be checked has a type of undefined');
    }
}