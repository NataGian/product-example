"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sheet = Sheet;
exports.SheetTrigger = SheetTrigger;
exports.SheetClose = SheetClose;
exports.SheetContent = SheetContent;
exports.SheetHeader = SheetHeader;
exports.SheetFooter = SheetFooter;
exports.SheetTitle = SheetTitle;
exports.SheetDescription = SheetDescription;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const SheetPrimitive = tslib_1.__importStar(require("@radix-ui/react-dialog"));
const lucide_react_1 = require("lucide-react");
const utils_1 = require("@/lib/utils");
function Sheet(_a) {
    var props = tslib_1.__rest(_a, []);
    return (0, jsx_runtime_1.jsx)(SheetPrimitive.Root, Object.assign({ "data-slot": "sheet" }, props));
}
function SheetTrigger(_a) {
    var props = tslib_1.__rest(_a, []);
    return (0, jsx_runtime_1.jsx)(SheetPrimitive.Trigger, Object.assign({ "data-slot": "sheet-trigger" }, props));
}
function SheetClose(_a) {
    var props = tslib_1.__rest(_a, []);
    return (0, jsx_runtime_1.jsx)(SheetPrimitive.Close, Object.assign({ "data-slot": "sheet-close" }, props));
}
function SheetPortal(_a) {
    var props = tslib_1.__rest(_a, []);
    return (0, jsx_runtime_1.jsx)(SheetPrimitive.Portal, Object.assign({ "data-slot": "sheet-portal" }, props));
}
function SheetOverlay(_a) {
    var { className } = _a, props = tslib_1.__rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(SheetPrimitive.Overlay, Object.assign({ "data-slot": "sheet-overlay", className: (0, utils_1.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className) }, props)));
}
function SheetContent(_a) {
    var { className, children, side = "right" } = _a, props = tslib_1.__rest(_a, ["className", "children", "side"]);
    return ((0, jsx_runtime_1.jsxs)(SheetPortal, { children: [(0, jsx_runtime_1.jsx)(SheetOverlay, {}), (0, jsx_runtime_1.jsxs)(SheetPrimitive.Content, Object.assign({ "data-slot": "sheet-content", className: (0, utils_1.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" &&
                    "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" &&
                    "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" &&
                    "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" &&
                    "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className) }, props, { children: [children, (0, jsx_runtime_1.jsxs)(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.XIcon, { className: "size-4" }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Close" })] })] }))] }));
}
function SheetHeader(_a) {
    var { className } = _a, props = tslib_1.__rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ "data-slot": "sheet-header", className: (0, utils_1.cn)("flex flex-col gap-1.5 p-4", className) }, props)));
}
function SheetFooter(_a) {
    var { className } = _a, props = tslib_1.__rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ "data-slot": "sheet-footer", className: (0, utils_1.cn)("mt-auto flex flex-col gap-2 p-4", className) }, props)));
}
function SheetTitle(_a) {
    var { className } = _a, props = tslib_1.__rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(SheetPrimitive.Title, Object.assign({ "data-slot": "sheet-title", className: (0, utils_1.cn)("text-foreground font-semibold", className) }, props)));
}
function SheetDescription(_a) {
    var { className } = _a, props = tslib_1.__rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(SheetPrimitive.Description, Object.assign({ "data-slot": "sheet-description", className: (0, utils_1.cn)("text-muted-foreground text-sm", className) }, props)));
}
//# sourceMappingURL=sheet.js.map