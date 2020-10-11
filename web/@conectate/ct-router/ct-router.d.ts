import { LitElement } from 'lit-element';
import { C2RegexpType } from './path_to_regexp';
export interface Page {
    path: string;
    element: any;
    from: () => any;
    auth: boolean | null;
    title: (() => string) | (() => null);
    regex?: RegExp;
    groups?: string[];
    [x: string]: any;
}
export interface Routes {
    path: string;
    element: string;
    c2regexp: C2RegexpType;
    from: () => any;
    auth: boolean | null;
    title: (() => string) | (() => null);
}
declare global {
    interface HTMLElementTagNameMap {
        'ct-router': CtRouter;
    }
}
/**
 * @event login-needed It triggers when a page requires authentication but the user is not yet logged in
 * @event loading It fires when a page is imported diamicamente and it is fired again when it finishes loading the page
 * @event location-changed it shoots when the route changes
 */
export declare class CtRouter extends LitElement {
    $: {
        [x: string]: HTMLElement | any;
    };
    _routes: {
        [x: string]: Routes;
    };
    _currentView: any;
    pages: Page[];
    patternMatched: string;
    pathname: string;
    queryParams: {
        [x: string]: string;
    };
    params: {
        [x: string]: string;
    };
    auth: boolean;
    loginFallback: string;
    render(): import("lit-element").TemplateResult;
    constructor();
    updated(_changedProperties: Map<PropertyKey, unknown>): void;
    /**
     *
     * @param data {Object}
     * @param title {String}
     * @param url {string | null}
     */
    replaceState(data: object, title: string, url: string): void;
    handleRoutes(location: Location): void;
    static get properties(): {
        /**
         * Array de elementos {path,element(HTML),from,auth,title}
         */
        pages: {
            type: ArrayConstructor;
        };
        /**
         * Parametro para verificar el auto
         */
        auth: {
            type: BooleanConstructor;
        };
        /**
         * Comes from app-location. The current most important parts here
         * are `path` and `__queryParams` which sets the `path` and `queryParams`
         * of this element respectively.
         */
        _route: {
            type: ObjectConstructor;
        };
        /**
         * The current path of the app. Changes depending on the URL put at the top
         * or pushed in the state of the browser
         */
        path: {
            type: StringConstructor;
        };
        /**
         * This is an object that holds the values of the parameters in the route
         * pattern set in the current page element being viewed.
         */
        params: {
            type: ObjectConstructor;
        };
        /**
         * This is an object that holds the values of the query parameters in the url
         */
        queryParams: {
            type: ObjectConstructor;
        };
        /**
         * This is required. This is the tag-name of the element that holds
         * the list of page elements that will need to be lazy-loaded.
         */
        parentTagName: {
            type: StringConstructor;
        };
        /**
         * This is for iron-selected navigation lists
         */
        currentRoute: {
            type: StringConstructor;
        };
        /**
         * This holds the current route that is being viewed
         */
        _currentView: {
            type: ObjectConstructor;
        };
        /**
         * This holds the next route to be viewed after the url has been changed.
         */
        patternMatched: {
            type: StringConstructor;
        };
        /**
         * This will be the registered element that holds all the source files of the
         * elements that needed to be lazy-loaded.
         */
        _fromElement: {
            type: ObjectConstructor;
        };
        /**
         * This is a dictionary of routes linked to its corresponding elements.
         */
        _routes: {
            type: ObjectConstructor;
        };
    };
    /**
     * Sets the path property
     */
    _setPath(path: string): void;
    /**
     * Sets the queryParams property and updates the element's params and queryParams
     * properties. It also calls the page element's updateView method if it exists
     */
    _setQueryParams(queryParams: {
        [x: string]: string;
    }): void;
    /**
     * Called in the attached lifecycle method to put the children to the dictionary
     * for easy referencing
     */
    _contentAdded(pages: Page[]): void;
    /**
     * Here is the magic! This is called when the path changes. It tries to look for a the pattern
     * that matches the path, then calls the _changeView method to change the view
     */
    _pathChanged(path: string): void;
    fire(name: string, value?: any): void;
}
export declare function href(path: string, name?: string): void;
export declare function getCtRouter(): CtRouter;
export declare function getQueryParams(): {
    [x: string]: any;
};
//# sourceMappingURL=ct-router.d.ts.map