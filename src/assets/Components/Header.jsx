import React from 'react'
import {Badge, Container,Nav,Navbar} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../../redux/slices/productSlice';




function Header({insideHome}) {
  const dispatch = useDispatch()
  const yourWishlist = useSelector(state => state.wishlistReducer)
  const yourCart = useSelector(state => state.cartReducer)
  return (
    <Navbar expand="lg" className="bg-info w-100 position-fixed top-0" style={{zIndex:'10'}}>
      <Container>
        <Navbar.Brand href="#home"><Link className="fw-bolder" to={'/'} style={{color:'white', textDecoration:'none'}}> <i className='fa-solid fa-truck-fast'></i> FF Store</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
              insideHome &&
              <Nav.Link>
              <input style={{width:'500px'}} type="text" 
              onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} className='rounded p-1' placeholder='Search Products Here!!!' />
            </Nav.Link>
            }
    
            <Nav.Link>
            <Link className='fw-bolder' style={{color:'white',textDecoration:'none'}} to={'/wishlist'}> <i className='fa-solid fa-heart text-danger'></i>Wishlist<Badge>{yourWishlist.length}</Badge>
            </Link>
            </Nav.Link>

            <Nav.Link>
            <Link className='fw-bolder' style={{color:'white',textDecoration:'none'}} to={'/cart'}> <i className='fa-solid fa-cart-plus text-success'></i>Cart<Badge>{yourCart.length}</Badge>
            </Link>
            </Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
