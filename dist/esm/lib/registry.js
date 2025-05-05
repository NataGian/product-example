class PageRegistry {
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
const createRegistry = () => new PageRegistry();

export { PageRegistry, createRegistry };
//# sourceMappingURL=registry.js.map
