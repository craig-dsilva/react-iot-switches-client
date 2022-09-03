import React, { useState } from 'react';
import { Socket } from 'socket.io-client';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

interface SwitchesInterface {
  socket: Socket;
}

interface SwitchStateInterface {
  id: number;
  switchNumber: number;
  switchName: number;
  switchState: boolean;
}

const Switches: React.FC<SwitchesInterface> = ({ socket }) => {
  const [switchState, setSwitchState] = useState<SwitchStateInterface[]>([]);

  // Gets all the switches states
  socket.on('state', (data) => {
    setSwitchState(data);
  })

  // Toggles the switch/relay
  const relayHandler = (id: number) => {
    const copyOfSwitchState = [...switchState];
    copyOfSwitchState[id].switchState = !copyOfSwitchState[id].switchState;
    setSwitchState(copyOfSwitchState);
    socket.emit(id.toString(), copyOfSwitchState[id].switchState);
  };

  return (
    <div className="switches">
      {switchState.map((relay) => {
        return (
          <FormControlLabel
          key={relay.id}
            control={
              <Switch
                checked={!relay.switchState}
                onChange={() => relayHandler(relay.id)}
              />
            }
            label={`Switch ${relay.switchNumber}`}
            labelPlacement="start"
          />
        );
      })}
    </div>
  );
};

export default Switches;
