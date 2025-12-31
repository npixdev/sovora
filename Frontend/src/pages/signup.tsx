import '../styles/signup.css'
import { useState, ChangeEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Signup() {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        alert(JSON.stringify(form))
        const res = await fetch('http://localhost:8081/auth/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(form),
        })

        if (res.ok) {
            navigate('/login')
        } else {
            const data = await res.json()
            alert('Erreur' + data.message)
        }
    }

    return(
    <div className='signupContainer'>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <input name='username' placeholder='username' onChange={handleChange}></input>
            <input name='email' type='email' placeholder="email" onChange={handleChange}></input>
            <input name='password' type='password' placeholder="password" onChange={handleChange}></input>
            <button type='submit'>submit</button>
            <p>Already have an account?</p><Link to='/login' className='loginLink'><p>Login</p></Link>
        </form>
    </div>
    )
}

export default Signup  