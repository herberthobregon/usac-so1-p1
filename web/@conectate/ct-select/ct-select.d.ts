import { CtLit } from '@conectate/ct-lit';
import { TemplateResult } from 'lit-element';
import './ct-select-dialog';
export interface KeyValueCtSelect {
    text: string;
    value: any;
    [x: string]: any;
}
/**
 *
 *
 * @group Conectate Elements
 * @element ct-select
 * @demo demo/index.html
 * @hero hero.svg
 * @homepage wc.conectate.today
 * This is my element
 * @prop {KeyValueCtSelect[]} items - items of select
 * @fires value - Cuando el valor del select Cambia
 * @fires items - Cuando se setean nuevos items al element
 */
export declare class CtSelect extends CtLit {
    disabled: boolean;
    raw_placeholder: string;
    okPlaceholder: string;
    cancelPlaceholder: string;
    selectedPlaceholder: string;
    label: any;
    invalid: any;
    valuePlaceholder: string;
    placeholder: string;
    searchPlaceholder: string;
    preventClick: boolean;
    order: any;
    textProperty: string;
    valueProperty: string;
    multi: any;
    _value: any;
    _text: any;
    _items: any;
    ttl: string;
    searchable: boolean;
    required: boolean;
    renderItem?: (item: any, index: number, array: any[]) => TemplateResult;
    render(): TemplateResult;
    searchIn: string;
    timeout: any;
    constructor();
    firstUpdated(): void;
    typeOf(obj: any): string;
    computeValues(): void;
    set value(val: any);
    setValue(val: any): Promise<void>;
    get value(): any;
    get text(): any;
    set text(val: any);
    set items(val: KeyValueCtSelect[]);
    burbuja(miArray: any, attr: string, order: 'desc' | 'asc'): any;
    get items(): KeyValueCtSelect[];
    static get properties(): {
        /**
         * Items para seleccionar
         */
        _items: {
            type: ArrayConstructor;
        };
        textProperty: {
            type: StringConstructor;
        };
        valueProperty: {
            type: StringConstructor;
        };
        order: {
            type: StringConstructor;
        };
        /**
         * Label of select
         */
        label: {
            type: StringConstructor;
        };
        /**
         * Array de items selected
         */
        value: {
            type: ObjectConstructor;
        };
        placeholder: {
            type: StringConstructor;
        };
        valuePlaceholder: {
            type: StringConstructor;
        };
        /**
         * Esto si se necesita que se puedan seleccionar muchos
         */
        multi: {
            type: BooleanConstructor;
        };
        ttl: {
            type: StringConstructor;
        };
        /**
         * OK btn placeholder
         */
        okPlaceholder: {
            type: StringConstructor;
        };
        /**
         * Cancel Btn placeholder
         */
        cancelPlaceholder: {
            type: StringConstructor;
        };
        /**
         * Placeholder when you select more of 3 items
         */
        selectedPlaceholder: {
            type: StringConstructor;
        };
        /**
         * Search placeholder
         */
        searchPlaceholder: {
            type: StringConstructor;
        };
        /**
         * Activate searchable option
         */
        searchable: {
            type: BooleanConstructor;
        };
        preventClick: {
            type: BooleanConstructor;
        };
        /**
         * if the required and this.value is null
         */
        invalid: {
            type: BooleanConstructor;
        };
        required: {
            type: BooleanConstructor;
        };
    };
    /**
     * Handle clic event of ct-select
     * @param e Event-click
     */
    onClickContainer(): void;
    /**
     * Call programmatically click event
     * @returns {Promise<void>}
     */
    showDialog(): Promise<void>;
    validate(): boolean;
    bounce(): Promise<void>;
}
//# sourceMappingURL=ct-select.d.ts.map