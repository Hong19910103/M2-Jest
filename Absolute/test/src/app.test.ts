import {AbsoluteNumberCalculator} from "./app";

describe("testFindAbsolute0", () => {
    test("testFindAbsolute0", () => {

        expect(AbsoluteNumberCalculator.findAbsolute(0)).toEqual(0);
    });
});