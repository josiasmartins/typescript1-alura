// View<T>: a classe view é do tipo genérica
// abstract: vc não pode criar uma instancia, classe abstract, diretamente dela
export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    // o método update serve para renderizar esse template 
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
    ;
}
