import Raffle from "../models/RaffleSchema";
import UtilRaffle from "../util/UtilRaffle";

async function findAll(req, res) {
  const raffles = await Raffle.find();

  res.json(raffles);
}

async function save(req, res) {
  const raflle = req.body;
  const model = new Raffle(raflle);

  const result = UtilRaffle.raffle(raflle);

  console.log("result", result);

  /*try {
    const saved = await model.save();

    if (saved) {
      return res.json(saved);
    }
  } catch (error) {
    return res.status(500).send({
      isError: true,
      description: error,
    });
  }*/
}

export default {
  save,
  findAll,
};
