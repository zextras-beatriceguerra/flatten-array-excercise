export default function flatDeepArray(array) {
    const result = [];
    if (!array) {
        return result;
    }
    if (!Array.isArray(array)) {
        throw new Error(`Expect array, received parameter is ${typeof array}`);
    }
    array.forEach(el => {
        if (Array.isArray(el)) {
            result.push(...flatDeepArray(el));
        }
        else {
            result.push(el);
        }
    });

    return result;

};