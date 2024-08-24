import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";

// MongoDB URI from environment variables
const URI = process.env.MONGODB_URI || "";
// Initialize the MongoClient
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function dbConnect(dbName: string) {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    // Use Mongoose to connect to the same database
    await mongoose.connect(URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      dbName: dbName, // Specify the database name here
    });

    console.log("Connected to MongoDB using Mongoose!");
    return mongoose.connection;
  } catch (err) {
    console.error(err);
  }
}

// Call the function to initialize the database and use Mongoose

export default dbConnect;
