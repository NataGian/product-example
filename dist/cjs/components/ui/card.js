'use strict';

var tslib_es6_js = require('C:\\Users\\NataliaGIANNOULI\\IdeaProjects\\product-example\\node_modules\\tslib\\tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var utils = require('../../lib/utils.js');

function Card(_a) {
    var { className } = _a, props = tslib_es6_js.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("div", Object.assign({ "data-slot": "card", className: utils.cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className) }, props)));
}
function CardHeader(_a) {
    var { className } = _a, props = tslib_es6_js.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("div", Object.assign({ "data-slot": "card-header", className: utils.cn("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className) }, props)));
}
function CardTitle(_a) {
    var { className } = _a, props = tslib_es6_js.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("div", Object.assign({ "data-slot": "card-title", className: utils.cn("leading-none font-semibold", className) }, props)));
}
function CardDescription(_a) {
    var { className } = _a, props = tslib_es6_js.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("div", Object.assign({ "data-slot": "card-description", className: utils.cn("text-muted-foreground text-sm", className) }, props)));
}
function CardAction(_a) {
    var { className } = _a, props = tslib_es6_js.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("div", Object.assign({ "data-slot": "card-action", className: utils.cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className) }, props)));
}
function CardContent(_a) {
    var { className } = _a, props = tslib_es6_js.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("div", Object.assign({ "data-slot": "card-content", className: utils.cn("px-6", className) }, props)));
}
function CardFooter(_a) {
    var { className } = _a, props = tslib_es6_js.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("div", Object.assign({ "data-slot": "card-footer", className: utils.cn("flex items-center px-6 [.border-t]:pt-6", className) }, props)));
}

exports.Card = Card;
exports.CardAction = CardAction;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
//# sourceMappingURL=card.js.map
