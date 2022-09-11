import { User } from "../model/User.ts";

export class UsersRepository {

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

}
