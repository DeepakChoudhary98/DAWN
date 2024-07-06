import {createSlice} from "@reduxjs/toolkit"

const initialState={
    quantity:0,
    products:[],
    total:0
}

export const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            state.quantity+=1
            state.products.push(action.payload)
            state.total+=action.payload.price*action.payload.quantity;
        },
        removeProduct:(state,action)=>{
            state.quantity-=1;
            state.total-=action.payload.price;
            state.products=state.products.filter(item=> item._id!==action.payload.id)
        },
        deleteCart:(state)=>{
            state.quantity=0;
            state.total=0;
            state.products=[];
        }
    }
})

export const {addProduct,removeProduct,deleteCart}= cartSlice.actions
export default cartSlice.reducer
 

