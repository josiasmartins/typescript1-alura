import { Negociacoes } from "../models/negociacoes.js";

// View<T>: a classe view é do tipo genérica
// abstract: vc não pode criar uma instancia, classe abstract, diretamente dela
export abstract class View<T> {
    // protected: modificador de acesso. Só ele tem acesso a esse elemento, mas minhas filhas pode tocar
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

       // o método update serve para renderizar esse template 
       public update(model: T): void {
            const template = this.template(model);
            console.log(template);
            this.elemento.innerHTML = template;  
       };

       protected abstract template(model: T): string;
}