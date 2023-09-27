import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const cluster = process.env.MONGO_CLUSTER;
const database = process.env.MONGO_DATABASE;

const url = `mongodb+srv://${username}:${password}@${cluster}.se1lqbq.mongodb.net/${database}?retryWrites=true&w=majority`;
export function connectionToMongo(): Promise<string> {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("Conectado ao MongoDB Atlas");
      return "Conectado ao MongoDB Atlas";
    })
    .catch((err) => {
      console.error("Houve um erro na conexão com o MongoDB Atlas:", err);
      throw new Error("Erro na conexão com o MongoDB Atlas");
    });
}
