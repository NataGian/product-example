import { jsx, jsxs } from 'react/jsx-runtime';
import '../../../node_modules/tslib/tslib.es6.js';
import '@radix-ui/react-avatar';
import 'clsx';
import 'tailwind-merge';
import '../../../components/ui/badge.js';
import '@radix-ui/react-slot';
import 'lucide-react';
import '../../../components/ui/button.js';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../../components/ui/card.js';
import '@radix-ui/react-label';
import '@radix-ui/react-select';
import '@radix-ui/react-separator';
import '../../../components/ui/sidebar.js';
import '@radix-ui/react-dialog';
import { TabsContent } from '../../../components/ui/tabs.js';
import 'react';
import 'next/navigation';
import '../../../lib/constants.js';

function AnalyticsTab() {
    return (jsx(TabsContent, { value: "analytics", children: jsxs(Card, { children: [jsxs(CardHeader, { children: [jsx(CardTitle, { children: "\u03A0\u03AF\u03BD\u03B1\u03BA\u03B1\u03C2 \u0391\u03BD\u03B1\u03BB\u03C5\u03C4\u03B9\u03BA\u03CE\u03BD" }), jsx(CardDescription, { children: "\u03A0\u03C1\u03BF\u03B2\u03BF\u03BB\u03AE \u03B1\u03BD\u03B1\u03BB\u03C5\u03C4\u03B9\u03BA\u03CE\u03BD \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03C9\u03BD \u03B3\u03B9\u03B1 \u03C4\u03B1 \u03AD\u03C1\u03B3\u03B1 \u03C3\u03B1\u03C2" })] }), jsx(CardContent, { className: "h-64 flex items-center justify-center", children: jsx("p", { className: "text-gray-500", children: "\u03A4\u03BF \u03C0\u03B5\u03C1\u03B9\u03B5\u03C7\u03CC\u03BC\u03B5\u03BD\u03BF \u03C4\u03C9\u03BD \u03B1\u03BD\u03B1\u03BB\u03C5\u03C4\u03B9\u03BA\u03CE\u03BD \u03B8\u03B1 \u03B5\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03B5\u03C4\u03B1\u03B9 \u03B5\u03B4\u03CE" }) })] }) }));
}

export { AnalyticsTab };
//# sourceMappingURL=analytics-tab.js.map
