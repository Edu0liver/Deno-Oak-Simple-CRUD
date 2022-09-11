import { CreateUserService } from "../service/CreateUser.service.ts";

export class CreateUserController {
    constructor(private createUserService: CreateUserService) {}

    async handle(ctx: any){
        const { name, email, password } = await ctx.request.body();
        
        await this.createUserService.execute({ name, email, password });

        return ctx.response.status = 201;
    }
}