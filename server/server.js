import express from 'express'
require('dotenv').config()
import cors from 'cors'
import initRouters from './src/routers'
import connectDatabase from './src/config/connectDatabase'

const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['PORT', 'GET', 'PUT', 'DELETE']
}))
//cài đặt cấu hình để có thể đọc API
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

initRouters(app)
connectDatabase()

app.use('/', (req, res) => { res.send('server on...') })
const post = process.env.PORT || 8888
const listener = app.listen(post, () => {
    console.log(`Server is runing on the port ${listener.address().port}`)
})