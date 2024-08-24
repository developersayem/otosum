import mongoose, { Document, Schema } from "mongoose";

interface Image {
  fileImage: string;
  fileName: string;
}

interface Shop extends Document {
  shopId: number;
  name: string;
  address: string;
  type: string;
  img: Image;
  createAt?: Date;
  updateAt?: Date;
}

const ShopSchema: Schema<Shop> = new Schema({
  shopId: {
    type: Number,
    required: [true, "Shop id is required"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
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
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  type: {
    type: String,
    required: [true, "Type is required"],
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});
const ShopModel =
  mongoose.models.shops || mongoose.model<Shop>("shops", ShopSchema);

export default ShopModel;
