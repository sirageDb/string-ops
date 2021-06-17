
type validatorFinalResult = {
    objectiveResolved: false,
    validator: string,
}
//TODO Fix types
//TODO Implement an optional parameter for conditional
type option = { objectiveResolved: boolean, validator: string }[];

export default function containerValidator(validationResults: option) {
    let finalResult = {
        containerResult: false,
        resolved: [],
        unResolved: []
    }

    const validationResultsNumber = validationResults.length;
    let validatedResults = 0;
    validationResults.map((result) => {
        if (result.objectiveResolved === true) {
            validatedResults++;
            console.log(result);
            // finalResult.resolved.push(result);
        }
        if (result.objectiveResolved === false) {
            console.log(result)
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