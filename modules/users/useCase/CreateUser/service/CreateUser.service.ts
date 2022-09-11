

export class CreateUserService {
    constructor(private usersRepository: UsersRepository) {}

    async execute({ name, email, password }: IUserRequest) {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error('User already exists');
        }

        const user = new User(name, email, password);

        await this.usersRepository.save(user);

        return user;
    }
}