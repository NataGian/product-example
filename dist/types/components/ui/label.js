"use client";
import { __rest } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cn } from '../../lib/utils.js';

function Label(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (jsx(LabelPrimitive.Root, Object.assign({ "data-slot": "label", className: cn("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className) }, props)));
}

export { Label };
//# sourceMappingURL=label.js.map
