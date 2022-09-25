const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const router = require('./router/router')
var cors = require("cors");

const app = express()
const DB_URI= process.env.MONGODB_SERVER
mongoose.connect(DB_URI)
mongoose.connection.once('open', () => {
    console.log('MongoDB connected')
}).on('error', () => {
    console.log('MongoDB not connected')
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors());
app.use('/api', router)
const PORT=process.env.PORT||3050

app.listen(PORT, (err) => {
    if (!err) {
        console.log('Server running on port 3050')
    } else {
        console.log(err)
    }
})

module.exports = app