export interface UAClientDescription {
    browser: 'firefox' | 'edge' | 'chrome' | 'facebook' | 'google_app' | 'ie' | 'safari' | 'safari_mobile' | 'other';
    browserVersion: number;
    isMobile: boolean;
    os: 'ios' | 'android' | 'linux' | 'mac' | 'windows' | 'playstation' | 'other';
    osVersion: number;
}
/**
 * Get Client description for a user agent string.
 */
export declare function getClient(ua?: string): UAClientDescription;
/**
 * Return the set of capabilities for a user agent string.
 */
export declare function browserCapabilities(userAgent: string): Set<"es2015" | "es2016" | "es2017" | "es2018" | "customElementsV1" | "push" | "serviceworker" | "modules">;
/**
 * Get GeoLocation in browser
 */
export declare function getGeoLocation(): Promise<{
    lat: number;
    lon: number;
}>;
/**
 * Sleep Promise
 */
export declare let sleep: (time: number) => Promise<unknown>;
/**
 * Generate Random ID
 */
export declare class PushID {
    PUSH_CHARS: string;
    lastPushTime: number;
    lastRandChars: number[];
    next(length?: number): string;
    decodePushID(str: string): number;
}
//# sourceMappingURL=ct-helpers.d.ts.map