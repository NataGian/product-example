import { Avatar, AvatarFallback, Badge, Card, CardContent, CardDescription, CardHeader, CardTitle, TabsContent } from "@/components";
export function OverviewTab() {
    return (<TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Σύνολο Χρηστών</CardTitle>
                        <CardDescription>Αύξηση χρηστών αυτόν τον μήνα</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">2.853</p>
                        <Badge className="mt-2" variant="outline">+12,5%</Badge>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Έσοδα</CardTitle>
                        <CardDescription>Μηνιαία έσοδα</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">34.257€</p>
                        <Badge className="mt-2" variant="outline">+8,2%</Badge>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Ενεργά Έργα</CardTitle>
                        <CardDescription>Τρέχον τρίμηνο</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">12</p>
                        <Badge className="mt-2" variant="outline">+2 νέα</Badge>
                    </CardContent>
                </Card>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Πρόσφατη Δραστηριότητα</CardTitle>
                    <CardDescription>Τελευταίες ενημερώσεις από την ομάδα σας</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (<div key={i} className="flex items-start gap-4 pb-4 border-b">
                                <Avatar>
                                    <AvatarFallback>Χ{i}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-medium">Ενημέρωση έργου</p>
                                    <p className="text-sm text-gray-500">Ο χρήστης {i} ενημέρωσε την κατάσταση
                                        του έργου</p>
                                    <p className="text-xs text-gray-400 mt-1">πριν από 2 ώρες</p>
                                </div>
                            </div>))}
                    </div>
                </CardContent>
            </Card>
        </TabsContent>);
}
//# sourceMappingURL=overview-tab.jsx.map