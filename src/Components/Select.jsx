import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { display } from '@mui/system';

 function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel
            sx={{
         
            margin:7,
            
          }}
         id="demo-simple-select-label">Car</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{
            width:280,
            margin:7,
            
          }}
        >
          <MenuItem value={10}>Car</MenuItem>
          <MenuItem value={20}>Bus</MenuItem>
          <MenuItem value={30}>Van</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

function BasicSelect2() {
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel
              sx={{
    
              margin:2,
              
            }}
           id="demo-simple-select-label">Choice Location</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            sx={{
              width:280,
              margin:2,
            //   display:"inline"
              
            }}
          >
            <MenuItem value={10}>Karachi</MenuItem>
            <MenuItem value={20}>Lahore</MenuItem>
            <MenuItem value={30}>Pindi</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }
export {BasicSelect,BasicSelect2} ;