import { Screen, screenId } from '../js/result_screen'

const screen = new Screen()

test("should update the value", () => {
  document.body.innerHTML = `<div id="${screenId()}">52</div>`;

  screen.updateResult(10);
  expect(screen.getResult()).toEqual("10");
});