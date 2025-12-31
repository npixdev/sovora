const db = require('../db')

const products_sql =`
SELECT 
    p.id,
    p.name,
    p.description,
    p.price,
    JSON_ARRAYAGG(JSON_OBJECT(
        'id', i.id,
        'image_url', i.image_url,
        'is_main', i.is_main
    )) AS images
    FROM product p
    LEFT JOIN image i ON i.product_id = p.id
    GROUP BY p.id
`
const getAll = (req, res) => {
    db.query(products_sql, (err, data)=> {
        if(err) return res.status(500).json(err)
        res.json(data)
    })
}

module.exports = { getAll }