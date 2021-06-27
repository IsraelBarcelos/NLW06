import { Request, Response } from "express"
import { CreateComplimentService } from "../service/CreateComplimentService"

class CreateComplimentController {

    async handle(request: Request, response: Response) {

        const { user_receiver, tag_id, message } = request.body;
        const user_sender  = request.user_id
        console.log(user_sender)
        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.execute({user_sender, user_receiver, tag_id, message});

        return response.json(compliment);
    }



}

export {CreateComplimentController}