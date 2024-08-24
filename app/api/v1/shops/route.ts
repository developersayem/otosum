import ShopModel from "@/app/model/Shops";
import dbConnect from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  await dbConnect("developer");

  try {
    const shops = await ShopModel.find({});

    return NextResponse.json(shops, {
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

// POST-------------------------------------------------------------

async function generateId(): Promise<number> {
  // Find the last used Expenses ID from the database
  await dbConnect("developer");
  const lastIdDoc = await ShopModel.findOne({}, {}, { sort: { shopId: -1 } });
  const lastId = lastIdDoc ? lastIdDoc.shopId : 0;
  // Increment the last Expenses ID to generate a new one
  const newId = lastId + 1;

  return newId;
}

export async function POST(request: Request): Promise<NextResponse> {
  await dbConnect("developer");
  try {
    const body = await request.json();
    // Check for existing shop with the same address
    // const existingShop = await ShopModel.findOne(body);
    // if (existingShop) {
    //   return NextResponse.json(
    //     { message: "This shop already exists" },
    //     { status: 400 }
    //   );
    // }

    // Await the generateId function to get the actual ID value
    const newShopId = await generateId();

    const newShop = new ShopModel({ ...body, shopId: newShopId });

    await newShop.save();

    return NextResponse.json(newShop, {
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
