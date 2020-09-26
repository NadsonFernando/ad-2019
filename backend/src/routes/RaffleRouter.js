import RaffleController from "../controllers/RaffleController";

function mapping(router) {
  router.get("/raffles", RaffleController.findAll);
  router.post("/raffles", RaffleController.save);
}

export default { mapping };
