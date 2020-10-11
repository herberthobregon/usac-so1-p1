var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CtLit, html, unsafeHTML, css } from '@conectate/ct-lit';
import '@conectate/ct-card/ct-card';
import '@conectate/ct-button/ct-button';
import '@conectate/ct-input/ct-input';
import '@conectate/ct-dialog/ct-dialog';
import { showCtDialog } from '@conectate/ct-dialog/ct-dialog';
import { property } from 'lit-element';
function removeAcento(input) {
    // Cadena de caracteres original a sustituir.
    let original = 'áàäêéèëíìïóòöúùuñÁÀÄÉÈËÍÌÏÓÒÖÚÙÜÑçÇ';
    // Cadena de caracteres ASCII que reemplazarán los originales.
    let ascii = 'aaaeeeeiiiooouuunAAAEEEIIIOOOUUUNcC';
    let output = input;
    for (let i = 0; i < original.length; i++) {
        // Reemplazamos los caracteres especiales.
        output = output.replace(original.charAt(i), ascii.charAt(i));
    }
    return output;
}
export function showCtSelect(title, items = [], value = [], ok = 'Ok', cancel = 'Cancel', options) {
    let selectDialog = document.createElement('ct-select-dialog');
    selectDialog.ttl = title;
    selectDialog.items = items;
    selectDialog.ok = ok ? ok : 'OK';
    selectDialog.searchable = options.searchable;
    selectDialog.searchPlaceholder = options.searchPlaceholder;
    selectDialog.textProperty = options.textProperty;
    selectDialog.valueProperty = options.valueProperty;
    selectDialog.cancel = cancel ? cancel : 'Cancel';
    if (options.multi) {
        selectDialog.multi = options.multi;
        selectDialog.multiValue = value ? [...value] : [];
    }
    selectDialog.dialog = showCtDialog(selectDialog);
    // selectDialog.dialog.addEventListener("on-close", () => {
    // 	selectDialog.solve(undefined);
    // });
    return { dialog: selectDialog, result: selectDialog.onResult() };
}
// @ts-ignore
window.showCtSelect = showCtSelect;
export class CtSelectDialog extends CtLit {
    constructor() {
        super(...arguments);
        this.searchable = false;
        this.searchPlaceholder = 'Search...';
        this.items = [];
        /**
         * If true, multiple options can be selected.
         */
        this.multi = false;
        this.selectedPlaceholder = 'items selected';
        this.multiValue = [];
        this.renderItem = (item, index, array) => html ` <button class="${this.addSelectedClass(item[this.valueProperty])}">${unsafeHTML(item[this.textProperty])}</button> `;
    }
    render() {
        return html `
			<ct-card shadow border>
				<div class="title">${this.ttl}</div>
				${this.searchable ? html ` <ct-input @value="${(e) => this._filter(e.detail)}" .placeholder="${this.searchPlaceholder}"> </ct-input> ` : html ``}
				<div class="body" id="confirmBody">
					${this.items.map((i, index, arr) => {
            return html ` <div @click="${(e) => this.onClickItem(e, i[this.valueProperty])}">${this.renderItem(i, index, arr)}</div> `;
        })}
				</div>
				<div id="buttons" class="buttons">
					<div class="flex"></div>
					<ct-button id="cancel" @click="${this.cancelbtn}" shadow>${this.cancel}</ct-button>
					${this.multi ? html ` <ct-button raised id="ok" @click="${this.okbtn}">${this.ok}</ct-button> ` : html ``}
				</div>
			</ct-card>
		`;
    }
    firstUpdated(_e) {
        this.mapIDs();
        this.computeBtns(this.ok, this.neutral, this.cancel);
    }
    /**
     * Shows/Hides listbox items based on searchText
     *
     * @param searchText Text to be matched in item's label.
     * @private
     */
    _filter(searchText) {
        const items = this.$$$('button');
        for (let index = 0; index < items.length; index++) {
            let display;
            if (this.items[index][this.textProperty] == null)
                continue;
            let text = removeAcento(this.items[index][this.textProperty].toLowerCase());
            let texts = removeAcento(searchText.toLowerCase());
            if (text.indexOf(texts) > -1)
                display = 'block';
            else
                display = 'none';
            items[index].style.display = display;
        }
    }
    typeOf(obj) {
        return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
    }
    addSelectedClass(value) {
        if (this.typeOf(value) == 'object') {
            return this.multiValue.find((item) => JSON.stringify(item) == JSON.stringify(value)) ? 'selected' : '';
        }
        return this.multiValue.indexOf(value) > -1 ? 'selected' : '';
    }
    computeBtns(ok, neutral, cancel) {
        let auxok = ok || '', auxcancel = cancel || '';
        if (auxok.length > 15 || auxcancel.length > 15) {
            this.$.buttons.classList.add('buttons_vert');
        }
        if (cancel == null) {
            this.$.cancel.style.display = 'none';
        }
    }
    async onClickItem(e, value) {
        if (!this.multi) {
            this.solve(value);
            await this.dialog.closeDialog();
        }
        else {
            let selected = e.target.classList.contains('selected');
            e.target.classList.toggle('selected', !selected);
            if (selected) {
                this.multiValue.splice(this.multiValue.indexOf(value), 1);
            }
            else if (value != null) {
                this.multiValue.push(value);
            }
        }
    }
    async okbtn() {
        await this.dialog.closeDialog();
        this.solve(this.multiValue);
    }
    async cancelbtn() {
        await this.dialog.closeDialog();
        this.solve(undefined);
    }
    onResult() {
        return new Promise((resolve, reject) => {
            this.solve = resolve;
            this.reject = reject;
        });
    }
}
CtSelectDialog.styles = [
    css `
			:host {
				display: block;
				/* height: 100%; */
			}

			.title {
				font-family: 'Google Sans', 'Ubuntu', 'Roboto', sans-serif;
				font-size: 1.5em;
				font-weight: 400;
				margin: 24px 24px 0;
				color: var(--on-surface, #535353);
			}

			.body {
				margin: 20px 24px 24px;
				color: #383838;
				overflow-y: auto;
			}

			.body::-webkit-scrollbar {
				width: 9px;
			}

			.body::-webkit-scrollbar-track {
				border-radius: 8px;
			}

			.body::-webkit-scrollbar-thumb {
				background-color: var(--primary-color);
				outline: 1px solid slategrey;
				border-radius: 8px;
			}

			.flex {
				flex: 1;
			}

			.buttons {
				color: var(--primary-color);
				display: block;
				flex-direction: row;
				text-align: right;
				font-weight: bold;
				padding: 16px;
			}

			paper-button {
				display: block;
				font-family: 'Google Sans', 'Ubuntu', 'Roboto', sans-serif;
				padding: 0.45em 1.7em;
				font-size: 0.95em;
				border-radius: 8px;
				text-transform: none;
			}

			#ok {
				color: #fff;
			}

			a {
				text-decoration: none;
				color: var(--primary-color);
			}

			button {
				min-width: 170px;
				color: var(--on-surface, #535353);
				margin: 0;
				padding: 6px 16px;
				height: 38px;
				width: 100%;
				background: none;
				outline: none;
				border: none;
				text-align: left;
				border-bottom: 1px solid var(--on-surface-dividers, #e8e8e8);
				cursor: pointer;
				transition: all 0.15s ease;
			}

			button:hover {
				background: var(--primary-color-light);
				color: var(--primary-color);
				border-radius: 8px;
			}

			:host([multi]) button {
				background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCc+PHBhdGggZD0nTTE5IDV2MTRINVY1aDE0bTAtMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6Jy8+PC9zdmc+')
					no-repeat 7px 6px;
				padding-left: 40px;
			}

			:host([multi]) button.selected {
				background: #def7ffee
					url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCc+PHBhdGggZD0nTTE5IDNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMTEgMCAyLS45IDItMlY1YzAtMS4xLS44OS0yLTItMnptLTkgMTRsLTUtNSAxLjQxLTEuNDFMMTAgMTQuMTdsNy41OS03LjU5TDE5IDhsLTkgOXonLz48L3N2Zz4=')
					no-repeat 7px 6px;
			}

			ct-input {
				margin: 16px 16px 0;
				display: block;
			}

			ct-card {
				display: flex;
				flex-direction: column;
				max-height: 100%;
				margin: 0;
				background: var(--app-surface, #fff);
			}

			@media (max-width: 800px) {
				.buttons_vert {
					flex-direction: column;
					text-align: right;
				}
			}
		`
];
__decorate([
    property({ type: String })
], CtSelectDialog.prototype, "ttl", void 0);
__decorate([
    property({ type: Boolean })
], CtSelectDialog.prototype, "searchable", void 0);
__decorate([
    property({ type: String })
], CtSelectDialog.prototype, "searchPlaceholder", void 0);
__decorate([
    property({ type: Array })
], CtSelectDialog.prototype, "items", void 0);
__decorate([
    property({ type: String })
], CtSelectDialog.prototype, "valueProperty", void 0);
__decorate([
    property({ type: String })
], CtSelectDialog.prototype, "textProperty", void 0);
__decorate([
    property({ type: String })
], CtSelectDialog.prototype, "ok", void 0);
__decorate([
    property({ type: String })
], CtSelectDialog.prototype, "neutral", void 0);
__decorate([
    property({ type: String })
], CtSelectDialog.prototype, "cancel", void 0);
__decorate([
    property({ type: String })
], CtSelectDialog.prototype, "value", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], CtSelectDialog.prototype, "multi", void 0);
__decorate([
    property({ type: String })
], CtSelectDialog.prototype, "selectedPlaceholder", void 0);
__decorate([
    property({ type: Array })
], CtSelectDialog.prototype, "multiValue", void 0);
__decorate([
    property({ type: Object })
], CtSelectDialog.prototype, "dialog", void 0);
__decorate([
    property({ type: Object })
], CtSelectDialog.prototype, "renderItem", void 0);
window.customElements.define('ct-select-dialog', CtSelectDialog);
//# sourceMappingURL=ct-select-dialog.js.map