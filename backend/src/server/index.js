import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

function onListen() {
  console.log(`Server running at port ${process.env.port}`);
}

function initialize() {
  dotenv.config();

  app.use(cors());
  app.use(bodyParser.json());
  app.listen(process.env.port, onListen);

  return app;
}

export default {
  initialize,
};
