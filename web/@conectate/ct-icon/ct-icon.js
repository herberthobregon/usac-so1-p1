var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CtLit, customElement, html, property, unsafeHTML } from '@conectate/ct-lit';
let CtIcon = class CtIcon extends CtLit {
    constructor() {
        super(...arguments);
        this.svg = '';
    }
    render() {
        return html `<style>
				:host {
					display: inline-flex;
					vertical-align: middle;
					width: 24px;
					height: 24px;
				}
				svg {
					width: 100%;
					height: 100%;
					fill: currentColor;
				}</style>${unsafeHTML(this.svg)}`;
    }
};
__decorate([
    property({ type: String })
], CtIcon.prototype, "svg", void 0);
CtIcon = __decorate([
    customElement('ct-icon')
], CtIcon);
export { CtIcon };
//# sourceMappingURL=ct-icon.js.map