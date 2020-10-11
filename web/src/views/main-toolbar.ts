import { CtLit, html, property, customElement, css } from '@conectate/ct-lit';


@customElement('main-toolbar')
export class MainToolbar extends CtLit {

    static styles = css`
    :host {
        display: flex;
        align-items:center;
        padding: 16px 24px;
        height:52px;
        box-sizing: border-box;
        background:#016097;
        color: #fff;
        box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149);
    }
    `;

    render() {
        return html`
        <h4>Sopes 1</h4>
        `;
    }
}