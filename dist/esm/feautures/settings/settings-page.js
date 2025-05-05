import { jsxs, jsx } from 'react/jsx-runtime';
import '../../node_modules/tslib/tslib.es6.js';
import '@radix-ui/react-avatar';
import 'clsx';
import 'tailwind-merge';
import '../../components/ui/badge.js';
import '@radix-ui/react-slot';
import 'lucide-react';
import '../../components/ui/button.js';
import '@radix-ui/react-label';
import '@radix-ui/react-select';
import '@radix-ui/react-separator';
import '../../components/ui/sidebar.js';
import '@radix-ui/react-dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs.js';
import 'react';
import 'next/navigation';
import '../../lib/constants.js';
import { ProfileTabContent } from './tabs/profile-tab-content.js';
import { AccountTabContent } from './tabs/account-tab-content.js';

const SettingsPage = () => {
    return (jsxs("div", { className: "pl-0 pr-6", children: [jsxs("div", { className: "mb-6", children: [jsx("h1", { className: "text-3xl font-bold", children: "\u03A1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2" }), jsx("p", { className: "text-gray-500", children: "\u0394\u03B9\u03B1\u03C7\u03B5\u03AF\u03C1\u03B9\u03C3\u03B7 \u03C4\u03C9\u03BD \u03C0\u03C1\u03BF\u03C4\u03B9\u03BC\u03AE\u03C3\u03B5\u03C9\u03BD \u03BA\u03B1\u03B9 \u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03C9\u03BD \u03C4\u03BF\u03C5 \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03BF\u03CD \u03C3\u03B1\u03C2" })] }), jsx("div", { className: "flex flex-col md:flex-row gap-6", children: jsxs(Tabs, { defaultValue: "profile", orientation: "vertical", className: "w-full flex flex-row", children: [jsx("div", { className: "md:w-56 shrink-0", children: jsxs(TabsList, { className: "flex flex-col h-auto items-stretch p-0 bg-transparent space-y-1", children: [jsx(TabsTrigger, { value: "profile", className: "justify-start px-4 py-2", children: "\u03A0\u03C1\u03BF\u03C6\u03AF\u03BB" }), jsx(TabsTrigger, { value: "account", className: "justify-start px-4 py-2", children: "\u039B\u03BF\u03B3\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2" })] }) }), jsxs("div", { className: "flex-1 w-full max-w-3xl", children: [jsx(TabsContent, { value: "profile", children: jsx(ProfileTabContent, {}) }), jsx(TabsContent, { value: "account", children: jsx(AccountTabContent, {}) })] })] }) })] }));
};

export { SettingsPage };
//# sourceMappingURL=settings-page.js.map
