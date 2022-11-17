import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Cardimage from "../../Assests/ironman3_2.jpg" 
import ButtonCmp from './ButtonCmp';
import { add } from '../../store/CartSlice';
import { useDispatch } from 'react-redux';

export default function ProductCard({product}) { 
  const dispatch =useDispatch();
  const addtocart=()=>{
    dispatch(add(product));
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
      <ButtonCmp text="Add To Cart" onClick={addtocart}/>      
    </Card>
  );
}
