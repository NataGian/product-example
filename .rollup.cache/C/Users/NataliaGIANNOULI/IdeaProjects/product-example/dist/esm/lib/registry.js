export class PageRegistry {
    constructor() {
        this.pages = new Map();
        this.routes = new Map();
    }
    registerPage(key, component, route, options = {}) {
        this.pages.set(key, { component, options });
        this.routes.set(route, key);
        return this;
    }
    getRegisteredPages() {
        return Array.from(this.pages.entries()).map(([key, { component, options }]) => ({
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
//# sourceMappingURL=registry.js.map