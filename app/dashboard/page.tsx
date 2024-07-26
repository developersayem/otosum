import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDateRangePicker } from "./components/date-range-picker";
import OverviewTabCom from "./components/TabComponents/OverviewTabCom/OverviewTabCom";
import SalesTabCom from "./components/TabComponents/SalesTabCom/SalesTabCom";
import ExpensesTabCom from "./components/TabComponents/ExpensesTabCom/ExpensesTabCom";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default function DashboardPage() {
  return (
    <>
      <div className=" flex-col md:flex ">
        <div className="flex-1 space-y-4 p-8 pt-6 ">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="expenses">Expenses</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <OverviewTabCom value="overview" />
            <SalesTabCom value="sales" />
            <ExpensesTabCom value="expenses" />
          </Tabs>
        </div>
      </div>
    </>
  );
}
