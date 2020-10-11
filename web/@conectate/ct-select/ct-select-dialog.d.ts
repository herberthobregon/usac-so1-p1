import { CtLit } from '@conectate/ct-lit';
import '@conectate/ct-card/ct-card';
import '@conectate/ct-button/ct-button';
import '@conectate/ct-input/ct-input';
import '@conectate/ct-dialog/ct-dialog';
import { CtDialog } from '@conectate/ct-dialog/ct-dialog';
import { CSSResult } from 'lit-element';
/**
 *
 * @param title
 * @param items
 * @param value
 * @param ok
 * @param cancel
 * @param options Object of multi,searchable,searchPlaceholder
 * @returns {LitElement<ct-select-dialog>}
 */
export interface OptionsCtSelect {
    searchable: boolean;
    multi: boolean;
    searchPlaceholder: string;
    textProperty: string;
    valueProperty: string;
}
export declare function showCtSelect(title: string, items: any[] | undefined, value: any[] | undefined, ok: string | undefined, cancel: string | undefined, options: OptionsCtSelect): {
    dialog: CtSelectDialog;
    result: Promise<any>;
};
export declare class CtSelectDialog extends CtLit {
    solve: (value?: any) => void;
    reject: (value?: any) => void;
    ttl: string;
    searchable: boolean;
    searchPlaceholder: string;
    items: any[];
    valueProperty: string;
    textProperty: string;
    ok: string;
    neutral: string;
    cancel: string;
    /**
     * Arrar of selected items
     */
    value: string | string[];
    /**
     * If true, multiple options can be selected.
     */
    multi: boolean;
    selectedPlaceholder: string;
    multiValue: any[];
    dialog: CtDialog;
    renderItem: (item: any, index: number, array: any[]) => import("lit-element").TemplateResult;
    static styles: CSSResult[];
    render(): import("lit-element").TemplateResult;
    firstUpdated(_e: Map<PropertyKey, unknown>): void;
    /**
     * Shows/Hides listbox items based on searchText
     *
     * @param searchText Text to be matched in item's label.
     * @private
     */
    _filter(searchText: string): void;
    typeOf(obj: any): string;
    addSelectedClass(value: any): "" | "selected";
    computeBtns(ok: string, neutral: string, cancel: string): void;
    onClickItem(e: any, value: any): Promise<void>;
    okbtn(): Promise<void>;
    cancelbtn(): Promise<void>;
    onResult(): Promise<any[] | any>;
}
//# sourceMappingURL=ct-select-dialog.d.ts.map