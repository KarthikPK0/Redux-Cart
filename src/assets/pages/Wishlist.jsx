import React from 'react'
import Header from '../Components/Header'
import { Col,Row,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist, removeWishlistItem } from '../../redux/slices/wishlistSlice'
import { addToCart } from '../../redux/slices/cartSlice'


function Wishlist() {
  const ourWishlist = useSelector(state => state.wishlistReducer)
  const ourCart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()


  const handleCart = (product) => {
    const existingProduct = ourCart?.find(item => item.id==product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
      alert("Product quantity is incrementing!!!")
    }else{
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
    }
  }
  return (
    <div>
      <Header/>
      <div style={{marginTop:'150px'}} className='container-fluid'>

     {
      ourWishlist.length > 0 ?
     <div>
          <h3 className='text-danger'>Your Wishlist</h3>
      <Row className='my-5'>
    {
      ourWishlist?.map(product=>(
        <Col key={product?.id} className='mb-5 me-2' sm={12} lg={6} xl={3} >
        <Card className='shadow rounded' style={{ width: '18rem' }}>
      <Card.Img height={'180px'} variant="top" src={product?.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
           <div className='d-flex justify-content-around mt-3'>
            <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='btn'><i className='fa-solid fa-heart-circle-xmark text-danger'></i></button>
  
            <button onClick={() => {handleCart(product)}} className='btn'><i className='fa-solid fa-cart-plus text-success'></i></button>
           </div>
      </Card.Body>
    </Card>
        </Col>
      ))
    }

    </Row>
     </div>
      :
      <div className="d-flex justify-content-center align-items-center flex-column">
        <img width={'400px'} height={'400'} src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2161427-1815069.png" alt="empty" />
        <h3 style={{paddingBottom:'15px'}}>Your wishlist is empty!!!</h3></div>
     }

     </div>
    </div>
  )
}

export default Wishlist
