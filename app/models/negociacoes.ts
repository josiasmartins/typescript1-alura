import { Negociacao } from "./negociacao.js";

// ele guarda uma lista de negociações
export class Negociacoes {
    // GENERICS serve para deixar tudo uniforme
    private negociacoes: Array<Negociacao> = [] // outra forma de fazer: Negociacoes[] = []

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    // lista(): Array<Negociacao> {
    //     // spredOperations: pega cada item desse array, individualmente, e coloca nessa lista
    //     return [...this.negociacoes];
    // }
    //outra forma de fazer isso, com tipescript
    // ReadonlyArray<>: é identico ao array, mas ele permite somente leitura
    // outra forma de fazer: ReadonlyArray<Negociacao> or readonly Negociacao[]
    lista(): readonly Negociacao[] { 
        return this.negociacoes;
    }
}

const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => {
    n.quantidade
})