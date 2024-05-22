import express from "express"
export const studentRouter=express.Router()

studentRouter.get("/student",(req,res)=>{
    res.send("student")
})