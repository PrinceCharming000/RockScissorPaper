import React, { useState } from 'react';

import {
  Box,
  Typography,
  Divider,
  Button,
  Grid
} from '@mui/material';
import { ModeButtonComponent } from '../ModeButton';
import CloseIcon from '@mui/icons-material/Close';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { ModeSettingModalStyle } from './index.style';
import { MODE } from '../../../constants';

type ModeSettingModalProps = {
  closeModal: Function,
  currentMode: number,
  setMode: Function
}

export const ModeSettingModal: React.FC<ModeSettingModalProps> = ({
  closeModal,
  currentMode,
  setMode
}) => {

  const [mode, setMatchMode] = useState<number>(currentMode);

  return (
    <ModeSettingModalStyle>
      <Box className="modal">
        <Box className="modal-header">
          <Typography className="text color-white"> Change Mode </Typography>
          <CloseIcon className="color-white cursor-pointer" onClick={() => closeModal(false)} />
        </Box>
        <br />
        <Divider />
        <br />
        <Box className="modal-content">
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} xs={12}>
              <ModeButtonComponent
                player1={ <PermIdentityIcon className="color-white mode-icon" /> }
                player2={ <ImportantDevicesIcon className="color-white mode-icon" /> }
                active={ mode === 1? true: false }
                modeIndex={ MODE.PERSON_COMPUTER }
                setActive={ setMatchMode }
              />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <ModeButtonComponent
                player1={ <PermIdentityIcon className="color-white mode-icon" /> }
                player2={ <PermIdentityIcon className="color-white mode-icon" /> }
                active={ mode === 2? true: false }
                modeIndex={ MODE.PERSON_PERSON }
                setActive={ setMatchMode }
              />
            </Grid>
          </Grid>
        </Box>
        <br />
        <Box className="modal-footer">
          <Button
            className="button confirm-button bg-primary40 color-white"
            onClick={() => setMode(mode)}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </ModeSettingModalStyle>
  )
};