import {TriangleClassifier} from "./app";

describe("tam giac", () => {
    test("tam giac deu", () => {
        const a = 2;
        const b = 2;
        const c = 2;

        expect(TriangleClassifier(a,b,c)).toBe("tam giac deu");
    });

    test("tam giac can", () => {
        const a = 2;
        const b = 2;
        const c = 3;

        expect(TriangleClassifier(a,b,c)).toBe("tam giac can");
    });

    test("tam giac vuong", () => {
        const a = 3;
        const b = 4;
        const c = 5;

        expect(TriangleClassifier(a,b,c)).toBe("tam giac vuong");
    });
    test("khong phai tam giac", () => {
        const a = 8;
        const b = 2;
        const c = 3;

        expect(TriangleClassifier(a,b,c)).toBe("khong phai tam giac ");
    });

    test("khong phai tam giac", () => {
        const a = -1;
        const b = 2;
        const c = 1;

        expect(TriangleClassifier(a,b,c)).toBe("khong phai tam giac ");
    });
    test("khong phai tam giac", () => {
        const a = 0;
        const b = 1;
        const c = 1;

        expect(TriangleClassifier(a,b,c)).toBe("khong phai tam giac ");
    });


});
