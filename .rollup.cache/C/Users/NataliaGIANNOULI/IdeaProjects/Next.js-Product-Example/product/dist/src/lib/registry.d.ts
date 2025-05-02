import { ComponentType } from 'react';
export interface PageOptions {
    [key: string]: any;
}
export interface PageDefinition {
    component: ComponentType<any>;
    options: PageOptions;
}
export declare class PageRegistry {
    pages: Map<string, PageDefinition>;
    routes: Map<string, string>;
    registerPage(key: string, component: ComponentType<any>, route: string, options?: PageOptions): this;
    getRegisteredPages(): {
        key: string;
        component: ComponentType<any>;
        options: PageOptions;
    }[];
    getRoutes(): [string, string][];
}
export declare const createRegistry: () => PageRegistry;
