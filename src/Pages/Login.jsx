import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { margin } from "@mui/system";
import { Avatar, Button, Container, Typography } from "@mui/material";
// import ButtonCmp from "../Components/MuiComponents/ButtonCmp";
import {useState}  from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import React, { useEffect} from "react";

export default function Login({ label, placeholder, onChange, style }) {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const user = localStorage.getItem("uid");
const navigate =useNavigate()

useEffect(()=>{
if(user){
  navigate("/home")
}
},[]);


  const LoginHandler= (e)=>{
    e.preventDefault()
    console.log("login");
    signInWithEmailAndPassword(auth,email,password)

    .then(async(resolve)=>{
      console.log("resolve",resolve);
      localStorage.setItem("uid",resolve.user.uid);
      navigate("/home");
    })
    .catch((error)=>{
      console.log(error,"error");
    });


    //  
    
  };
  return (<>
      <Container component="main" maxWidth="xs">
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
   {/* <Typography variant="h4" margin={4}>SignUp</Typography> */}
   <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
          Login
          </Typography>
          <Box component="form"
          onSubmit={LoginHandler} 
          noValidate sx={{ mt: 1 }}>

<TextField
              onChange={(e)=>{
                setEmail(e.target.value);
             }}
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder={placeholder || "enter your email"}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{
                width:500,
               margin:"20px",
               display:"block",
                   
                 }}
            />
<TextField
             onChange={(e)=>{
                setPassword(e.target.value);
              }}
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder={placeholder || "enter your password"}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{
             width:500,
            margin:"20px",
            display:"block",
                
              }}
            />

          <Button
           type="submit"
              fullWidth
             variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
          Login 
         </Button>
        </Box>
    </Box>
</Container>

{/* <ButtonCmp/> */}

  </>);
}

// 
// 
// 
// 
// 
// 
// 
//
// 






