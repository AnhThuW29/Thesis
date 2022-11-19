const express = require('express')
const bodyParser = require('body-parser')
const user = require('./models/user')
const cors = require('cors')
require('dotenv').config()
require('./config/db/index')    // connect to database
const morgan = require('morgan')

const userRouter = require('./routes/user')
const postRouter = require('./routes/post')
const tourPost = require('./routes/tourPost')
// const test = require('./routes/test')

const app = express()
const PORT = process.env.PORT

//app.use(bodyParser.json())      // Lấy dữ liệu nhập vào ( như req.body )
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())


app.use((err, req, res, next) => {
    res.status(500).json({error: err.message})
})

app.use(userRouter)
app.use('/post',postRouter)
app.use('/tour-post', tourPost)
// app.use('/test',test)

app.get('/', (req, res ) => {
    // res.send('Hello world!!!')
    res.json({success: true, message: 'Welcome to backend zone!'})
})



app.listen(PORT, () => { console.log('Port is listening') })
