import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'

class ListUsersService {
    async execute() {
        const usersRepositories = getCustomRepository(UsersRepositories);
        const users = await usersRepositories.createQueryBuilder('users').select(['users.name', 'users.admin']).getMany()
        return users
    }
}

export {ListUsersService}