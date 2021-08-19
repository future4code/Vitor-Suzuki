import express from 'express'
import { UserController } from '../controller/user/UserController'

export const userRouter = express.Router()

const userController = new UserController()
userRouter.post('/signup', userController.signUpController)
userRouter.post('/login', userController.loginController)