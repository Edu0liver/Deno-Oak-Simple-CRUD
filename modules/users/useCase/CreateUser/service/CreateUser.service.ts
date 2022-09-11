import { CreateUserDTO } from "../../../dtos/CreateUser.dto.ts";
import { User } from "../../../model/User.ts";
import { UsersRepository } from "../../../repositories/Users.repository.ts";

export class CreateUserService {
    constructor(private usersRepository: UsersRepository) {}

    async execute({ name, email, password }: CreateUserDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error('User already exists');
        }

        const user = new User(name, email, password);

        try{
            await this.usersRepository.save(user);
        }catch{
            throw new Error('Error saving user');
        }
    }
}