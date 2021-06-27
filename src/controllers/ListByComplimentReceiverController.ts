import { Request, Response } from 'express'
import { ListByComplimentReceiverService } from "../service/ListByComplimentReceiverService";


class ListByComplimentReceiverController {

  async handle(request: Request, response: Response) {
      
    const listByComplimentReceiverService = new ListByComplimentReceiverService();
    const {user_id} = request
    const compliments = await listByComplimentReceiverService.execute(user_id)

    return response.json(compliments)
  }
  
}

export { ListByComplimentReceiverController}