import FriendController from "../controllers/FriendController";

function mapping(router) {
  router.get("/friends", FriendController.findAll);
  router.post("/friends", FriendController.save);
}

export default { mapping };
