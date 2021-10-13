import { NegociacaoController } from "./controllers/negociacao-controler.js";
import { NegociacoesView } from "./views/negociacoes-view.js";
import { View } from "./views/view.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    // preventDefault: não deixa que a página recarregue toda hora
    event.preventDefault()
    controller.adicona();
});


