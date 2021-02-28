import flatDeepArray from "./flatArray";

describe('flatDeepArray', () => {
    it('should return an enpty array if called with no params', () => {
        const result = flatDeepArray();
        expect(result).toStrictEqual([]);
    });

    it('should throw an error if called with a non-array param', () => {
        let errorMsg;
        try {
            flatDeepArray("wrong type param");
        }
        catch(error) {
            errorMsg = error.message;
        }
        expect(errorMsg).toStrictEqual('Expect array, received parameter is string');
        
    });

    it('should return an array of 1 level', () => {
        const res1 = flatDeepArray([1, 2, 3, 4, 5]);
        const res2 = flatDeepArray([[1, 2], 3, 4, 5]);
        const res3 = flatDeepArray([1, [2, [3, 4]], 5]);
        expect(res1).toStrictEqual([1,2,3,4,5]);
        expect(res2).toStrictEqual([1,2,3,4,5]);
        expect(res3).toStrictEqual([1,2,3,4,5]);
    });

})