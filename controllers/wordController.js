import { compare } from "bcrypt";
import UserModel from "../models/userModel.js";
import { hash } from "../utils/hashUtil.js";
import { jwtSignUtil } from "../utils/jwtSignUtil.js";
import WordModel from "../models/wordModel.js";

export const createWord = async (req, res) => {
  try {
   const request = req.body

        const response = await WordModel.create({
            word : request.word,
            meaning : request.meaning,
            exampleSentence : request.exampleSentence
        })

        res.status(201).json({
            message : "Data berhasil dibuat",
            data : response
        })
        
    } catch (error) {
        res.status(500).json({
           message : error,
            data : null
        })
  }
};

export const listWord = async (req, res) => {
  try {
    const data = await WordModel.find({})

        res.status(200).json({
            message: "List Data",
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
  }
};

export const updateWord = async (req, res) => {
  try {
    const id = req.params?.id
        const request = req.body

        if(!id){
            return res.status(500).json({
                message : "Id wajib diisi",
                data : null
            })
        }

         const response = await WordModel.findByIdAndUpdate(id, {
            word : request.word,
            meaning : request.meaning,
            exampleSentence : request.exampleSentence
         })

        if(!response){
            return res.status(500).json({
                message : "Data gagal diupdate",
                data : null
            })
        }

        return res.status(200).json({
            message : "Data berhasil diupdate"
        })

    } catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
  }
};

export const deleteWord = async (req, res) => {
  try {
    const id = req.params.id
        if(!id){
            return res.status(500).json({
                message : "Id wajib diisi",
                data : null
            })
        }

        const response = await WordModel.findByIdAndDelete(id)

        if(response){
            return res.status(200).json({
                message : "Data berhasil dihapus",
                data : null
            })
        }

        return res.status(404).json({
                message : "Data tidak ditemukan",
                data : null
            })

    } catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
  }

  
};
