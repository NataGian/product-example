import { Avatar, AvatarFallback, Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, TabsContent } from "@/components";
export function UpcomingAppointmentsTab() {
    return (<TabsContent value="upcoming" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Σημερινά Ραντεβού</CardTitle>
                        <CardDescription>29 Απριλίου, 2025</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">3</p>
                        <Badge className="mt-2" variant="outline">2 επείγοντα</Badge>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Εβδομαδιαία</CardTitle>
                        <CardDescription>Συνολικά ραντεβού αυτής της εβδομάδας</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">12</p>
                        <Badge className="mt-2" variant="outline">5 νέα</Badge>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Ανοιχτά Αιτήματα</CardTitle>
                        <CardDescription>Αιτήματα σε αναμονή έγκρισης</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">7</p>
                        <Badge className="mt-2" variant="outline">+3 σήμερα</Badge>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Επερχόμενα Ραντεβού</CardTitle>
                        <CardDescription>Λίστα με τα επερχόμενα ραντεβού σας</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">Προβολή όλων</Button>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 pb-4 border-b">
                            <Avatar>
                                <AvatarFallback>ΓΠ</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <p className="font-medium">Γιώργος Παπαδόπουλος</p>
                                    <Badge>Επείγον</Badge>
                                </div>
                                <p className="text-sm text-gray-500">Εξέταση αίματος</p>
                                <p className="text-xs text-gray-400 mt-1">Σήμερα, 14:30 - 15:00</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 pb-4 border-b">
                            <Avatar>
                                <AvatarFallback>ΑΔ</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <p className="font-medium">Αντώνης Δημητρίου</p>
                                    <Badge>Επείγον</Badge>
                                </div>
                                <p className="text-sm text-gray-500">Καρδιολογική εξέταση</p>
                                <p className="text-xs text-gray-400 mt-1">Αύριο, 09:15 - 10:00</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Avatar>
                                <AvatarFallback>ΕΑ</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <p className="font-medium">Ελένη Αλεξίου</p>
                                    <Badge variant="outline">Κανονικό</Badge>
                                </div>
                                <p className="text-sm text-gray-500">Παιδιατρικός έλεγχος</p>
                                <p className="text-xs text-gray-400 mt-1">30 Απριλίου, 11:30 - 12:15</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>);
}
//# sourceMappingURL=upcoming-appointments-tab.jsx.map