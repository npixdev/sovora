import '../styles/Login.css'
import { useState, ChangeEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Login() {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        alert(JSON.stringify(form))
        const res = await fetch('http://localhost:8081/auth/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            credentials: 'include',
            body: JSON.stringify(form),
        })
        if (res.ok) {

            navigate('/')   
        } else {
            const data = await res.json()
            alert('Erreur' + data.message)
        }
    }

    return(
    <div className='loginContainer'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input name='email' type='email' placeholder="email" onChange={handleChange}></input>
            <input name='password' type='password' placeholder="password" onChange={handleChange}></input>
            <button type='submit'>submit</button>
            <p>Don't have an account?</p><Link to='/signup' className='signupLink'><p>Sign up</p></Link>
        </form>
    </div>
    )
}

export default Login