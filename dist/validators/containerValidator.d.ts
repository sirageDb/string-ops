declare type option = {
    objectiveResolved: boolean;
    validator: string;
}[];
export default function containerValidator(validationResults: option): {
    containerResult: boolean;
    resolved: never[];
    unResolved: never[];
} | undefined;
export {};
