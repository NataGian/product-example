import {ComponentType} from 'react';
import {PageDefinition, PageOptions} from "@/lib/types";

export class PageRegistry {
    pages: Map<string, PageDefinition> = new Map();
    routes: Map<string, string> = new Map();

    registerPage(key: string, component: ComponentType<any>, route: string, options: PageOptions = {}) {
        this.pages.set(key, {component, options});
        this.routes.set(route, key);
        return this;
    }

    getRegisteredPages() {
        return Array.from(this.pages.entries()).map(([key, {component, options}]) => ({
            key,
            component,
            options
        }));
    }

    getRoutes() {
        return Array.from(this.routes.entries());
    }
}

export const createRegistry = () => new PageRegistry();