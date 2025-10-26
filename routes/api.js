import express from "express";
import * as authController from "../controllers/authController.js"
import * as wordController from "../controllers/wordController.js";
import { protect } from "../middleware/authMiddleware.js";
import * as profileController from "../controllers/profileController.js";

const api = express.Router();

api.post('/register', authController.register);
api.post('/login', authController.login);

api.get("/word", wordController.listWord)
api.get("/word/:id", wordController.listWord)
api.post("/word", wordController.createWord)
api.put("/word/:id", wordController.updateWord)
api.delete("/word/:id", wordController.deleteWord)

api.get('/me', protect, profileController.privateProfile)

export default api