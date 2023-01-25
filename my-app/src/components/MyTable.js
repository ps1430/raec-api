//import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { getUsers} from '../components/service/api'
//import {styled} from '@emotion/styled'


export default function MyTable() {
   const [users,setUsers] = useState([]);
  
    useEffect(()=> {
      getUsersDetails();

    }, [])
    const getUsersDetails = async () => {
      let response = await getUsers();
      console.log(response);
      setUsers(response.data)
    }
    
  return (
 
      <Table sx={{ minWidth: 650, margin: 10 }} stickyHeader aria-label="sticky table" >
        <TableHead>
          <TableRow> 
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Name&nbsp;</TableCell>
            <TableCell align="right">Address&nbsp;</TableCell>
            <TableCell align="right">Email&nbsp;</TableCell>
            <TableCell align="right">Password&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
               users.map(user => (
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              
              <TableCell align="right">{user.id}</TableCell>`
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.address}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.password}</TableCell>
            </TableRow>
            ))
          }
        
        </TableBody>
      </Table>
  
  );
}