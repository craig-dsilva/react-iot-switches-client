import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const Switches = () => {
  return (
    <div className="switches">
      <FormControlLabel control={<Switch />} label="Switch 1" labelPlacement='start' />
      <FormControlLabel control={<Switch />} label="Switch 2" labelPlacement='start' />
      <FormControlLabel control={<Switch />} label="Switch 3" labelPlacement='start' />
      <FormControlLabel control={<Switch />} label="Switch 4" labelPlacement='start' />
    </div>
  );
};

export default Switches;
