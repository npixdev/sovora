import './styles/App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home.tsx'
import Products from './pages/products.tsx'
import Page2 from './pages/page2.tsx'
import Layout from './Layout.tsx'
import Product from './pages/product.tsx'
import Cart from './pages/cart.tsx'
import Login from './pages/login.tsx'
import Signup from './pages/signup.tsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/page2' element={<Page2 />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
