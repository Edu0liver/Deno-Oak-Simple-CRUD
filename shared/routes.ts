import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { UsersRepository } from "../modules/users/repositories/Users.repository.ts";
import { CreateUserController } from "../modules/users/useCase/CreateUser/controller/CreateUser.controller.ts";
import { CreateUserService } from "../modules/users/useCase/CreateUser/service/CreateUser.service.ts";
import { ListAllUsersController } from "../modules/users/useCase/ListAllUsers/controller/ListAllUsers.controller.ts";
import { ListAllUsersService } from "../modules/users/useCase/ListAllUsers/service/ListAllUsers.service.ts";
import { ListUserController } from "../modules/users/useCase/ListUser/controller/ListUser.controller.ts";
import { ListUserService } from "../modules/users/useCase/ListUser/service/ListUser.service.ts";

export const router = new Router();

const userRepository = new UsersRepository();

const createUserService = new CreateUserService(userRepository);
const createUserController = new CreateUserController(createUserService);

const listAllUsersService = new ListAllUsersService(userRepository);
const listAllUsersController = new ListAllUsersController(listAllUsersService);

const listUserService = new ListUserService(userRepository);
const listUserController = new ListUserController(listUserService);

router.post('/users', createUserController.handle);
router.get('/users', listAllUsersController.handle)
router.get('/users/:id', listUserController.handle)
