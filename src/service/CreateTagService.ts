import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

interface ITagRequest {
    name: string
}

class CreateTagService {
    async execute({name} : ITagRequest) {

        const tagsRepositories = getCustomRepository(TagsRepositories);

        if(!name) {
            throw new Error("There was no Tag name!");
        }

        const tagAlreadyExists = await tagsRepositories.findOne({
            name
        })

        if(tagAlreadyExists) {
            throw new Error("Tag Already exists");
        }

        const tag = tagsRepositories.create({
            name
        });

        await tagsRepositories.save(tag);

        return tag;
    }
}

export { CreateTagService }