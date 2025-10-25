import { compare } from "bcrypt";
import UserModel from "../models/userModel.js";
import { hash } from "../utils/hashUtil.js";
import { jwtSignUtil } from "../utils/jwtSignUtil.js";

export const register = async (req, res) => {
    try {
        const registerData = req.body

        console.log(registerData);

        const hashPassword = hash(registerData.password)
 
        await UserModel.create({
            word : registerData.word,
            meaning : registerData.meaning,
            exampleSentence : hashPassword
        })

        res.status(201).json({
            message : "Berhasil register, silahkan login",
            data : null
        })
    } catch(e) {
        res.status(500).json({
            message : e.message,
            data : null
        })
    }
}

export const login = async (req,res) => {
    try {
        const loginData = req.body

        const user =  await UserModel.findOne({
            meaning : loginData.meaning
        })

        if(!user){
            res.status(404).json({
                message : "User tidak ditemukan",
                data : null
            })
        }

        if(compare(loginData.password, user.password)) {
            return res.status(200).json({
                message : "Login Berhasil",
                data : {
                    word : user.word,
                    meaning : user.meaning,
                    token : jwtSignUtil(user)
                }
            })
        }

        return res.status(401).json({
                message : "Login Gagal",
                data : null
            })

    } catch (error) {
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
  }