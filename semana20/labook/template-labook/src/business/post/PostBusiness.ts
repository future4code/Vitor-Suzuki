import { PostDataBase } from "../../data/post/PostDataBase"
import { Post } from "../../model/post/Post"
import { getPostInputDTO, PostInputDTO } from "../../model/types"
import { GenerateId } from "../../services/GenerateId"
import { TokenManager } from "../../services/TokenManager"

export class PostBusiness {
    async createPostBusiness(post: PostInputDTO): Promise<string> {
        if (
            !post.photo ||
            !post.description ||
            !post.type
        ) {
            throw new Error("Todos os campos devem ser preenchidos")
        }

        const generateId = new GenerateId()
        const id: string = generateId.generate()

        let created_at: any = new Date()
        const newPost = { ...post, id, created_at }

        const postDataBase = new PostDataBase()
        await postDataBase.create(newPost)

        const tokenManager = new TokenManager()
        const token = tokenManager.genToken({ id })

        return token
    }

    async getPostBusiness(input: getPostInputDTO) {
        try {
            const post: Post = await new PostDataBase().getPost(input.id)

            if (!post) {
                throw new Error("Post não encontrado")
            }

            return post
        } catch(error) {
        throw new Error(error.message)
    }
}
}