import { Request, Response } from "express";
import { UserBusiness } from "../../business/user/UserBusiness";
import { UserInputDTO } from "../../model/types";

export class UserController {
    async signUpController(req: Request, res: Response) {
        try {
            const input: UserInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const token = await userBusiness.signUpBusiness(input)

            res.status(200).send({ message: "Usuário criado com sucesso!", token })

        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    async loginController(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            const userBusiness = new UserBusiness()
            const token = await userBusiness.loginBusiness({ email, password })

            res.status(200).send({ message: "Usuário logado!", token })
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}