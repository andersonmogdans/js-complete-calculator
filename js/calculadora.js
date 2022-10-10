import { caracteresEspeciais, numeros } from "./inputs_value.js";
import { Screen } from "./result_screen.js";
import { Handlers } from './handlers.js';
import { MathFunctions } from "./mathFunctions.js";

const mathFunction = new MathFunctions()
const handler = new Handlers()
const screen = new Screen()

const numerosButtons = document.querySelectorAll(
  ".numeros div, .operadores div"
);
const clear = document.getElementById("clear");
const cancelEntry = document.getElementById("cancelEntry");
const result = document.getElementById("result");

for (const num of numerosButtons) {
  const text = num.innerHTML;

  if (numeros.includes(text) && text !== ".")
    num.addEventListener("click", (evt) => handler.numberButtonHandler(evt));

  if (caracteresEspeciais.includes(text))
    num.addEventListener("click", (evt) => handler.operationButtonHandler(evt));

  if (text === ".")
    num.addEventListener("click", (evt) => handler.dotButtonHandler(evt));
}

clear.addEventListener("click", () => screen.updateResult(""));

cancelEntry.addEventListener("click", () => {
  const valor = screen.getResult();
  const valueSubtring = valor.substring(0, valor.length - 1);
  screen.updateResult(valueSubtring);
});

result.addEventListener("click", () => {
  let operacao = screen.getResult();
  operacao = firstNumber0(operacao);
  
  let resultado = mathFunction.raizQuadrada(operacao);
  if (resultado) {
    screen.updateResult(resultado);
  }
  resultado = mathFunction.exponenciacao(operacao);
  if (resultado) {
    screen.updateResult(resultado);
  }
  else {
    resultado = eval(operacao);
    screen.updateResult(resultado);
    if (!resultado) {
      screen.updateResult(0);
    }
  }
});

function firstNumber0(valor) {
  if (valor.substring(0, 1) === "0") {
    return valor.substring(1, valor.length);
  } else {
    return valor;
  }
}
