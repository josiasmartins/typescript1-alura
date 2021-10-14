import { DiaDaSemana } from './../enums/dias-da-semana.js';
import { MensagemView } from './../views/mensagem-view.js';
import { NegociacoesView } from './../views/negociacoes-view.js';
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private inputData: HTMLInputElement | null;
    private inputQuantidade: HTMLInputElement | null;
    private inputValor: HTMLInputElement | null;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView');
    // readonly: semonte leitura

    constructor() {
        // as: fez um cache
        this.inputData = <HTMLInputElement>document.querySelector('#data'); // outra forma de fazer: as HTMLInputElement;
        this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
        this.inputValor = document.querySelector("#valor") as HTMLInputElement;
        // this.negociacoesView.template(model);
        this.negociacoesView.update(this.negociacoes);
        this.negociacoesView
    }

    public adicona(): void  {
        /**
         *  Zé, você já viu isso?
         */
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas')
            return ;
        }
        // negociacao.data.setDate(12) //
        this.negociacoes.adiciona(negociacao);
        // this.negociacoes.lista() // pop() não funciona porque utilizei spreedOperators
        console.log(this.negociacoes.lista());
        this.limparFormulario();
        this.atualizarView();
       
    }

    private ehDiaUtil(date: Date) {
        return date.getDay() > DiaDaSemana.DOMINGO && date.getDay() > DiaDaSemana.SEXTA;
    } 


    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    };

    private atualizarView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
}