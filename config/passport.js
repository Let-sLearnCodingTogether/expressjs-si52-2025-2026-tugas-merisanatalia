import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import UserModel from "../models/userModel.js";

const opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : "JWT_SECRET_KEY"
}

passport.use(
    new Strategy(opts, async (payload, done) => {
        try{
            const user = await UserModel.findOne({
                meaning : payload.meaning
            })

            if(!user) {
                return done(nulll, false)
            }

            return done (null, {
                id : user._id,
                meaning : user.meaning,
                word : user.word
            })

        } catch (eror) {
            return done (null,false)
        }
    })
)