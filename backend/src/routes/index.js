import { Router } from "express";

import FriendRouter from "./FriendRouter";
import RaffleRouter from "./RaffleRouter";

const router = Router();

FriendRouter.mapping(router);
RaffleRouter.mapping(router);

export default router;
