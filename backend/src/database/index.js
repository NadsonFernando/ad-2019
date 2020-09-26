import mongoose from "mongoose";
import UtilDatabase from "../util/UtilDatabase";

function onError(error) {
  console.log("Error to connect mongodb database ", error);
}

function onConnect() {
  console.log("Mongodb connectd.");
}

function connect() {
  const uri = UtilDatabase.getUri();

  mongoose.connection.on("error", onError);
  mongoose.connection.on("connected", onConnect);

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return mongoose;
}

export default {
  connect,
};
