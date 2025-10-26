import mongoose from "mongoose"

const WordSchema = new mongoose.Schema (
    {
        word : {
            type : String,
            required : [true, "Word wajib di isi"],
            unique : true,
            trim : true
        },
        meaning : {
            type : String,
            required : [true, "Meaning wajib di isi"],
            unique : true,
            trim : true
        },
        exampleSentence : {
            type : String,
            required : [true, "Example Sentence wajib di isi"]
        }
    },
    {
        timestamps : true
    }
)

const WordModel = mongoose.model("Word", WordSchema)

export default WordModel