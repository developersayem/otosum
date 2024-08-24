import mongoose, { Document, Schema } from "mongoose";

interface Image {
  fileImage: string;
  fileName: string;
}

interface Product extends Document {
  productId: number;
  img: Image;
  name: string;
  category: string;
  brand: string;
  cost: number;
  quantity: number;
  alertQuantity: number;
  discountType: string;
  discount: number;
  taxType: string;
  tax: number;
  price: number;
  promotionalStatus: string;
  promotionalPrice?: number;
  promotionalStartDate?: Date;
  promotionalEndDate?: Date;
  description: string;
}

const ProductSchema: Schema<Product> = new Schema({
  productId: {
    type: Number,
    required: [true, "Product ID is required"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
  },
  img: {
    fileName: {
      type: String,
      required: [true, "Image file name is required"],
    },
    fileImage: {
      type: String,
      required: [true, "Image file is required"],
    },
  },
  category: {
    type: String,
    required: [true, "Product category is required"],
    trim: true,
  },
  brand: {
    type: String,
    required: [true, "Product brand is required"],
    trim: true,
  },
  cost: {
    type: Number,
    required: [true, "Product cost is required"],
    min: 0,
  },
  quantity: {
    type: Number,
    required: [true, "Product quantity is required"],
    min: 0,
  },
  alertQuantity: {
    type: Number,
    required: [true, "Product alert quantity is required"],
    min: 0,
  },
  discountType: {
    type: String,
    required: [true, "Product discount type is required"],
    trim: true,
    enum: ["Percentage", "Fixed"],
  },
  discount: {
    type: Number,
    required: [true, "Product discount is required"],
    min: 0,
    max: 100,
  },
  taxType: {
    type: String,
    required: [true, "Product tax type is required"],
    trim: true,
    enum: ["Percentage", "Fixed"],
  },
  tax: {
    type: Number,
    required: [true, "Product tax is required"],
    min: 0,
    max: 100,
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: 0,
  },
  promotionalStatus: {
    type: String,
    required: [true, "Product promotional status is required"],
    trim: true,
    enum: ["Active", "Inactive"],
  },
  promotionalPrice: {
    type: Number,
    min: 0,
  },
  promotionalStartDate: {
    type: Date,
  },
  promotionalEndDate: {
    type: Date,
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
    trim: true,
    maxlength: 500,
  },
});

const ProductModel =
  mongoose.models.products ||
  mongoose.model<Product>("products", ProductSchema);

export default ProductModel;
