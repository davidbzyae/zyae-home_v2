import dotenv from "dotenv";

process.title = "zyae-home_v2";
process.env.NODE_ENV = process.env.NODE_ENV || "development";
Error.stackTraceLimit = process.env.NODE_ENV === "production" ? -1 : 10;

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

export default {
  port: parseInt(process.env.PORT, 10),
};
