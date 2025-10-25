import express from "express";
import * as authController from "../controllers/authController.js"
import * as wordController from "../controllers/wordController.js";
import { protect } from "../middleware/authMiddleware.js";

const api = express.Router();

api.get('/register', authController.register);
api.post('/login', authController.login);

api.get("/word", wordController.getWord)
api.get("/word/:id", wordController.getWord)
api.post("/word", wordController.createWord)
api.put("/word/:id", wordController.updateWord)
api.delete("/word/:id", wordController.deleteWord)



export default api