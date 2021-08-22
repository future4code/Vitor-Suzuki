import express from 'express'
import { PostController } from '../controller/post/PostController'

export const postRouter = express.Router()

const postController = new PostController()
postRouter.post('/create', postController.createPostController)
postRouter.post('/:id', postController.getPost)