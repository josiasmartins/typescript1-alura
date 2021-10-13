import { View } from "./view.js";

export class MensagemView extends View<string> {

    // TODO: colocado o protected para o desenvolvedor não ver o método template no controller
    protected template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `
    }
   
}
