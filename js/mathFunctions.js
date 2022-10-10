export class MathFunctions {
  constructor(valor) {
    this.valor = valor;
  }

  exponenciacao(valor) {
    if (valor.includes("^") && valor.substring(0, 1) === "^") {
      throw new Error("error");
    } else if (valor.includes("^") && valor.substring(0, 1) !== "^") {
      const exponencial = valor.split("^");
      if (exponencial[0] && exponencial[1]) {
        return Math.pow(exponencial[0], exponencial[1]);
      }
    }
  }

  raizQuadrada(valor) {
    if (valor.includes("√") && valor.substring(0, 1) !== "√") {
      throw new Error("error");
    } else if (valor.includes("√") && valor.substring(0, 1) === "√") {
      const raizQuadrada = valor.replace("√", "");
      return Math.sqrt(raizQuadrada);
    }
  }
}
