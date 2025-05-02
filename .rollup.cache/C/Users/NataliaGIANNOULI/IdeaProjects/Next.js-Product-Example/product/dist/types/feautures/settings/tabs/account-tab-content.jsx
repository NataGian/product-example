import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Separator, TabsContent } from "@/components";
export function AccountTabContent() {
    return (<TabsContent value="account" className="mt-0 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Ρυθμίσεις Λογαριασμού</CardTitle>
                    <CardDescription>Διαχείριση των προτιμήσεων του λογαριασμού σας</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="username">Όνομα χρήστη</Label>
                        <Input id="username" defaultValue="giannispap"/>
                        <p className="text-sm text-gray-500">
                            Το URL σας: example.com/user/giannispap
                        </p>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                        <h3 className="text-lg font-medium">Προτιμήσεις Γλώσσας</h3>
                        <div className="space-y-2">
                            <Label htmlFor="language">Γλώσσα Εμφάνισης</Label>
                            <Select defaultValue="el">
                                <SelectTrigger id="language">
                                    <SelectValue placeholder="Επιλέξτε γλώσσα"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="el">Ελληνικά</SelectItem>
                                    <SelectItem value="en">Αγγλικά</SelectItem>
                                    <SelectItem value="fr">Γαλλικά</SelectItem>
                                    <SelectItem value="de">Γερμανικά</SelectItem>
                                    <SelectItem value="es">Ισπανικά</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <Separator />
                    <div className="space-y-3">
                        <h3 className="text-lg font-medium">Διαγραφή Λογαριασμού</h3>
                        <p className="text-sm text-gray-500">
                            Μόνιμη διαγραφή του λογαριασμού σας και όλων των σχετικών δεδομένων.
                            Αυτή η ενέργεια δεν μπορεί να αναιρεθεί.
                        </p>
                        <Button variant="destructive">Διαγραφή Λογαριασμού</Button>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>);
}
//# sourceMappingURL=account-tab-content.jsx.map