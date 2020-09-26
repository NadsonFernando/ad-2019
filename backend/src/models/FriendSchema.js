import { Schema, model } from "mongoose";
import Enums from "../enums";

const FriendSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    max: 40,
  },
});

export default model(Enums.model.Friend, FriendSchema);
