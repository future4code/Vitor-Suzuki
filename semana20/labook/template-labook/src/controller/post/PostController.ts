import { Request, Response } from "express";
import { PostBusiness } from "../../business/post/PostBusiness";
import { UserBusiness } from "../../business/user/UserBusiness";
import { Post } from "../../model/post/Post";
import { getPostInputDTO, PostInputDTO, UserInputDTO } from "../../model/types";

export class PostController {
    async createPostController(req: Request, res: Response) {
        try {
            const input: PostInputDTO = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type
            }

            const postBusiness = new PostBusiness()
            const token = await postBusiness.createPostBusiness(input)

            res.status(200).send({ message: "Post criado com sucesso!", token })

        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    async getPost(req: Request, res: Response) {
        try {
            let message = "Success!"
      
            const input: getPostInputDTO = {
                id: req.params.id
            }
      
            const post: Post = await new PostBusiness().getPostBusiness(input)

            res.status(200).send({ message, post })
      
         } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
      
            res.send({ message })
         }
      }
}