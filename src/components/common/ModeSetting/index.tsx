import React from 'react';

import {
  Box,
  Typography
} from '@mui/material';
import { ModeSettingComponentStyle } from './index.style';

type ModeSettingComponentProps = {
  player1: string,
  player2: string,
  settingMode: Function
}

export const ModeSettingComponent: React.FC<ModeSettingComponentProps> = ({
  player1,
  player2,
  settingMode
}) => {

  return (
    <ModeSettingComponentStyle>
      <Box className="mode-show" onClick={() => settingMode(true)}>
        <Typography className="text text-white font-big"> { player1 } </Typography>
        <Typography className="text text-red font-regular gaps"> VS </Typography>
        <Typography className="text text-white font-big gaps"> { player2 } </Typography>
      </Box>
    </ModeSettingComponentStyle>
  )
};