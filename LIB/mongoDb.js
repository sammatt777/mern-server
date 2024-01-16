const express = require('express')

const mongoose = require('mongoose')


const dbConnect = async()=>{

    const resp =  mongoose.connect(process.env.MONGODB_URL)
        console.log(resp);

        
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log('DB connected Successfully');
    })

}


module.exports = dbConnect;