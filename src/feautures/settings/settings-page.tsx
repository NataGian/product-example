import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components";
import {ProfileTabContent} from "@/feautures/settings/tabs/profile-tab-content";
import {AccountTabContent} from "@/feautures/settings/tabs/account-tab-content";

export const SettingsPage = () => {
    return (
        <div className="pl-0 pr-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold">Ρυθμίσεις</h1>
                <p className="text-gray-500">Διαχείριση των προτιμήσεων και ρυθμίσεων του λογαριασμού σας</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
                <Tabs defaultValue="profile" orientation="vertical" className="w-full flex flex-row">
                    <div className="md:w-56 shrink-0">
                        <TabsList className="flex flex-col h-auto items-stretch p-0 bg-transparent space-y-1">
                            <TabsTrigger value="profile" className="justify-start px-4 py-2">Προφίλ</TabsTrigger>
                            <TabsTrigger value="account"
                                         className="justify-start px-4 py-2">Λογαρισμός</TabsTrigger>
                        </TabsList>
                    </div>
                    <div className="flex-1 w-full max-w-3xl">
                        <TabsContent value="profile">
                            <ProfileTabContent/>
                        </TabsContent>
                        <TabsContent value="account">
                            <AccountTabContent/>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}