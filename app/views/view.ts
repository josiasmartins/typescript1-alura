import { Negociacoes } from "../models/negociacoes.js";

// View<T>: a classe view é do tipo genérica
// abstract: vc não pode criar uma instancia, classe abstract, diretamente dela
export abstract class View<T> {
    // protected: modificador de acesso. Só ele tem acesso a esse elemento, mas minhas filhas pode tocar
    protected elemento: HTMLElement;
    private escapar = false;

    // TODO: opcionais não funciona no primeiro parâmetro
    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            // as: diz que ele é um HTMLElement. Fazer um cache
            this.elemento = elemento as HTMLElement
        } else {
            throw Error(`Seletor não existe no DOM. Verifique`);
        }
        if (escapar) {
            this.escapar = escapar
        }
    }

       // o método update serve para renderizar esse template 
       public update(model: T): void {
            let template = this.template(model);
            if (this.escapar) {
                // expressão regular: remove todo mundo 
                template = template.replace(/<script>[\s\S]*?<\|<\/script>/, '');
            }
            this.elemento.innerHTML = template;  
       };

       protected abstract template(model: T): string;
}