import React from 'react';

import {
  Typography,
  Box
} from '@mui/material';

import { PlayerStatusComponentStyle } from './index.style';
import { WEAPON } from '../../../constants';

type PlayerStatusComponentProps = {
  name: string,
  weapon: number,
  turn: boolean,
  selected: boolean
};

export const PlayerStatusComponent: React.FC<PlayerStatusComponentProps> = ({
  name,
  weapon,
  turn,
  selected
}) => {
  const getIconName = (index: number) => {
    if (index === WEAPON.ROCK) return "rock";
    else if (index === WEAPON.PAPER) return "paper";
    else if (index === WEAPON.SCISSORS) return "scissors";
    return;
  }

  return (
    <PlayerStatusComponentStyle>
      <Box className={`main-container`}>
        <Typography className="name-typo text color-white"> { name } </Typography>
        <Box className={`weapon color-white ${weapon !== 0 && !selected ? "bg-white": ""} ${turn && !weapon? "border-red": "border-white"}`}> 
          {
            weapon
              ? selected
                ? "!"
                : <img className="icon-img" src={`/assets/${getIconName(weapon)}.svg`} alt="weapon" />
              : "?"
          }
        </Box>        
      </Box>      
    </PlayerStatusComponentStyle>
  )
};