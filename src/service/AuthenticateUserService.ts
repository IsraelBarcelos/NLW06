import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({email, password}: IAuthenticateRequest) {

        const usersRepository = getCustomRepository(UsersRepositories);

        const user = await usersRepository.findOne({
            email
        });

        if(!user) {
            throw Error("Invalid user or password!");
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw Error("Invalid user or password!");
        }
        const token = sign({
            email: user.email
        }, "9a3b55a9e9a22007be01f61c47b719ce2d70c6f3c300c384766d7db5f3867260",{
            subject: user.id,
            expiresIn: "1h"
        })
        
        return token;
    }
    
}

export {AuthenticateUserService}