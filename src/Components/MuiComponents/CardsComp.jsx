// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
// import Cardimage from "../../Assests/ironman3_2.jpg" 
import ButtonCmp from './ButtonCmp';
import { add } from '../../store/CartSlice';
import { useDispatch } from 'react-redux';
import React, { useEffect} from "react";

// db
import {db} from "../../firebase"
import { useNavigate } from 'react-router-dom';
// db
// console.log(db,"db");

export default function ProductCard({product}) { 

  const user =localStorage.getItem("uid")
  const navigate =useNavigate();

  // useEffect(()=>{
  //   if(!user){ 
  //     navigate("/");
  //   }
  // },[]);

  const dispatch =useDispatch();
  const addtocart=()=>{
    dispatch(add(product));
  };

  return (<>

  </>  );
}
