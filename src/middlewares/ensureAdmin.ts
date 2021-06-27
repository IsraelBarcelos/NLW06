import { Request, Response, NextFunction } from 'express'
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';


export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    
    const userRepositories = getCustomRepository(UsersRepositories);
    
    const { user_id } = request;

    const { admin } = await userRepositories.findOne(user_id)

    if(admin) {
        return next();
    }
    
    return response.status(401).json({
        error: "User is not an admin"
    })
}