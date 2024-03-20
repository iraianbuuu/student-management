//import './App.css';
import { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableRow, TableHead, styled, Button } from '@mui/material';
import axios from 'axios';

const Component = styled(Box)`
  width: 80%;
  margin: 50px auto;
  & > h4 {
    margin-bottom: 20px;
  }

  & > div > table > thead {
    background-color: #000;
  }

  & > div > table > thead > tr > th {
    color: #ffffff;
  }
`;

function Home() {
  const [users, setUsers] = useState([]);
  const API = 
  "https://x4vpu1ts34.execute-api.ap-south-1.amazonaws.com/Dev/allStudents";
  useEffect(() => {
    const getData = async () => {
        const res = await axios.get(API);
        console.log(res);
        setUsers(JSON.parse(res.data.body).Items);
    };
    getData();
  }, []);

 const removeEntry = (id) => {
    
  };
  return (
    <Component>
      <h1 align = 'center'>
        Student Details
      </h1>
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Register Number</TableCell>
              <TableCell>Roll No</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.reg}</TableCell>
                <TableCell>{user.roll}</TableCell>
                <TableCell>{user.dept}</TableCell>
                <TableCell>{user.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Component>
  );
}


export default Home;