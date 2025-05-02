'use strict';

var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');

function cn(...inputs) {
    return tailwindMerge.twMerge(clsx.clsx(...inputs));
}

exports.cn = cn;
//# sourceMappingURL=utils.js.map
