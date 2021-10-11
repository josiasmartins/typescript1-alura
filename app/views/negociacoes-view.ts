import { Negociacao } from "../models/negociacao";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {

    private elemento: HTMLElement

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    // o método template serve para declarar o template da view
    template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map( negociacao => {
                        return `
                            <tr>
                                // Intl: internacionalization. Vai chamr uma instância dele
                                // como se uma classe que tem vários métodos estáticos.
                                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>

                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    // o método update serve para renderizar esse template 
    update(model: Negociacoes): void {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;  
    }
}