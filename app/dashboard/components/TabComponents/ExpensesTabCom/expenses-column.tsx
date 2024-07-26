"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ExpensesColumn = {
  date: string;
  product: string;
  biller: string;
  quantity: number;
  price: number;
  discount: number;
  tax: number;
  totalPrice: number;
  paymentMethod: string;
};

export const ExpensesColumns: ColumnDef<ExpensesColumn>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "product",
    header: "Product",
  },
  {
    accessorKey: "biller",
    header: "Biller",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "discount",
    header: "Discount",
  },
  {
    accessorKey: "tax",
    header: "Tax",
  },
  {
    accessorKey: "totalPrice",
    header: "Total price",
  },
  {
    accessorKey: "paymentMethod",
    header: "Payment method",
  },
];
