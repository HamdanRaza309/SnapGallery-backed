import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import multer from 'multer'

const upload = multer()
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({
    limit: '16kb'
}))
app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}))
// app.use(upload.none())
app.use(express.static('public'))
app.use(cookieParser())

import snapRoutes from './routes/snapRoutes.js'

app.use('/api/v1/snap', snapRoutes)

export { app };