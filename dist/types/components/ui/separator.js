"use client";
import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '../../lib/utils.js';

function Separator(_a) {
    var { className, orientation = "horizontal", decorative = true } = _a, props = __rest(_a, ["className", "orientation", "decorative"]);
    return (jsx(SeparatorPrimitive.Root, Object.assign({ "data-slot": "separator-root", decorative: decorative, orientation: orientation, className: cn("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className) }, props)));
}

export { Separator };
//# sourceMappingURL=separator.js.map
