import { Box, Typography ,Grid} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AutocompleteCmp from "../Components/MuiComponents/AutoCompleteCmp";
import ButtonCmp from "../Components/MuiComponents/ButtonCmp";
import ProductCard from "../Components/MuiComponents/CardsComp";
import InputCmp from "../Components/MuiComponents/InputCmp";
import { fetchProduct } from "../store/ProductSlice";

const Home = () => {
  
  const dispatch =useDispatch();
  const {data,status}=useSelector((state)=>state.products);
    useEffect(()=>{
dispatch(fetchProduct());
  },[]);

console.log("home data",data);

  if(status==="loading"){
    return<h1>Loading...</h1>; 
  }
  return (
    <Box   
    sx={{
      px:"20px",
     }}
      >
  <InputCmp/>
        
      <Typography variant="h6">HUZAIFA</Typography>

  <Grid container columnSpacing={2}>
     
     {data?.map((product,index)=>{
      return(
         <Grid item lg={3} key={index}>
          <ProductCard 
          product={product}
          
          />
          </Grid>
      );
     })}

  </Grid>     
     
    </Box>

  );
};

export default Home;
