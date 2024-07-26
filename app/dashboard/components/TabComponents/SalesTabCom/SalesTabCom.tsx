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
    <TabsContent value={value} className="">
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Sales List</CardTitle>
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
