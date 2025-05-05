'use strict';

var tslib_es6_js = require('C:\\Users\\NataliaGIANNOULI\\IdeaProjects\\product-example\\node_modules\\tslib\\tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var reactSlot = require('@radix-ui/react-slot');
var lucideReact = require('lucide-react');
var utils = require('../../lib/utils.js');

function Breadcrumb(_a) {
    var props = tslib_es6_js.__rest(_a, []);
    return jsxRuntime.jsx("nav", Object.assign({ "aria-label": "breadcrumb", "data-slot": "breadcrumb" }, props));
}
function BreadcrumbList(_a) {
    var { className } = _a, props = tslib_es6_js.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("ol", Object.assign({ "data-slot": "breadcrumb-list", className: utils.cn("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5", className) }, props)));
}
function BreadcrumbItem(_a) {
    var { className } = _a, props = tslib_es6_js.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("li", Object.assign({ "data-slot": "breadcrumb-item", className: utils.cn("inline-flex items-center gap-1.5", className) }, props)));
}
function BreadcrumbLink(_a) {
    var { asChild, className } = _a, props = tslib_es6_js.__rest(_a, ["asChild", "className"]);
    const Comp = asChild ? reactSlot.Slot : "a";
    return (jsxRuntime.jsx(Comp, Object.assign({ "data-slot": "breadcrumb-link", className: utils.cn("hover:text-foreground transition-colors", className) }, props)));
}
function BreadcrumbPage(_a) {
    var { className } = _a, props = tslib_es6_js.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("span", Object.assign({ "data-slot": "breadcrumb-page", role: "link", "aria-disabled": "true", "aria-current": "page", className: utils.cn("text-foreground font-normal", className) }, props)));
}
function BreadcrumbSeparator(_a) {
    var { children, className } = _a, props = tslib_es6_js.__rest(_a, ["children", "className"]);
    return (jsxRuntime.jsx("li", Object.assign({ "data-slot": "breadcrumb-separator", role: "presentation", "aria-hidden": "true", className: utils.cn("[&>svg]:size-3.5", className) }, props, { children: children !== null && children !== void 0 ? children : jsxRuntime.jsx(lucideReact.ChevronRight, {}) })));
}
function BreadcrumbEllipsis(_a) {
    var { className } = _a, props = tslib_es6_js.__rest(_a, ["className"]);
    return (jsxRuntime.jsxs("span", Object.assign({ "data-slot": "breadcrumb-ellipsis", role: "presentation", "aria-hidden": "true", className: utils.cn("flex size-9 items-center justify-center", className) }, props, { children: [jsxRuntime.jsx(lucideReact.MoreHorizontal, { className: "size-4" }), jsxRuntime.jsx("span", { className: "sr-only", children: "More" })] })));
}

exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbEllipsis = BreadcrumbEllipsis;
exports.BreadcrumbItem = BreadcrumbItem;
exports.BreadcrumbLink = BreadcrumbLink;
exports.BreadcrumbList = BreadcrumbList;
exports.BreadcrumbPage = BreadcrumbPage;
exports.BreadcrumbSeparator = BreadcrumbSeparator;
//# sourceMappingURL=breadcrumb.js.map
