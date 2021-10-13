import { View } from './view.js';
import { Negociacao } from "../models/negociacao";
import { Negociacoes } from "../models/negociacoes.js";

// utiliza o extends para pegar a propriedades do pai (herança)
export class NegociacoesView extends View<Negociacoes> {

    // o método template serve para declarar o template da view
    protected template(model: Negociacoes): string {
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
                                <td>${this.formatar(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>

                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    // TODO: Intl: internacionalization. Vai chamr uma instância dele
    // como se uma classe que tem vários métodos estáticos.
    private formatar(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }
}