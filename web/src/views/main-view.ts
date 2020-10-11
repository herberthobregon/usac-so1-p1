import "./main-pages";
import { CtLit, html, property, customElement, css } from "@conectate/ct-lit";
import "./main-toolbar";
@customElement("main-view")
export class MainView extends CtLit {
	static styles = css`
		:host {
			display: block;
		}
	`;

	render() {
		return html`
			<main-toolbar></main-toolbar>
			<main-pages></main-pages>
		`;
	}
}
