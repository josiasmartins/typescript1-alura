export class Negociacao {
    // declaro as propriedades das minhas classes
    // o constructor recebe para cada declaração dessa, os parâmetros
    // private, const e public: modificadores de acesso
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        // getTime(): retorna a data em milissegundo
        const data = new Date(this._data.getTime());
        return this.data;
    }
}
