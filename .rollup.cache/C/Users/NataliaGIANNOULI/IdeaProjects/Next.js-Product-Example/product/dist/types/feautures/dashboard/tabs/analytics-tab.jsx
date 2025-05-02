import { Card, CardContent, CardDescription, CardHeader, CardTitle, TabsContent } from "@/components";
export function AnalyticsTab() {
    return (<TabsContent value="analytics">
            <Card>
                <CardHeader>
                    <CardTitle>Πίνακας Αναλυτικών</CardTitle>
                    <CardDescription>Προβολή αναλυτικών στοιχείων για τα έργα σας</CardDescription>
                </CardHeader>
                <CardContent className="h-64 flex items-center justify-center">
                    <p className="text-gray-500">Το περιεχόμενο των αναλυτικών θα εμφανίζεται εδώ</p>
                </CardContent>
            </Card>
        </TabsContent>);
}
//# sourceMappingURL=analytics-tab.jsx.map