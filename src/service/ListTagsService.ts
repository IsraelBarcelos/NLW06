import { getCustomRepository } from 'typeorm'
import { TagsRepositories } from '../repositories/TagsRepositories'

class ListTagsService {

    async execute() {
        
        const tagsRepositories = getCustomRepository(TagsRepositories)
        const allTags = await tagsRepositories.find()

        return allTags
    }
        

}

export {ListTagsService}