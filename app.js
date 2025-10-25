import express from "express"
import api from "./routes/api.js"
import database from "./config/database.js";

const app = express();
app.use(express.json())

// app.use(passport.initialize())

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use("/api", api)

app.listen(3000, () => {
    database()
    console.log("Aplikasi berjalan di http://localhost:3000");
})