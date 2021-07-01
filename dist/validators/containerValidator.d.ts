declare type option = {
    objectiveResolved: boolean;
    validator: string;
}[];
export declare function containerValidator(validationResults: option): {
    containerResult: boolean;
    resolved: never[];
    unResolved: never[];
} | undefined;
export {};
