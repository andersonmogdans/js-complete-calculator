import { MathFunctions } from "../js/mathFunctions";

const mathFunction = new MathFunctions()

test("should return the number times its exponent", () => {
  expect(mathFunction.exponenciacao("3^3")).toEqual(27);
});

test("should be NaN or return an error", () => {
  expect(mathFunction.exponenciacao("3^-1+2")).toBeNaN();
  expect(() => mathFunction.exponenciacao("^2")).toThrow('error');
})

test("should return its square root", () => {
  expect(mathFunction.raizQuadrada("√81")).toEqual(9);
});

test("should return an error on the square root function", () => {
  expect(() => mathFunction.raizQuadrada("81√1")).toThrow('error');
});
