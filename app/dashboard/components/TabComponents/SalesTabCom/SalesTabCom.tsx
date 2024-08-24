import type { NextComponentType, NextPageContext } from "next";
import { SalesColumn, SalesColumns } from "./sales-columns";

import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "../../data-table";
import ShopSwitcher from "../../shop-switcher";
import { UsersRound } from "lucide-react";
import { DatePicker } from "../../date-picker";

async function getData(): Promise<SalesColumn[]> {
  // Fetch data from your API here.
  return [
    {
      date: "728ed52f",
      product: "cake",
      biller: "m@example.com",
      price: 100,
      quantity: 5,
      discount: 5,
      tax: 5,
      totalPrice: 500,
      paymentMethod: "m@example.com",
    },
  ];
}

interface Props {
  value: string;
}

const SalesTabCom: NextComponentType<NextPageContext, {}, Props> = async ({
  value,
}: Props) => {
  const data = await getData();
  return (
    <TabsContent value={value} className="space-y-4 w-full">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today Sales</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$11111</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              last week Sales
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly sales</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Annual sales</CardTitle>
            <UsersRound />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">+2 since last month</p>
          </CardContent>
        </Card>
      </div>
      <Card className="col-span-3">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl">Sales List</CardTitle>
          </div>
          <CardDescription>All Sales list in this table</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={SalesColumns} data={data} />
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default SalesTabCom;
