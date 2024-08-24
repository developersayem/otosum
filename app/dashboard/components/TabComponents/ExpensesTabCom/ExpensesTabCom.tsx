import type { NextComponentType, NextPageContext } from "next";
import { ExpensesColumn, ExpensesColumns } from "./expenses-column";
import { DataTable } from "../../shared/data-table";
import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

async function getData(): Promise<ExpensesColumn[]> {
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

const ExpensesTabCom: NextComponentType<NextPageContext, {}, Props> = async ({
  value,
}: Props) => {
  const data = await getData();
  return (
    <TabsContent value={value} className="space-y-4 w-full">
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Expenses List</CardTitle>
          <CardDescription>All Expenses list in this table</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={ExpensesColumns} data={data} />
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default ExpensesTabCom;
