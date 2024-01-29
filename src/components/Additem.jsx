import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

const Additem = () => {

  

  return (
    <div>
      <h3>Adding Items</h3>
      <TextField id="outlined-basic"label="Item name" variant="outlined"/><br/><br/>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
  <InputLabel id="demo-simple-select-label">Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"

    label="Age"
    
  >
    <MenuItem value={10}>Dog</MenuItem>
    <MenuItem value={20}>Cat</MenuItem>
    <MenuItem value={30}>Bird</MenuItem>
  </Select>
</FormControl><br/><br/>

<FormControl sx={{ m: 1, minWidth: 120 }}>
  <InputLabel id="demo-simple-select-label">SubCategory</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"

    label="Age"
    
  >
    <MenuItem value={10}>Husky</MenuItem>
    <MenuItem value={20}>Himalayan Cat</MenuItem>
    <MenuItem value={30}>Mekavo</MenuItem>
  </Select>
</FormControl><br/><br/>

<TextField id="outlined-basic"label="Remarks" variant="outlined"/><br/><br/>
<TextField id="outlined-basic"label="Certification Details" variant="outlined"/><br/><br/>
<TextField id="outlined-basic"label="Selling Amount" variant="outlined"/><br/><br/>
<TextField id="outlined-basic"label="Image /Video" variant="outlined"/><br/><br/>
<Button variant="contained">Submit</Button>
    </div>
  )
}

export default Additem
