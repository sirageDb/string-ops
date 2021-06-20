export default class ErrorHandler extends Error {

    validatorPropertyKeysNumberError(validatorName: string, wantedKeysNumber: number) {
        throw new Error('string-ops ERROR ::: ' + validatorName + ' property should get ' + wantedKeysNumber);
    }

    validatorPropertyTypeError(validatorName: string, typeName: string) {
        throw new Error('string-ops ERROR ::: ' + validatorName + ' is not a ' + typeName + ' type');
    }
    
    //TODO maybe giving an array and make all 
    validatorPropertyRequiredKeys(validatorName: string, requiredKeyName1: string, requiredKeyName2: string) {
        throw new Error('string-ops ERROR ::: ' + validatorName + ' should have both  ' + requiredKeyName1 + ' and ' + requiredKeyName2);
    }

    undefinedError() {
        throw new Error('string-ops ERROR ::: String to be checked has a type of undefined');
    }

    custom(validatorName : string, customizedMessage : string) {
        throw new Error('string-ops ERROR ::: '+validatorName +' ::: '+ customizedMessage);
    }

}