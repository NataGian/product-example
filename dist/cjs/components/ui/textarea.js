'use strict';

var tslib_es6_js = require('C:\\Users\\NataliaGIANNOULI\\IdeaProjects\\product-example\\node_modules\\tslib\\tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var utils = require('../../lib/utils.js');

function Textarea(_a) {
    var { className } = _a, props = tslib_es6_js.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("textarea", Object.assign({ "data-slot": "textarea", className: utils.cn("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className) }, props)));
}

exports.Textarea = Textarea;
//# sourceMappingURL=textarea.js.map
