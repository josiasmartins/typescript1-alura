import { NegociacaoController } from "../controllers/negociacao-controler"

export class Negociacao {
    // declaro as propriedades das minhas classes
    // o constructor recebe para cada declaração dessa, os parâmetros

    // private, const e public: modificadores de acesso
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
     ) {}

    get volume(): number {
        return this.quantidade * this.valor
    }

    get data(): Date {
        // getTime(): retorna a data em milissegundo
        const data = new Date(this._data.getTime());
        return this._data
    }

    // TODO static: todo o método static é o método que posso chamar diretamente da classe
    // posso acessar diretamente na classe, sem precisar criar uma instância dela
    public static criaDe(dateString: string, quantidadeString: string, valorString: string   ): Negociacao {
        // expressão regular
        const exp = /-/g
        const date = new Date(dateString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}

