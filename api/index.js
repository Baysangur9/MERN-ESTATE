import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('Connect to MongoDb')
    })
    .catch((err) => {
        console.log(err)
    })

const app = express()

app.listen(3000, () => {
    console.log('Server running ad port 3000')
})