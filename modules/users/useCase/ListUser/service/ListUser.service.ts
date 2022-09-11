import { User } from "../../../model/User.ts";
import { UsersRepository } from "../../../repositories/Users.repository.ts";


export class ListUserService {
    constructor(private usersRepository: UsersRepository) {}
    
    async execute(id: string): Promise<User | undefined> {
        return await this.usersRepository.findById(id);
    }
}