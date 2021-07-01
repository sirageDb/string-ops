type typeWhatIWant =
    | string
    | object
    | number
    | boolean

export default function typeChecker(whatICheck: any, whatIWant: typeWhatIWant) {
    if (typeof whatICheck !== whatIWant) {
        throw new Error('stringdation ERROR ::: got type ' + typeof whatICheck + ', expected ' + whatIWant);
    }
}