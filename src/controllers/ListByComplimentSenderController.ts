import { Request, Response } from 'express'
import { ListByComplimentSenderService } from "../service/ListByComplimentSenderService";


class ListByComplimentSenderController {
  
  async handle(request: Request, response: Response) {
  
    const listByComplimentSenderService = new ListByComplimentSenderService();
    const {user_id} = request
    const compliments = await listByComplimentSenderService.execute(user_id)

    return response.json(compliments)

  }
}

export { ListByComplimentSenderController}
