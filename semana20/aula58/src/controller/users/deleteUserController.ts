import { Request, Response } from "express";
import { deleteUser } from "../../data/users/deleteUser";

export const deleteUserController = async (req: Request, res: Response) => {
    try {
        const input = { id: req.params.id, token: req.headers.authorization!}

        await deleteUser(input.toString())

        res.status(200).send('Usuário deletado!')
    } catch (error) {
        res.status(400).send(error.message)
    }
}