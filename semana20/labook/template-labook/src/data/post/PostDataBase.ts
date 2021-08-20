import { PostInputDTO, UserInputDTO } from "../../model/types";
import { BaseDataBase } from "../BaseDataBase";

export class PostDataBase extends BaseDataBase {

    private static TABLE_NAME = "labook_posts"

    async create(post: PostInputDTO) {
        await this.getConnection()
            .insert(post)
            .into(PostDataBase.TABLE_NAME)
    }
}