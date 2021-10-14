import { NegociacaoController } from "./controllers/negociacao-controler.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adicona();
});
const x = 'Flavio';
