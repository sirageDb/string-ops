type typeWhatIWant =
    | string
    | object
    | number
    | boolean

export default function typeChecker(whatICheck: any, whatIWant: typeWhatIWant) {
    if (typeof whatICheck !== whatIWant) {
        throw new Error('string-ops ERROR ::: got type ' + typeof whatICheck + ', expected ' + whatIWant);
    }
}