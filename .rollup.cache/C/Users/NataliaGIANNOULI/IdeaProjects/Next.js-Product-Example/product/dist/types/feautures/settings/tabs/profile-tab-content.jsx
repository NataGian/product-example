import { Avatar, AvatarFallback, AvatarImage, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Label, Separator, TabsContent, Textarea } from "@/components";
export function ProfileTabContent() {
    return (<TabsContent value="profile" className="mt-0 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Προφίλ</CardTitle>
                    <CardDescription>Διαχείριση των δημόσιων πληροφοριών του προφίλ
                        σας</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <Avatar className="w-20 h-20">
                            <AvatarImage alt="Προφίλ"/>
                            <AvatarFallback>ΓΠ</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                            <Button size="sm" variant="outline">Αλλαγή Εικόνας</Button>
                            <p className="text-sm text-gray-500">
                                JPG, GIF ή PNG. Μέγιστο μέγεθος 2MB.
                            </p>
                        </div>
                    </div>
                    <Separator />
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">Όνομα</Label>
                            <Input id="firstName" placeholder="Γιάννης" defaultValue="Γιάννης"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Επώνυμο</Label>
                            <Input id="lastName" placeholder="Παπαδόπουλος" defaultValue="Παπαδόπουλος"/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="giannis.papadopoulos@example.com" defaultValue="giannis.papadopoulos@example.com"/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="bio">Βιογραφικό</Label>
                        <Textarea id="bio" placeholder="Πείτε μας για τον εαυτό σας" className="min-h-32"/>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline">Ακύρωση</Button>
                    <Button>Αποθήκευση Αλλαγών</Button>
                </CardFooter>
            </Card>
        </TabsContent>);
}
//# sourceMappingURL=profile-tab-content.jsx.map