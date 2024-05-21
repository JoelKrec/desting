import {TestClass} from "../src/testsource.js";
import {expect} from "chai";

describe('TestClass', () => {
    let testClass;

    beforeEach(() => {
        testClass = new TestClass(10);
    });

    describe('calculate()', () => {
        it('should correctly multiply varOne and varTwo', () => {
            testClass.varOne = 5;
            testClass.varTwo = 2;
            expect(testClass.calculate()).to.equal(10);
        });
    });

    describe('add()', () => {
        it('should correctly sum the arguments', () => {
            expect(testClass.add(5, 4)).to.equal(9);
        });
    });

    describe('subtract()', () => {
        it('should correctly subtract the second argument from the first', () => {
            expect(testClass.subtract(10, 5)).to.equal(5);
        });
    });

    describe('divide()', () => {
        it('should correctly divide the first argument by the second', () => {
            expect(testClass.divide(10, 2)).to.equal(5);
        });

        it('should throw an error when dividing by zero', () => {
            expect(() => testClass.divide(10, 0)).to.throw("Cannot divide by zero");
        });
    });

    describe('safeDivide()', () => {
        it('should correctly divide the first argument by the second, or return the default', () => {
            expect(testClass.safeDivide(10, 0, 2)).to.equal(5);
        });
    });
});