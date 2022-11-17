import {createSlice} from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload);
            // console.log("hello",action);
        },
        remove(){},
    },
});

const {actions,reducer}=cartSlice;
const {add,remove}=actions;
export {add,remove, reducer as cartSlice};