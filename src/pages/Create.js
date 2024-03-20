import React, { useState } from 'react';
import { Box, TextField, Button, Grid, styled } from '@mui/material';

const Component = styled(Box)({
  width: '80%',
  margin: '50px auto',
});

const Create = () => {
  const [formData, setFormData] = useState({
    name: '',
    reg: '',
    roll: '',
    year: '',
    dept: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleAdd = () => {
    const formattedData = {
        body: JSON.stringify(formData) 
    };
  
    console.log(formattedData);
  
    fetch('https://x4vpu1ts34.execute-api.ap-south-1.amazonaws.com/Dev/addStudent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formattedData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      setFormData({
        name: '',
        reg: '',
        roll: '',
        year: '',
        dept: ''
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <Component>
      <h1 style={{ textAlign: 'center' }}>Add Student</h1>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <TextField fullWidth id="name" label="Name" variant="filled" value={formData.name} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth id="reg" label="Register No" variant="filled" value={formData.reg} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth id="roll" label="Roll No" variant="filled" value={formData.roll} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth id="year" label="Year" variant="filled" value={formData.year} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth id="dept" label="Dept" variant="filled" value={formData.dept} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleAdd}>Add</Button>
        </Grid>
      </Grid>
    </Component>
  );
};

export default Create;
