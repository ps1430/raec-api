import React, {useState} from 'react'
import { Box,Button,TextField,Typography } from '@mui/material'


function Login() {
    function xyz() {
        console.log(Name)
        console.log(Email)
        console.log(password)
    }
    const [IsSignup, setIsSignup] = useState(false);
  return (
  
    <Box 
     display="flex"
     flexDirection={"Column"}
     maxWidth={400}
     alignitems="center"
     justifyContent={"center"}
     margin="auto"
     marginTop={5}
     padding={3}
       borderRadius={5}
       boxShadow={"5px 5px 10px #ccc"}
    >
     <Typography variant="h2"padding={3}textAlign="center">Login</Typography>
     <TextField id="filled-basic" label="Name" type={"text"} variant="filled" /><br/>
     <TextField id="standard-basic" label="Email" type={"email"} variant="filled" /><br/>
     <TextField id="outlined-basic" label="Password" type={"password"} variant="filled" /><br/>
     <Button onClick={()=>{xyz()}}sx={{marginTop:3, borderRadius:3}} variant="contained" color="warning">Login</Button>
     <Button onClick={()=>setIsSignup} sx={{marginTop:3, borderRadius:3}}>Signup</Button>
    </Box>
      

  );
}

export default Login
