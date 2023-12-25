import mongoose from "mongoose";

const establishMongoConnection = async () => {
  if (!mongoose.connection || mongoose.connection.readyState !== 1) {
    console.info("Establishing new connection");
    await mongoose.connect(process.env.DB_URL as string, { maxPoolSize: 1 });
  }
  console.info("Connection established");
  return;
};

export default establishMongoConnection;
