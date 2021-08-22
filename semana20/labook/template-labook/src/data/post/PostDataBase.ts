import { Post } from "../../model/post/Post";
import { PostInputDTO, postModel, UserInputDTO } from "../../model/types";
import { BaseDataBase } from "../BaseDataBase";

export class PostDataBase extends BaseDataBase {

    private static TABLE_NAME = "labook_posts"

    async create(post: PostInputDTO) {
        await this.getConnection()
            .insert(post)
            .into(PostDataBase.TABLE_NAME)
    }

    async getPost(id: string):Promise<Post> {
        try {
            const result: any = await this.getConnection()
            .select("*")
            .from(PostDataBase.TABLE_NAME)
            .where({ id })

            return postModel(result[0])
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
}