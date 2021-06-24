import { Request, Response, NextFunction } from 'express'


export function EnsureAdmin(request: Request, response: Response, next: NextFunction) {
    const admin = true;

    if(admin) {
        next();
    }

    return response.status(401).json({
        error: "User is not an admin"
    })
}