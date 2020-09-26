import Friend from "../models/FriendSchema";

async function findAll(req, res) {
  const friends = await Friend.find();

  res.json(friends);
}

async function save(req, res) {
  const friend = req.body;
  const model = new Friend(friend);

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
  findAll
};
