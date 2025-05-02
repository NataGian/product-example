import { ComponentType } from 'react';
import { PageDefinition, PageOptions } from "@/lib/types";
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
