// View<T>: a classe view é do tipo genérica
// abstract: vc não pode criar uma instancia, classe abstract, diretamente dela
export class View {
    // TODO: opcionais não funciona no primeiro parâmetro
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
        if (escapar) {
            this.escapar = escapar;
        }
    }
    // o método update serve para renderizar esse template 
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            // expressão regular: remove todo mundo 
            template = template.replace(/<script>[\s\S]*?<\|<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
    ;
}
