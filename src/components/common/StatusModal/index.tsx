import React, { useMemo } from 'react';

import {
  Typography,
  Button
} from '@mui/material';
import { StatusModalStyle } from './index.style';
import { MODE } from '../../../constants';

type StatusModalProps = {
  status: number,
  playMatch: Function,
  mode: number
};

export const StatusModal: React.FC<StatusModalProps> = ({
  status,
  playMatch,
  mode
}) => {
  
  const result = useMemo((): string => {
    if (status === 1) return `Player${ mode === MODE.PERSON_PERSON? "1": "" } Wins!`;
    else if (status === 2) return `${ mode === MODE.PERSON_PERSON? "PLAYER2": "COMPUTER" } Wins!`;
    else if (status === 3) return "Tie!";
    return "";
  }, [status]);

  return (
    <StatusModalStyle>
      <Typography className="text color-red size-extra text-shadow"> { result } </Typography>
      <Button className="button button-size" onClick={() => playMatch()}> Click to play again... </Button>
    </StatusModalStyle>
  )
};