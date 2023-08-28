require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

const app = express()//express app

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
// app.get('/', (req, res) => {
//     res.json({msg: "Welcome to the app"})
// })
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {//Listen for requests
            console.log(`Connected to DB & Listening to Port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log("Error")
    })

