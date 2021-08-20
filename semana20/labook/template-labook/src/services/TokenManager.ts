import * as jwt from 'jsonwebtoken'
import { authenticationData } from '../model/types'

export class TokenManager {
    genToken(payload: authenticationData) {
        return jwt.sign(payload, process.env.JWT_KEY!, {expiresIn: process.env.JWT_EXPIRES_IN!})
    }

    getTokenData(token: string) {
        return jwt.verify(token, process.env.JWT_KEY!) as authenticationData
    }
}