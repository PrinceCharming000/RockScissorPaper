import React, { useState, useEffect } from 'react';

import {
  Box,
  Button
} from '@mui/material';
import { WeaponButtonComponent } from '../../../common';
import { WeaponViewStyle } from './index.style';
import { WEAPON } from '../../../../constants';

type WeaponViewProps = {
  setWeapon: Function
}

export const WeaponView: React.FC<WeaponViewProps> = ({
  setWeapon
}) => {

  const [weapon, setCurrentWeapon] = useState<number>(0);

  const weaponClicked = () => {
    setWeapon(weapon);
    setCurrentWeapon(0);
  }
  
  return (
    <WeaponViewStyle>
      <Box className="weapons-container">
        <WeaponButtonComponent weapon="rock" active={ weapon === WEAPON.ROCK } weaponIndex={ WEAPON.ROCK } setWeapon={ setCurrentWeapon } />
        <WeaponButtonComponent weapon="paper" active={ weapon === WEAPON.PAPER } weaponIndex={ WEAPON.PAPER } setWeapon={ setCurrentWeapon } />
        <WeaponButtonComponent weapon="scissors" active={ weapon === WEAPON.SCISSORS } weaponIndex={ WEAPON.SCISSORS } setWeapon={ setCurrentWeapon } />
      </Box>
      <Box className="confirm-container">
        <Button className="confirm-button button color-white size-regular" onClick={ weaponClicked} disabled={ weapon === 0 } > Confirm </Button>
      </Box>
    </WeaponViewStyle>
  )
};