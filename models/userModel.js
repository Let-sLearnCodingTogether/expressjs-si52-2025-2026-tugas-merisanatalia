import mongoose from "mongoose"

const UserSchema = new mongoose.Schema (
    {
        word : {
            type : String,
            required : [true, " User name wajib di isi"],
            unique : true,
            trim : true
        },
        meaning : {
            type : String,
            required : [true, "Email wajib di isi"],
            unique : true,
            trim : true
        },
        exampleSentence : {
            type : String,
            required : [true, " Password wajib di isi"]
        }
    },
    {
        timestamps : true
    }
)

const UserModel = mongoose.model("User", UserSchema)

export default UserModel