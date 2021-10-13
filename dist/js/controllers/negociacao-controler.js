import { DiaDaSemana } from './../enums/dias-da-semana.js';
import { MensagemView } from './../views/mensagem-view.js';
import { NegociacoesView } from './../views/negociacoes-view.js';
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    // readonly: semonte leitura
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        // this.negociacoesView.template(model);
        this.negociacoesView.update(this.negociacoes);
        this.negociacoesView;
    }
    adicona() {
        const negociacao = new Negociacao(null, 0, 0).criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        // negociacao.data.setDate(12) //
        this.negociacoes.adiciona(negociacao);
        // this.negociacoes.lista() // pop() não funciona porque utilizei spreedOperators
        console.log(this.negociacoes.lista());
        this.limparFormulario();
        this.atualizarView();
    }
    ehDiaUtil(date) {
        return date.getDay() > DiaDaSemana.DOMINGO && date.getDay() > DiaDaSemana.SEXTA;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    ;
    atualizarView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
}
