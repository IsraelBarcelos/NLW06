import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController  } from "./controllers/CreateTagController";
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"
import { ListByComplimentReceiverController } from "./controllers/ListByComplimentReceiverController"
import { ListByComplimentSenderController } from "./controllers/ListByComplimentSenderController"
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listByComplimentReceiverController = new ListByComplimentReceiverController();
const listByComplimentSenderController = new ListByComplimentSenderController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.get("/users", listUsersController.handle)
router.post("/users", createUserController.handle);

router.get("/tags", listTagsController.handle)
router.post("/tags", ensureAuthenticated, ensureAdmin , createTagController.handle);


router.post("/login", authenticateUserController.handle);

router.post("/compliments", ensureAuthenticated, createComplimentController.handle)
router.get("/compliments/sender", ensureAuthenticated, listByComplimentSenderController.handle)
router.get("/compliments/receiver", ensureAuthenticated, listByComplimentReceiverController.handle)



export { router }