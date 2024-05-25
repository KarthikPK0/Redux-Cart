
import {Navigate, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './assets/pages/Home'
import Wishlist from './assets/pages/Wishlist'
import Cart from './assets/pages/Cart'
import Footer from './assets/Components/Footer'
import View from './assets/pages/View'


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/:id/view' element={<View/>}/>
      {/* { page not found } */}
      <Route path='/*' element={<Navigate to={'/'}/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
