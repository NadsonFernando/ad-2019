import Raffle from "../models/RaffleSchema";
import Friend from "../models/FriendSchema";
import UtilRaffle from "../util/UtilRaffle";
import MailService from "../services/mail";

import _ from "underscore";

async function save(req, res) {
  const raflle = req.body;
  const model = new Raffle(raflle);

  const result = UtilRaffle.raffle(raflle);

  _.map(result, async (item) => {
    const sorted = result[item];
    const mine = await Friend.findOne({ _id: item });
    const friend = await Friend.findOne({ _id: sorted });

    MailService.send(mine.email, friend.name);
  });

  try {
    const saved = await model.save();

    if (saved) {
      return res.json(saved);
    }
  } catch (error) {
    return res.status(500).send({
      isError: true,
      description: error,
    });
  }
}

export default {
  save,
};
