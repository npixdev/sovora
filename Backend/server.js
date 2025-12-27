require('dotenv').config();
const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

app.get('/', (req, res) => {
    return res.json("From Backend Side")
})

app.get('/products', (req, res)=> {
    const sql = "SELECT * FROM product";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
    console.log("listening")
})