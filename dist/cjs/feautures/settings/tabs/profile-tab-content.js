'use strict';

var jsxRuntime = require('react/jsx-runtime');
var avatar = require('../../../components/ui/avatar.js');
require('../../../components/ui/badge.js');
require('../../../node_modules/tslib/tslib.es6.js');
require('@radix-ui/react-slot');
require('lucide-react');
require('clsx');
require('tailwind-merge');
var button = require('../../../components/ui/button.js');
var card = require('../../../components/ui/card.js');
var input = require('../../../components/ui/input.js');
var label = require('../../../components/ui/label.js');
require('@radix-ui/react-select');
var separator = require('../../../components/ui/separator.js');
require('../../../components/ui/sidebar.js');
require('@radix-ui/react-dialog');
var tabs = require('../../../components/ui/tabs.js');
var textarea = require('../../../components/ui/textarea.js');
require('react');
require('next/navigation');
require('../../../lib/constants.js');

function ProfileTabContent() {
    return (jsxRuntime.jsx(tabs.TabsContent, { value: "profile", className: "mt-0 space-y-6", children: jsxRuntime.jsxs(card.Card, { children: [jsxRuntime.jsxs(card.CardHeader, { children: [jsxRuntime.jsx(card.CardTitle, { children: "\u03A0\u03C1\u03BF\u03C6\u03AF\u03BB" }), jsxRuntime.jsx(card.CardDescription, { children: "\u0394\u03B9\u03B1\u03C7\u03B5\u03AF\u03C1\u03B9\u03C3\u03B7 \u03C4\u03C9\u03BD \u03B4\u03B7\u03BC\u03CC\u03C3\u03B9\u03C9\u03BD \u03C0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\u03C1\u03B9\u03CE\u03BD \u03C4\u03BF\u03C5 \u03C0\u03C1\u03BF\u03C6\u03AF\u03BB \u03C3\u03B1\u03C2" })] }), jsxRuntime.jsxs(card.CardContent, { className: "space-y-6", children: [jsxRuntime.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 items-start sm:items-center", children: [jsxRuntime.jsxs(avatar.Avatar, { className: "w-20 h-20", children: [jsxRuntime.jsx(avatar.AvatarImage, { alt: "\u03A0\u03C1\u03BF\u03C6\u03AF\u03BB" }), jsxRuntime.jsx(avatar.AvatarFallback, { children: "\u0393\u03A0" })] }), jsxRuntime.jsxs("div", { className: "space-y-2", children: [jsxRuntime.jsx(button.Button, { size: "sm", variant: "outline", children: "\u0391\u03BB\u03BB\u03B1\u03B3\u03AE \u0395\u03B9\u03BA\u03CC\u03BD\u03B1\u03C2" }), jsxRuntime.jsx("p", { className: "text-sm text-gray-500", children: "JPG, GIF \u03AE PNG. \u039C\u03AD\u03B3\u03B9\u03C3\u03C4\u03BF \u03BC\u03AD\u03B3\u03B5\u03B8\u03BF\u03C2 2MB." })] })] }), jsxRuntime.jsx(separator.Separator, {}), jsxRuntime.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [jsxRuntime.jsxs("div", { className: "space-y-2", children: [jsxRuntime.jsx(label.Label, { htmlFor: "firstName", children: "\u038C\u03BD\u03BF\u03BC\u03B1" }), jsxRuntime.jsx(input.Input, { id: "firstName", placeholder: "\u0393\u03B9\u03AC\u03BD\u03BD\u03B7\u03C2", defaultValue: "\u0393\u03B9\u03AC\u03BD\u03BD\u03B7\u03C2" })] }), jsxRuntime.jsxs("div", { className: "space-y-2", children: [jsxRuntime.jsx(label.Label, { htmlFor: "lastName", children: "\u0395\u03C0\u03CE\u03BD\u03C5\u03BC\u03BF" }), jsxRuntime.jsx(input.Input, { id: "lastName", placeholder: "\u03A0\u03B1\u03C0\u03B1\u03B4\u03CC\u03C0\u03BF\u03C5\u03BB\u03BF\u03C2", defaultValue: "\u03A0\u03B1\u03C0\u03B1\u03B4\u03CC\u03C0\u03BF\u03C5\u03BB\u03BF\u03C2" })] })] }), jsxRuntime.jsxs("div", { className: "space-y-2", children: [jsxRuntime.jsx(label.Label, { htmlFor: "email", children: "Email" }), jsxRuntime.jsx(input.Input, { id: "email", type: "email", placeholder: "giannis.papadopoulos@example.com", defaultValue: "giannis.papadopoulos@example.com" })] }), jsxRuntime.jsxs("div", { className: "space-y-2", children: [jsxRuntime.jsx(label.Label, { htmlFor: "bio", children: "\u0392\u03B9\u03BF\u03B3\u03C1\u03B1\u03C6\u03B9\u03BA\u03CC" }), jsxRuntime.jsx(textarea.Textarea, { id: "bio", placeholder: "\u03A0\u03B5\u03AF\u03C4\u03B5 \u03BC\u03B1\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03BF\u03BD \u03B5\u03B1\u03C5\u03C4\u03CC \u03C3\u03B1\u03C2", className: "min-h-32" })] })] }), jsxRuntime.jsxs(card.CardFooter, { className: "flex justify-end gap-2", children: [jsxRuntime.jsx(button.Button, { variant: "outline", children: "\u0391\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7" }), jsxRuntime.jsx(button.Button, { children: "\u0391\u03C0\u03BF\u03B8\u03AE\u03BA\u03B5\u03C5\u03C3\u03B7 \u0391\u03BB\u03BB\u03B1\u03B3\u03CE\u03BD" })] })] }) }));
}

exports.ProfileTabContent = ProfileTabContent;
//# sourceMappingURL=profile-tab-content.js.map
