import { Request, Response } from "express"
import { loginBusiness } from "../../business/users/loginBusiness"

export const loginController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        const token = await loginBusiness({email, password})

        res.send(token)

    } catch (error) {
        res.status(400).send(error.message)
    }
}