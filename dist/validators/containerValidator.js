"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containerValidator = void 0;
function containerValidator(validationResults) {
    let finalResult = {
        containerResult: false,
        resolved: [],
        unResolved: []
    };
    const validationResultsNumber = validationResults.length;
    let validatedResults = 0;
    validationResults.map((result) => {
        if (result.objectiveResolved === true) {
            validatedResults++;
            console.log(result);
            // finalResult.resolved.push(result);
        }
        if (result.objectiveResolved === false) {
            console.log(result);
            // finalResult.unResolved.push(result);
        }
    });
    if (validatedResults === validationResultsNumber) {
        finalResult.containerResult = true;
        return finalResult;
    }
    if (validatedResults !== validationResultsNumber) {
        finalResult.containerResult = false;
        return finalResult;
    }
}
exports.containerValidator = containerValidator;
