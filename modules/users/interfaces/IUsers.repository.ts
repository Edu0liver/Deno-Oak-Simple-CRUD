import { User } from "../model/User.ts";

export interface IUsersRepository {
    
    findByEmail(email: string): Promise<User | undefined>

    save(user: User): Promise<void>

    listAllUsers(): Promise<User[]>

    findById(id: string): Promise<User | undefined>

}