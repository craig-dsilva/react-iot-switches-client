import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const Switches = () => {
  const [s1, sets1] = useState(false);
  const [s2, sets2] = useState(false);
  const [s3, sets3] = useState(false);
  const [s4, sets4] = useState(false);

  return (
    <div className="switches">
      <FormControlLabel
        control={<Switch checked={s1} onChange={() => sets1(!s1)} />}
        label="Switch 1"
        labelPlacement="start"
      />
      <FormControlLabel
        control={<Switch checked={s2} onChange={() => sets2(!s2)} />}
        label="Switch 2"
        labelPlacement="start"
      />
      <FormControlLabel
        control={<Switch checked={s3} onChange={() => sets3(!s3)} />}
        label="Switch 3"
        labelPlacement="start"
      />
      <FormControlLabel
        control={<Switch checked={s4} onChange={() => sets4(!s4)} />}
        label="Switch 4"
        labelPlacement="start"
      />
    </div>
  );
};

export default Switches;
