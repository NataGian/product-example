"use client";
import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
function Avatar(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(AvatarPrimitive.Root, Object.assign({ "data-slot": "avatar", className: cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", className) }, props)));
}
function AvatarImage(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(AvatarPrimitive.Image, Object.assign({ "data-slot": "avatar-image", className: cn("aspect-square size-full", className) }, props)));
}
function AvatarFallback(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(AvatarPrimitive.Fallback, Object.assign({ "data-slot": "avatar-fallback", className: cn("bg-muted flex size-full items-center justify-center rounded-full", className) }, props)));
}
export { Avatar, AvatarImage, AvatarFallback };
//# sourceMappingURL=avatar.js.map