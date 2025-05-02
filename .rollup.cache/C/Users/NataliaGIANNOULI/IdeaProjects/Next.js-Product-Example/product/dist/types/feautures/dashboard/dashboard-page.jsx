import { Tabs, TabsList, TabsTrigger } from "@/components";
import { OverviewTab } from "@/feautures/dashboard/tabs/overview-tab";
import { ReportsTab } from "@/feautures/dashboard/tabs/reports-tab";
import { AnalyticsTab } from "@/feautures/dashboard/tabs/analytics-tab";
export const DashboardPage = () => {
    return (<div className="pl-0 pr-6 space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Πίνακας Ελέγχου</h1>
                    <p className="text-gray-500">Καλώς ήρθατε στον πίνακα ελέγχου σας</p>
                </div>
            </div>
            <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-4">
                    <TabsTrigger value="overview">Επισκόπηση</TabsTrigger>
                    <TabsTrigger value="analytics">Αναλυτικά</TabsTrigger>
                    <TabsTrigger value="reports">Αναφορές</TabsTrigger>
                </TabsList>
                <OverviewTab />
                <AnalyticsTab />
                <ReportsTab />
            </Tabs>
        </div>);
};
//# sourceMappingURL=dashboard-page.jsx.map