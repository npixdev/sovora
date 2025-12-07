import '../styles/Header.css'
import { Link } from 'react-router-dom'

function Header({ search, setSearch}: {search: string, setSearch: (s: string) => void }) {
    return (
        <nav className='header'>
            <div className='header-title'>
                <Link to='/'><h1>Sovora</h1></Link>
            </div>
            <div className='header-searchbar'>
                <div className='header-searchbar-item'>
                    <input placeholder='Rechercher' type='search' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <Link to='/products'><img src='src\assets\search.png'></img></Link>
                </div>
            </div>
            <nav className='header-navbar'>
                <ul>
                    <li><Link to='/products'><p>Nos montres</p></Link></li>
                    <li><Link to='/page2'><p>Custom</p></Link></li>
                    <li><Link to='/cart'><p>Panier</p></Link></li>
                </ul>
            </nav>
        </nav>
    )
}

export default Header