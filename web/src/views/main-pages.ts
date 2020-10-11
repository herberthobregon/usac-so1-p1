import { CtLit, html, property, customElement, css } from "@conectate/ct-lit";
import "@conectate/ct-router";
import { CtRouter } from "@conectate/ct-router";

@customElement("main-pages")
export class MainPages extends CtLit {
	static styles = css`
		:host {
			display: block;
		}
	`;

	render() {
		return html` <ct-router id="router"> </ct-router>`;
	}

	$!: {
		router: CtRouter;
	};

	firstUpdated() {
        // @ts-ignore
        this.$ = {}
		this.mapIDs();
		this.$.router.pages = [
			{
				path: "/",
				element: html`<page-posts></page-posts>`, // you cand use html``
				from: () => import("./page-posts"),
				auth: false,
				title: () => `Page 1 • Example.com`
			},
			{
				path: "/graficos",
				element: html`<page-graficos></page-graficos>`,
				from: () => import("./page-graficos"),
				auth: true,
				title: () => `Profile • Example.com`
			}
		];
	}
}
