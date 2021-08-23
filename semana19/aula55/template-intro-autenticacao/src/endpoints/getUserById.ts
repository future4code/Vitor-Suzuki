import { Request, Response } from 'express'
import returnUserById from '../data/returnUserById';
import getTokenData from '../services/getTokenData';

export default async function getUserById(req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string;

        const authenticationData = getTokenData(token);

        const user = await returnUserById(authenticationData.id);

        res.status(200).send({id: user.id, email: user.email})
    } catch (error) {
        res.status(400).send(error.message)
    }
}

