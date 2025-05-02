"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppLayout = AppLayout;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = tslib_1.__importDefault(require("react"));
const utils_1 = require("@/lib/utils");
const breadcrumb_1 = require("@/components/ui/breadcrumb");
function AppLayout({ children, className, breadcrumbs = [], }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex-1 p-6 md:p-8", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full overflow-auto", children: [breadcrumbs.length > 0 && ((0, jsx_runtime_1.jsx)(breadcrumb_1.Breadcrumb, { className: "mb-4", children: breadcrumbs.map((item, i) => ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)(breadcrumb_1.BreadcrumbItem, { children: item.href ? ((0, jsx_runtime_1.jsx)(breadcrumb_1.BreadcrumbLink, { href: item.href, children: item.label })) : ((0, jsx_runtime_1.jsx)("span", { className: "text-muted-foreground", children: item.label })) }), i < breadcrumbs.length - 1 && (0, jsx_runtime_1.jsx)(breadcrumb_1.BreadcrumbSeparator, {})] }, i))) })), (0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("", className), children: children })] }) }));
}
//# sourceMappingURL=app-layout.js.map