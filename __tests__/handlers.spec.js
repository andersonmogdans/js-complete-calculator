import { Handlers, checkRaizQuadrada, checkOperationButtonValue } from "../js/handlers";
import { Screen, screenId } from "../js/result_screen";

const handler = new Handlers()
const screen = new Screen()

test("should add a number to the screen", () => {
  document.body.innerHTML = `<div id="${screenId()}">5</div>`;

  const button = document.createElement("div");
  button.innerHTML = 6;
  document.body.appendChild(button);

  handler.numberButtonHandler({ target: button });
  expect(screen.getResult()).toEqual("56");
});

test("should verify the screen max lenght", () => {
  document.body.innerHTML = `<div id="${screenId()}">123456789123456789</div>`;

  const button = document.createElement("div");
  button.innerHTML = 1;
  document.body.appendChild(button);

  handler.numberButtonHandler({ target: button });
  expect(screen.getResult()).toEqual("123456789123456789");
});

test("should verify if the first value is different than a operation", () => {
  document.body.innerHTML = `<div id="${screenId()}"></div>`;

  const button = document.createElement("div");
  button.innerHTML = "*";
  document.body.appendChild(button);

  handler.operationButtonHandler({ target: button });
  expect(screen.getResult()).toEqual("");
});

test("should verify the amount of dots on the screen", () => {
  document.body.innerHTML = `<div id="${screenId()}">1.</div>`;

  const button = document.createElement("div");
  button.innerHTML = ".";
  document.body.appendChild(button);

  handler.dotButtonHandler({ target: button });
  expect(screen.getResult()).toEqual("1.");
});

test("should verify if the first value is different than a dot", () => {
  document.body.innerHTML = `<div id="${screenId()}"></div>`;

  const button = document.createElement("div");
  button.innerHTML = ".";
  document.body.appendChild(button);

  handler.dotButtonHandler({ target: button });
  expect(screen.getResult()).toEqual("");
});

test("should add only one operation value on the screen ", () => {
  document.body.innerHTML = `<div id="${screenId()}">1+</div>`;

  checkOperationButtonValue("*", screen.getResult());
  expect(screen.getResult()).toEqual("1+");
});

test("should verify if square root would be the first value", () => {
  document.body.innerHTML = `<div id="${screenId()}">1</div>`;

  checkRaizQuadrada("√", screen.getResult());
  expect(screen.getResult()).toEqual("1");
});