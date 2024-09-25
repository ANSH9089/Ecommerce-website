const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router=require('./routes')
const authToken = require('./middleware/authToken')



const app = express()
const corsOptions = {
    origin: process.env.FRONTEND_URL, 
    credentials: true, 
    optionsSuccessStatus: 200 
};
app.use(cors(corsOptions));
app.use(express.json())
app.use('/api',router)
app.use(cookieParser())
app.use(authToken)

const PORT = process.env.PORT || 8000;



connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})