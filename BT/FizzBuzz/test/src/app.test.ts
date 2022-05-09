import {FizzBuzz} from "./app";

describe("fizzbuzz", () => {
    test("Buzz", () => {
        let fizzBuzz = new FizzBuzz(9)
        expect(fizzBuzz.getMessage()).toBe('Buzz')
    });

    test("Fizz", () => {
        let fizzBuzz = new FizzBuzz(10)
        expect(fizzBuzz.getMessage()).toBe('Fizz')
    });

    test("Fizz", () => {
        let fizzBuzz = new FizzBuzz(15)
        expect(fizzBuzz.getMessage()).toBe('FizzBuzz')
    });
    test("Fizz", () => {
        let fizzBuzz = new FizzBuzz(7)
        expect(fizzBuzz.getMessage()).toBe('7')
    });

})