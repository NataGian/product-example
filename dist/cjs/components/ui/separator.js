"use client";
'use strict';

var tslib_es6_js = require('C:\\Users\\NataliaGIANNOULI\\IdeaProjects\\product-example\\node_modules\\tslib\\tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var SeparatorPrimitive = require('@radix-ui/react-separator');
var utils = require('../../lib/utils.js');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var SeparatorPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(SeparatorPrimitive);

function Separator(_a) {
    var { className, orientation = "horizontal", decorative = true } = _a, props = tslib_es6_js.__rest(_a, ["className", "orientation", "decorative"]);
    return (jsxRuntime.jsx(SeparatorPrimitive__namespace.Root, Object.assign({ "data-slot": "separator-root", decorative: decorative, orientation: orientation, className: utils.cn("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className) }, props)));
}

exports.Separator = Separator;
//# sourceMappingURL=separator.js.map
