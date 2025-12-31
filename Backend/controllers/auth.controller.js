const bcrypt = require('bcrypt')
const db = require('../db')
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
  const { username, email, password } = req.body

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Champs manquants' })
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    const sql = `
      INSERT INTO users (username, email, password)
      VALUES (?, ?, ?)  
    ` 
    
    db.query(sql, [username, email, hashedPassword],  (err) => {
      if (err) {
        console.error(err)
        return res.status(500).json({ message: 'Erreur SQL' })
      }

      res.status(201).json({ message: 'Utilisateur créé' })
    })
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ message: 'Champs manquant' })
  }

  const sql = 'SELECT * FROM users WHERE email = ?'
  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({message: 'Erreur sql'})
    if (results.length === 0) return res.status(401).json({message: 'Utilisateur introuvable'})
    
    const user = results[0]
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ message: 'Mot de passe incorrect'})
    }

    const token = jwt.sign(
      { id: user.id, email: user.email},
      process.env.JWT_SECRET,
      { expiresIn: '10m'}
    )

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
      maxAge: 10 * 60 * 1000
    })
    res.json({ message: 'Login success'})
  })
}

const logout = async (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: false,
    sameSite: 'strict'
  })
  res.json({message: 'Déconnecté'})
}

module.exports = { signup, login, logout }