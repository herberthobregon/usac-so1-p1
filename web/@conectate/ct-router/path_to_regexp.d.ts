interface OptionsType {
    sensitive?: boolean;
    strict?: boolean;
    end?: boolean;
    start?: boolean;
    delimiter?: boolean;
    endsWith?: string;
    whitelist?: any[];
}
export interface C2RegexpType {
    regexp: RegExp;
    groups: string[];
}
/**
 * Normalize the given path string,
 * returning a regular expression.
 *
 * An empty array should be passed,
 * which will contain the placeholder
 * key names. For example "/user/:id" will
 * then contain ["id"].
 *
 * @param  {String|RegExp|Array} path
 * @param  {Array} keys
 * @param  {OptionsType} options
 * @return {RegExp}
 * @api private
 */
export declare function pathtoRegexp(path: string | RegExp | Array<any>, keys: Array<any>, options: OptionsType): RegExp;
export declare function EvaluateParams(path: string, c2regexp: C2RegexpType): any;
export declare function C2Regexp(path: string): C2RegexpType;
export {};
//# sourceMappingURL=path_to_regexp.d.ts.map