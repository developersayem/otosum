"use client";
import { Metadata } from "next";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewTabCom from "./components/TabComponents/OverviewTabCom/OverviewTabCom";
import SalesTabCom from "./components/TabComponents/SalesTabCom/SalesTabCom";
import ExpensesTabCom from "./components/TabComponents/ExpensesTabCom/ExpensesTabCom";
import { DatePicker } from "./components/date-picker";
import { Fragment } from "react";

// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "Example dashboard app built using the components.",
// };

export default function DashboardPage() {
  let showDatePiker: string = "overview";
  return (
    <>
      <div className=" flex-col md:flex ">
        <div className="flex-1 space-y-4 p-8 pt-6 ">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              {/* <ShopSwitcher /> */}
              {showDatePiker === "overview" && <DatePicker />}
            </div>
          </div>
          {/* grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 */}
          <Tabs
            defaultValue="overview"
            className="space-y-4 flex flex-wrap w-full"
          >
            <TabsList className="flex flex-grow justify-start flex-wrap">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <div onClick={() => (showDatePiker = "sales")}>
                <TabsTrigger value="sales">Sales</TabsTrigger>
              </div>
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
