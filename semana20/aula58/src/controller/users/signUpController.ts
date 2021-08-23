import { Request, Response } from "express"
import { signUpBusiness } from "../../business/users/signUpBusiness"

export const signUpController = async (req: Request, res: Response) => {
    try {
        const { name, email, password, role } = req.body

        const token = await signUpBusiness({name, email, password, role})

        res.status(200).send({ message: "Usuário criado!", token})

    } catch (error) {
        res.status(400).send(error.message)
    }
}