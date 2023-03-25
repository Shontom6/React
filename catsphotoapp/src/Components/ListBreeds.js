import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ListBreeds(props) {
  const [breed, setBreed] = React.useState("");

  const handleChange = (event) => {
    setBreed(event.target.value);
    props.setSelectedBreed(event.target.value)
  };

  return (
    <Box sx={{ maxWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Breed</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={breed}
          label="Breed"
          onChange={handleChange}
        >
          {props.breedsList.map((breed) => (
            <MenuItem value={breed.name}>{breed.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
