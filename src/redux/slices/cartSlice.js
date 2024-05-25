import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cartItems',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.price * existingProduct.quantity
                state = [...remainingProducts,existingProduct]

            }else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        removeCartItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
            incQuantity:(state,action) => {
                const existingProduct = state.find(item=>item.id==action.payload)
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.price * existingProduct.quantity
                const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
                state = [...remainingProducts,existingProduct]
            },
            decQuantity:(state,action) => {
                const existingProduct = state.find(item=>item.id==action.payload)
                existingProduct.quantity--
                existingProduct.totalPrice = existingProduct.price * existingProduct.quantity
                const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
                state = [...remainingProducts,existingProduct]
            },
            emptyCart:(state)=>{
                return state = []
            }
        }
    })

export const {addToCart,removeCartItem, incQuantity, decQuantity,emptyCart} = cartSlice.actions
export default cartSlice.reducer