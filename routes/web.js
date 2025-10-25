import express from "express"
import * as wordController from "../controller/profileController.js"

const web = express.Router()

web.get('/', (req, res) => {
    res.render('index')
})

export default web