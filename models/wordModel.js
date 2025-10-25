import mongoose from "mongoose"

const WordSchema = new mongoose.Schema (
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

const WordModel = mongoose.model("Word", WordSchema)

export default WordModel