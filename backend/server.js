const express = require('express')
const colors = require('colors')
const cors = require('cors')
const dotenv = require('dotenv').config()
const connectDB = require("./config/db")
const port = process.env.PORT || 5000
const { errorHandler } = require("./middleware/errorMiddleware")

connectDB()

const app = express()

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/players', require('./routes/playersRoutes'))
app.use('/api/matches', require('./routes/matchesRoutes'))

app.use(errorHandler)

app.listen(port, ()=> console.log(`Servidor iniciado en el puerto ${port}`))