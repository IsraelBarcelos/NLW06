import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

interface IComplimentRequest {
    user_sender: string;
    user_receiver: string;
    tag_id: string;
    message?: string;
}

class CreateComplimentService {
    
    async execute({user_sender, user_receiver, tag_id, message} : IComplimentRequest) {
        
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        if(!user_sender || !user_receiver || !tag_id) {
            throw new Error("Please use the fields user_sender, user_receiver and tag_id")
        }

        if(user_sender == user_receiver) {
            throw new Error("Its not possible to compliment yourself!")
        }

        complimentsRepositories.

    }

}

export { CreateComplimentService }