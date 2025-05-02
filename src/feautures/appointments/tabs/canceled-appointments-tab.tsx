import {Card, CardContent, CardDescription, CardHeader, CardTitle, TabsContent} from "@/components";

export function CanceledAppointmentsTab() {
    return (
        <TabsContent value="canceled">
            <Card>
                <CardHeader>
                    <CardTitle>Ακυρωμένα Ραντεβού</CardTitle>
                    <CardDescription>Ραντεβού που έχουν ακυρωθεί</CardDescription>
                </CardHeader>
                <CardContent className="h-64 flex items-center justify-center">
                    <p className="text-gray-500">Τα ακυρωμένα ραντεβού θα εμφανίζονται εδώ</p>
                </CardContent>
            </Card>
        </TabsContent>
    )
}