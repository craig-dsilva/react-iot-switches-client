import React, { useState } from 'react';
import { Socket } from 'socket.io-client';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

interface SwitchInterface {
  socket: Socket;
}

const Switches: React.FC<SwitchInterface> = ({socket}) => {
  const [s1, sets1] = useState(false);
  const [s2, sets2] = useState(false);
  const [s3, sets3] = useState(false);
  const [s4, sets4] = useState(false);

  const s1Handler = () => {
    sets1(!s1)
    socket.emit('s1', s1)
  }

  const s2Handler = () => {
    sets2(!s2)
    socket.emit('s2', s2)
  }

  const s3Handler = () => {
    sets3(!s3)
    socket.emit('s3', s3)
  }

  return (
    <div className="switches">
      <FormControlLabel
        control={<Switch checked={s1} onChange={s1Handler} />}
        label="Switch 1"
        labelPlacement="start"
      />
      <FormControlLabel
        control={<Switch checked={s2} onChange={s2Handler} />}
        label="Switch 2"
        labelPlacement="start"
      />
      <FormControlLabel
        control={<Switch checked={s3} onChange={s3Handler} />}
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
