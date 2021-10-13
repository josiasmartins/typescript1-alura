import { View } from "./view.js";
export class MensagemView extends View {
    // TODO: colocado o protected para o desenvolvedor não ver o método template no controller
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
