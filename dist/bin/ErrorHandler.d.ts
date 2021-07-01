export default class ErrorHandler extends Error {
    validatorPropertyKeysNumberError(validatorName: string, wantedKeysNumber: number): void;
    validatorPropertyTypeError(validatorName: string, typeName: string): void;
    validatorPropertyRequiredKeys(validatorName: string, requiredKeyName1: string, requiredKeyName2: string): void;
    undefinedError(): void;
    custom(validatorName: string, customizedMessage: string): void;
}
