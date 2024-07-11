import { Response } from "express";

interface TsendResponse<T>{
success:boolean,
statusCode:number,
message:string,
data:T
}

const sendResponse=<T>(res:Response,data:TsendResponse<T>)=>{
    res.status(data.statusCode).json({
        success:true,
        message:data.message,
        data:data.data
    })
}

export default sendResponse