import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string;
}

export function ensureAuthenticated (
  request: Request,
  response: Response,
  next: NextFunction
) {

  const authToken = request.headers.authorization
 
  if(!authToken){
    return response.status(401).end();  
  }


  const [,token] = authToken.split(" ")
  
  try{

    const { sub } = verify(token, "9a3b55a9e9a22007be01f61c47b719ce2d70c6f3c300c384766d7db5f3867260") as IPayload;
    request.user_id = sub;
    return next();

    

  }catch(err) {
    return response.status(401).end()
  }


}