import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3600;
app.listen(PORT);

console.log("Server running on port " + PORT);
