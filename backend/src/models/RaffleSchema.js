import { Schema, model } from "mongoose";
import Enums from "../enums";

const RaffleSchema = Schema({
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: Enums.model.Friend,
      required: true,
    },
  ],
});

export default model(Enums.model.Raffle, RaffleSchema);
