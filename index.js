const express=require("express")
const dotenv=require("dotenv")
const app=express()
dotenv.config({path:"./config.env"})
require("./db/conn")
// require({path:"./config.env"})


app.use(express.json());
app.use(require("./router/router"));

PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`)
})