import React from 'react'
import MyTable from './MyTable'
import Signup from './Signup'
import {Grid} from '@mui/material'

function MyGrid() {
  return (
    <div>
        <Grid container spacing={2}>
           <Grid item xs={8}> <Signup />
        </Grid>
        <Grid item xs={4}> <MyTable />
         
        </Grid>
 
        </Grid>
      
    </div>
  )
}

export default MyGrid
