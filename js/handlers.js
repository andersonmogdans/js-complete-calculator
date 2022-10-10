import { Screen } from './result_screen.js'
import { caracteresEspeciais } from './inputs_value.js';

const screen = new Screen()

export class Handlers {
  constructor(evt) {
    this.evt = evt
  }
  numberButtonHandler(evt) {
    const numero = evt.target.innerHTML;
    const isMaxValue = screen.getResult().length >= 18;
    if (isMaxValue) {
      return
    } else {
      screen.appendValue(numero);
    }
  }
  
  operationButtonHandler(evt) {
    const numero = evt.target.innerHTML;
    const value = screen.getResult()
    if (value.toString().length === 0 && numero !== '√') {
      return
    } else {
      checkOperationButtonValue(numero, value)
    }
  }
  
  dotButtonHandler(evt) {
    const numero = evt.target.innerHTML;
    if (screen.getResult().includes(".") && numero === ".") {
      return;
    }
    else if (screen.getResult().toString().length === 0 && numero === ".") {
      return
    }
    screen.appendValue(numero);
  }
  
  checkOperationButtonValue (numero, value) {
    if (
      caracteresEspeciais.some((x) => x.includes(numero)) &&
      caracteresEspeciais.some((x) => value.includes(x))
    ) {
      return;
    } else {
      checkRaizQuadrada(numero, value)
    }
  }
}

export function checkRaizQuadrada (numero, value) {
  if (numero === "√" && value.toString().length !== 0) {
    return
  } else {
    screen.appendValue(numero);
  }
}
