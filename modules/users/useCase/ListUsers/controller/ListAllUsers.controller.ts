import { Context } from "https://deno.land/x/oak@v11.1.0/context.ts";
import { ListAllUsersService } from "../service/ListAllUsers.service.ts";

export class ListAllUsersController {
  constructor(private listAllUsersService: ListAllUsersService) {}

  async handle({ response }: Context) {
    const users = await this.listAllUsersService.execute();
    
    response.status = 200;
    response.body = users;

    return response;
  }
}