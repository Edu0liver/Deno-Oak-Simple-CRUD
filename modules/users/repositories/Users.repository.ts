import { IUsersRepository } from "../interfaces/IUsers.repository.ts";
import { User } from "../model/User.ts";

export class UsersRepository implements IUsersRepository {

    private users: User[] = [];

    async findByEmail(email: string): Promise<User | undefined> {
        return await this.users.find(user => user.email === email);
    }

    async save(user: User): Promise<void> {
        await this.users.push(user);
    }

    async listAllUsers(): Promise<User[]> {
        return await this.users;
    }

    async findById(id: string): Promise<User | undefined> {
        return await this.users.find(user => user.id === id);
    }

}
