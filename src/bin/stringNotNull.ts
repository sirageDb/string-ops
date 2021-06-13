export default function stringNotNull(stringToCheck: string) {
    if (stringToCheck.length > 0) {
        return true;
    }
    if (stringToCheck.length === 0) {
        return false;
    }
}