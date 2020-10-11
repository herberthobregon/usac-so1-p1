import { CtLit, html, property, customElement, css } from '@conectate/ct-lit';
import '@conectate/ct-select'

@customElement('page-posts')
export class PagePosts extends CtLit {

    static styles = css`
    :host {
        display: block;
    }
    `;

    render() {
        return html`
            <ct-select></ct-select>
        `;
    }
}