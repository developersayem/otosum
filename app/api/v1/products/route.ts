import ProductModel from "@/app/model/Products";
import dbConnect from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  await dbConnect("developer");

  try {
    const products = await ProductModel.find({});

    return NextResponse.json(products, {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Failed to get product data", error },
      { status: 500 }
    );
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  await dbConnect("developer");

  try {
    const body = await request.json();
    const newProduct = new ProductModel(body);

    await newProduct.save();

    return NextResponse.json(newProduct, {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { message: "Failed to create product", error },
      { status: 500 }
    );
  }
}
