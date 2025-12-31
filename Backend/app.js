    require('dotenv').config()
    const express = require('express')
    const cors = require('cors')
    const path = require('path')
    const cookieParser = require('cookie-parser')

    const authRoutes = require('./routes/auth.routes')
    const productRoutes = require('./routes/products.routes')

    const app = express()

    app.use(cookieParser())
    app.use(cors({
        origin: 'http://localhost:5173', 
        credentials: true
    })) 
    app.use(express.json())
    app.use('/images', express.static(path.join(__dirname, 'public/images')))

    app.use('/auth', authRoutes)
    app.use('/products', productRoutes)

    module.exports = app