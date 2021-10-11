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
}

