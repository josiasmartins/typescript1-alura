// ele guarda uma lista de negociações
export class Negociacoes {
    constructor() {
        // GENERICS serve para deixar tudo uniforme
        this.negociacoes = []; // outra forma de fazer: Negociacoes[] = []
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): Array<Negociacao> {
    //     // spredOperations: pega cada item desse array, individualmente, e coloca nessa lista
    //     return [...this.negociacoes];
    // }
    //outra forma de fazer isso, com tipescript
    // ReadonlyArray<>: é identico ao array, mas ele permite somente leitura
    // outra forma de fazer: ReadonlyArray<Negociacao> or readonly Negociacao[]
    lista() {
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => {
    n.quantidade;
});
