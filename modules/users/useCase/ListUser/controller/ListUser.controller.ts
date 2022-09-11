import { ListUserService } from '../service/ListUser.service.ts';
import { Context } from "https://deno.land/x/oak@v11.1.0/context.ts";
import { getQuery } from "https://deno.land/x/oak@v11.1.0/helpers.ts";

export class ListUserController {
    constructor(private listUserService: ListUserService) {}
    
    async handle(ctx: Context) {

        const { id } = getQuery(ctx, { mergeParams: true });

        const user = await this.listUserService.execute(id);
    
        ctx.response.status = 200;
        ctx.response.body = user;
    
        return ctx.response;
    }
}