import {Caculator} from "./app";

describe("add function", () => {
    test("add x and b equal sumary", () => {
        expect(Caculator.add(6, 8)).toBe(14)
    })
})


