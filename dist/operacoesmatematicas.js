"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divisao = exports.Multiplicacao = exports.Subtracao = exports.Soma = void 0;
class Soma {
    calcular(a, b) {
        return a + b;
    }
}
exports.Soma = Soma;
class Subtracao {
    calcular(a, b) {
        return a - b;
    }
}
exports.Subtracao = Subtracao;
class Multiplicacao {
    calcular(a, b) {
        return a * b;
    }
}
exports.Multiplicacao = Multiplicacao;
class Divisao {
    calcular(a, b) {
        if (b === 0) {
            throw new Error("Não é possível dividir por zero");
        }
        return a / b;
    }
}
exports.Divisao = Divisao;
