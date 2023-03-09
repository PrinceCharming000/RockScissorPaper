import React from 'react';

import {
  Box,
  Grid
} from '@mui/material';
import { ModeButtonComponentStyle } from './index.style';

type ModeButtonComponentProps = {
  player1: React.ReactElement,
  player2: React.ReactElement,
  active: boolean,
  modeIndex: number,
  setActive: Function
}

export const ModeButtonComponent: React.FC<ModeButtonComponentProps> = ({
  player1,
  player2,
  active,
  modeIndex,
  setActive
}) => {
  return (
    <ModeButtonComponentStyle>
      <Box className={`mode-button ${active? "active": ""}`} onClick={() => setActive(modeIndex)}>
        <Grid container spacing={2}>
          <Grid item className="grid-item" lg={5} md={5} xs={5}>
            { player1 }
          </Grid>
          <Grid item className="grid-item" lg={2} md={2} xs={2}>
            { ":" }
          </Grid>
          <Grid item className="grid-item" lg={5} md={5} xs={5}>
            { player2 }
          </Grid>
        </Grid>
      </Box>
    </ModeButtonComponentStyle>
  )
};