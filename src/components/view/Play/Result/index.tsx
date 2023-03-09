import React from 'react';

import {
  Grid
} from '@mui/material';
import { PlayerStatusComponent } from '../../../common';
import { ResultViewStyle } from './index.style';
import { TURN, MODE } from '../../../../constants';

type ResultViewProps = {
  player1Weapon: number,
  player2Weapon: number,
  turn: number,
  mode: number
};

export const ResultView: React.FC<ResultViewProps> = ({
  player1Weapon,
  player2Weapon,
  turn,
  mode
}) => {
  return (
    <ResultViewStyle>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} xs={12}>
          <PlayerStatusComponent
            name={`PLAYER${ mode === MODE.PERSON_PERSON? "1": "" }`}
            weapon={ player1Weapon }
            turn={ turn === TURN.PLAYER1 }
            selected={ turn === TURN.PLAYER2 && mode === MODE.PERSON_PERSON }
          />
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <PlayerStatusComponent
            name={`${ mode === MODE.PERSON_PERSON? "PLAYER2": "COMPUTER" }`}
            weapon={ player2Weapon }
            turn={ turn === TURN.PLAYER2 }
            selected={ false }
          />
        </Grid>
      </Grid>
    </ResultViewStyle>
  )
};