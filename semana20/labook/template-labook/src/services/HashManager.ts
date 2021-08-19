import bcrypt from 'bcryptjs'

export class HashManager {
    async hash(plainText: string): Promise<string> { 
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        return bcrypt.hash(plainText, salt)
    }

    compare(plainText: string, hash: string) {
        return bcrypt.compare(plainText, hash)
    }
}