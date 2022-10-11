export class MathFunctions {
  exponenciacao(valor) {
    return new Exponenciacao().execute(valor)
  }

  raizQuadrada(valor) {
   return new RaizQuadrada().execute(valor)
  }
}

class Exponenciacao {
  execute(valor) {
    if (valor.includes("^") && valor.substring(0, 1) === "^") {
      throw new Error("error");
    } else if (valor.includes("^") && valor.substring(0, 1) !== "^") {
      const exponencial = valor.split("^");
      if (exponencial[0] && exponencial[1]) {
        return Math.pow(exponencial[0], exponencial[1]);
      }
    }
  }
}

class RaizQuadrada {
  execute(valor) {
    if (valor.includes("√") && valor.substring(0, 1) !== "√") {
      throw new Error("error");
    } else if (valor.includes("√") && valor.substring(0, 1) === "√") {
      const raizQuadrada = valor.replace("√", "");
      return Math.sqrt(raizQuadrada);
    }
  }
}