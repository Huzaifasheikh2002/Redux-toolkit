import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { margin } from "@mui/system";
import { Avatar, Button, Container,    Typography } from "@mui/material";
// import ButtonCmp from "../Components/MuiComponents/ButtonCmp";
import {useState}  from "react";
import { auth, db,} from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {collection,addDoc,setDoc,doc } from "firebase/firestore"
import {useNavigate} from "react-router-dom"
import React, { useEffect} from "react";
export default function SignUp({ label, placeholder, onChange, style }) {

  const[fullname,setFullname]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  
  const user = localStorage.getItem("uid");
  const navigate =useNavigate()
  
  useEffect(()=>{
  if(user){
    navigate("/home")
  }
  },[]);

  
const SignupHandler = (event) => {
    event.preventDefault();
    console.log("submit");

// db firestore
const dbCollection=collection(db,"users")
// db firestore

    createUserWithEmailAndPassword(auth,email,password)
    .then (async(resolve)=>{
        console.log(resolve,"resolve");
        const obj={
          fullname,
          email,
          password, 
          uid:resolve.user.uid,
        }
          await setDoc(doc(db,"users",resolve.user.uid,),obj);
        // await addDoc(dbCollection,obj)
        navigate("/")
    })
    .catch(error=>{
        console.log(error,"error");
    })

}




// const theme = createTheme();



// console.log("auth ",auth);


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
            Sign in
          </Typography>
   <Box component="form"
   onSubmit={SignupHandler} 
          noValidate sx={{ mt: 1 }}>

    {/* <TextField
      id="outlined-basic"
      label={label ? label : "Enter First Name"}
      variant="outlined"
      placeholder={placeholder || "enter your placeholder"}
      onChange={onChange}
      sx={{
        input: style,
        display:"block",
        margin:"20px",
        width:200,
        
      }}
         /> */}
    <TextField
              onChange={(e)=>{
                setFullname(e.target.value);
              }}
              margin="normal"
              required
              fullWidth
              id="name"
              placeholder={placeholder || "enter your full name"}

              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
              sx={{
                width:350,
               margin:"20px",
               display:"block",
                   
                 }}
            />

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
                width:350,
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
             width:350,
            margin:"20px",
            display:"block",
                
              }}
            />

<Button
              type="submit"
          
              variant="contained"
              sx={{ 
              // alignItemscenter  
                mt: 3, mb: 2, ml:3 
              
              }}
            >
              Sign In
            </Button>
</Box>

            </Box>
        
      </Container>
      
{/* <ButtonCmp/> */}

  </>);
}

// 
// asnsaksna
// 
// 
// 
// 
// 
//
// 



// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // const data = new FormData(event.currentTarget);
//     console.log("submitttttt");
//     console.log({
//     //   email: data.get('email'),
//     //   password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       {/* <Container component="main" maxWidth="xs"> */}
//         {/* <CssBaseline /> */}
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} 
//           noValidate sx={{ mt: 1 }}
          
//           >
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       {/* </Container> */}
//      </ThemeProvider>
//   );
// }







