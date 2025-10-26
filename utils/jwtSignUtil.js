import jwt from "jsonwebtoken";

export const jwtSignUtil = (user) => {
    const payload = {
        word : user.word,
        meaning : user.meaning
    }

    const expiresIn = {
        expiresIn : '1h'
    }

    return jwt.sign(payload, "JWT_SECRET_KEY", expiresIn)
}