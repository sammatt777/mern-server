const dotenv =  require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const dbConnect = require('./LIB/mongoDb')

app.use(cors())
app.use(express.json())

// dbConnect()


app.use('/api',userRoutes)


app.listen(process.env.PORT,()=>{
    console.log(process.env.PORT,"",'Port successfull');
})