import { NegociacaoController } from "./controllers/negociacao-controler.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adicona();
    });
}
else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe');
}
const x = true;
