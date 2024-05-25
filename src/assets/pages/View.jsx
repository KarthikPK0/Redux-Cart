import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../../redux/slices/wishlistSlice'
import { addToCart } from '../../redux/slices/cartSlice'


function View() {
  const yourCart = useSelector(state => state.cartReducer)
  const [product, setProduct] = useState({})
  const {id} = useParams()
  const userWishlist = useSelector(state => state.wishlistReducer) 
  const dispatch = useDispatch()
  console.log(userWishlist);
  //console.log(id);


  useEffect(()=>{
  if(localStorage.getItem("allProducts")){
    const allProducts = JSON.parse(localStorage.getItem("allProducts"))
    setProduct(allProducts.find(item=>item.id==id))
  }
  },[])

  const handleWishlist = () => {
    if(userWishlist?.includes(product)){
       alert("Item already in your wishlist!!!")
    }else{
         dispatch(addToWishlist(product))
    }
  }

  const handleCart = () => {
     const existingProduct = yourCart?.find(item => item.id==product.id)
     if(existingProduct)
      {
       dispatch(addToCart(product))
       alert("Product quantity is Incrementing")

      }else{
       dispatch(addToCart(product))
      }
  }
  return (
    <>
      <Header/>
      <div style={{marginTop:'150px', height:'70vh'}} className='container d-flex align-items-center '>
        <div className='row align-items-center mb-5 w-100'>
        <div className="col-lg-5">
        <img className='w-100'  src={product?.thumbnail} />
        </div>
        <div className="col-lg-1">
         
        </div>
        <div className="col-lg-6">
          <h5>PID: {id}</h5>
          <h1>{product?.title}</h1>
          <h3 className='fw-bolder text-danger'>${product.price}</h3>
          <p>
          {product?.description}
          </p>

        <div className="d-flex justify-content-between mt-3">
         <button onClick={handleWishlist} className='btn btn-outline-dark'><i className='fa-solid fa-heart text-danger'></i>Add to Wishlist</button>

         <button onClick={handleCart} className='btn btn-outline-dark'><i className='fa-solid fa-cart-plus text-success'></i>Add to Cart</button>
         </div>
        </div>
        </div>

      </div>
    </>
  )
}

export default View
