import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.router.js'
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

app.use('/api/user', userRouter)
