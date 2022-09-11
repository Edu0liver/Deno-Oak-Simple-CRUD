import { CreateUserService } from "../service/CreateUser.service.ts";
import { Context } from "https://deno.land/x/oak@v11.1.0/mod.ts";

export class CreateUserController {
    constructor(private createUserService: CreateUserService) {}

    async handle({ request, response }: Context) {
        const { value } = request.body({ type: 'json'});
        const { name, email, password } = value;
        
        await this.createUserService.execute({ name, email, password });

        return response.status = 201;
    }
}