import RaffleController from "../controllers/RaffleController";

function mapping(router) {
  router.post("/raffles", RaffleController.save);
}

export default { mapping };
