import {Request, Response} from 'express';
import editUser from './editUser';

export default async function updateUser( req: Request, res: Response) {
    try {
        if (req.body.name === '' || req.body.nickname === '' || req.body.email === '') {
            throw new Error("One or more fields are blank!")
        }

        await editUser( req.params.id, req.body.name, req.body.nickname, req.body.email)

        res.status(200).send({message: "User has been updated!"})

    } catch (error) {
        res.status(400).send({message: error.message})
    }
}