import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
    user_sender: string;
    user_receiver: string;
    tag_id: string;
    message?: string;
}

class CreateComplimentService {
    
    async execute({user_sender, user_receiver, tag_id, message} : IComplimentRequest) {
        
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories)


        if(!user_sender || !user_receiver || !tag_id)
            throw new Error("Please use the fields user_sender, user_receiver and tag_id")
        
        const userSenderExists = usersRepositories.findOne(user_sender)
        if (!userSenderExists)
            throw new Error("The user_sender field is invalid")

        if(user_sender === user_receiver)
            throw new Error("Its not possible to compliment yourself!")
        
        const userReceiverExists = await usersRepositories.findOne(user_receiver)
        if (!userReceiverExists)
            throw new Error("The user_receiver field is invalid")

        const compliment = complimentsRepositories.create({
            user_sender,
            user_receiver,
            tag_id,
            message
        })


        await complimentsRepositories.save(compliment)

        return compliment;
    }
}

export { CreateComplimentService }