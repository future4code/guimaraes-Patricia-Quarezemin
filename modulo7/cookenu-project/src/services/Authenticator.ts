import * as jwt from 'jsonwebtoken'

export class Authenticator {

    generateToken = (id: string) => {
        const token = jwt.sign(
            {id},
            process.env.JWT_KEY as string,
            {expiresIn: process.env.JWT_DURATION}
        )
        return token
    }

    getTokenData = (token: string) => {
        const payload = jwt.verify(token, 'backend')
        return payload
    }
}