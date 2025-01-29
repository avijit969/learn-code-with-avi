import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};
const connection: ConnectionObject = {};

export const dbConnect = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("MONGODB already connected !!");
    return;
  }
  try {
    const db = await mongoose.connect(`${process.env.MONGODB_URI}/LCWA` || "");
    connection.isConnected = db.connections[0].readyState;
    console.log("MONGODB connected !! DB HOST", db.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
