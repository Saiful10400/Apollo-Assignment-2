import { Router } from "express"
const routes=Router()


routes.get("/",(req,res)=>{
    res.send("you are right bro.")
})





export default routes