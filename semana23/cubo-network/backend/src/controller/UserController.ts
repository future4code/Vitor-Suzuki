import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserInputDTO } from "../model/user"

export class UserController {
    async signup(req: Request, res: Response) {
        try {
            const response: UserInputDTO = {
                name: req.body.name,
                last_name: req.body.last_name,
                participation: req.body.participation
            }

            const userBusiness = new UserBusiness()

            const result = await userBusiness.signup(response)

            res.status(200).send({ message: "User created!", result, response })
        } catch (err: unknown) {
            if (err instanceof Error) 
                return res.status(400).send(err.message)
        }
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            const userBusiness = new UserBusiness()

            const result = await userBusiness.getAllUsers()

            res.status(200).send(result)
        } catch (err: unknown) {
            if (err instanceof Error) 
                return res.status(400).send(err.message)
        }
    }

}