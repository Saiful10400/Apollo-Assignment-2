/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { ErrorRequestHandler } from "express";
import { TerrorSource } from "../Errors/error.interface";

const globalErrorHandler:ErrorRequestHandler=(err,req,res,next)=>{

    // setting initial value of error object property.
    let statusCode=500
    let message="Something went wrong!"
    let errorSources:TerrorSource=[
        {
            path:"",
            message:"something went wrong!"
        }
    ]

    // manupulate defaultvalue according condition.

    return res.status(statusCode).send({
        success:false,
        message,
        errorSources,
        err,
        stack:null
    })
}

export default globalErrorHandler