import { compare } from "bcrypt";
import UserModel from "../models/userModel.js";
import { hash } from "../utils/hashUtil.js";
import { jwtSignUtil } from "../utils/jwtSignUtil.js";

export const createWord = async (req, res) => {
  try {
   const request = req.body

        const response = await UserModel.create({
            word : request.word,
            meaning : request.meaning,
            exampleSentence : request.exampleSentence
        })

        res.status(201).json({
            word : "Data berhasil dibuat",
            data : response
        })
        
    } catch (error) {
        res.status(500).json({
            word : error,
            data : null
        })
  }
};

export const getWord = async (req, res) => {
  try {
    const data = await userModel.find({})

        res.status(200).json({
            word : "List Data",
            data : data
        })
    } catch (error) {
        res.status(500).json({
            word : error,
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
                word : "Id wajib diisi",
                data : null
            })
        }

         const response = await userModel.findByIdAndUpdate(id, {
            word : request.word,
            exampleSentence : request.exampleSentence
         })

        if(!response){
            return res.status(500).json({
                word : "Data gagal diupdate",
                data : null
            })
        }

        return res.status(200).json({
            word : "Data mahasiswa berhasil diupdate"
        })

    } catch (error) {
        res.status(500).json({
            word : error,
            data : null
        })
  }
};

export const deleteWord = async (req, res) => {
  try {
    const id = req.params.id
        if(!id){
            return res.status(500).json({
                word : "Id wajib diisi",
                data : null
            })
        }

        const response = await userModel.findByIdAndDelete(id)

        if(response){
            return res.status(200).json({
                word : "Data berhasil dihapus",
                data : null
            })
        }

        return res.status(404).json({
                word : "Data tidak ditemukan",
                data : null
            })

    } catch (error) {
        res.status(500).json({
            word : error,
            data : null
        })
  }

  
};
