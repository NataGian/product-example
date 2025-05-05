"use client";
'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var AvatarPrimitive = require('@radix-ui/react-avatar');
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

var AvatarPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(AvatarPrimitive);

function Avatar(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx(AvatarPrimitive__namespace.Root, Object.assign({ "data-slot": "avatar", className: utils.cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", className) }, props)));
}
function AvatarImage(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx(AvatarPrimitive__namespace.Image, Object.assign({ "data-slot": "avatar-image", className: utils.cn("aspect-square size-full", className) }, props)));
}
function AvatarFallback(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx(AvatarPrimitive__namespace.Fallback, Object.assign({ "data-slot": "avatar-fallback", className: utils.cn("bg-muted flex size-full items-center justify-center rounded-full", className) }, props)));
}

exports.Avatar = Avatar;
exports.AvatarFallback = AvatarFallback;
exports.AvatarImage = AvatarImage;
//# sourceMappingURL=avatar.js.map
