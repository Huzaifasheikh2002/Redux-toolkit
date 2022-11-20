import { Box, Typography ,Grid} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AutocompleteCmp from "../Components/MuiComponents/AutoCompleteCmp";
import ButtonCmp from "../Components/MuiComponents/ButtonCmp";
import ProductCard from "../Components/MuiComponents/CardsComp";
import InputCmp from "../Components/MuiComponents/InputCmp";
import {BasicSelect,  BasicSelect2 } from "../Components/Select";
import { fetchProduct } from "../store/ProductSlice";
// import car1 from "../Assests/car1.jpg"
// import car2 from "../Assests/car2.jpg"
// import car3 from "../Assests/car3.jpg"
import { MediaCard1 } from "../Components/MainCards";
import { MediaCard2 } from "../Components/MainCards";
import { MediaCard3 } from "../Components/MainCards";
import Footer from "../Components/Footer";

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
  <BasicSelect/>
  <BasicSelect2/>


  <Grid container columnSpacing={2}>
    
   
         <Grid item lg={4}>
         <MediaCard1/>
          </Grid>

          <Grid item lg={4}>
         <MediaCard2/>
          </Grid>
          <Grid item lg={4}>
         <MediaCard3/>
          </Grid>
    </Grid>

    <Footer/>
{/*  
        
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

  </Grid>      */}
     
    </Box>

  );
};

export default Home;
