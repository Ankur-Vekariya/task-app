import express from "express";
import mongoose from "mongoose";
import userRoute from "./app/routes/user.js";

const app = express();

const connect = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.addListener("disconnection", () => {
  console.log("mongo db disconnected");
});

app.use(express.json());

app.use("/api/auth", userRoute);

app.listen(8080, () => {
  connect();
  console.log("connected to backend! 8080");
});
