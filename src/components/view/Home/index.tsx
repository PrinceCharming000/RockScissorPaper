import React from 'react';

import { Link } from 'react-router-dom';

import {
  Box
} from '@mui/material';
import { LogoComponent } from '../../common';

import { HomeViewStyle } from './index.style';
import { PATH } from '../../../constants';

export const HomeView = () => {
  return (
    <HomeViewStyle>
      <Box className="main-container">
        <LogoComponent />
        <br />
        <br />
        <br />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link className="link" to={ PATH.PLAY }> { "Let's Play" } </Link>
        </Box>
      </Box>
    </HomeViewStyle>
  )
};