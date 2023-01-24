import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


export default function MyForm1() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      id="outlined-basic" 
      label="Name" 
      variant="filled" /><br/>
      <TextField id="filled-basic" label="Phone No" variant="filled" /><br/>
      <TextField id="standard-basic" label="Age" variant="filled" /><br/>
      <TextField id="outlined-basic" label="Address" variant="filled" /><br/>
      <TextField id="filled-basic" label="Email" variant="filled" /><br/>
      <TextField id="standard-basic" label="Password" variant="filled" /><br/>
      <Button 
         onClick={()=>{alert("button click")}}
         variant="text">Register</Button>
      <Button variant="contained">Reset</Button>

    </Box>
  );
}