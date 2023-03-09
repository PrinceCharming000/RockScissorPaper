import React from 'react';

import {
  Button
} from '@mui/material';
import { WeaponButtonComponentStyle } from './index.style';

type WeaponButtonComponentProps = {
  weapon: string,
  active: boolean,
  weaponIndex: number,
  setWeapon: Function
}

export const WeaponButtonComponent: React.FC<WeaponButtonComponentProps> = ({
  weapon,
  active,
  weaponIndex,
  setWeapon
}) => {
  return (
    <WeaponButtonComponentStyle>
      <Button className={`weapon-button ${active? "active": ""}`} onClick={() => setWeapon(weaponIndex)}>
        <img className="icon-img" src={`/assets/${weapon}.svg`} alt="weapon" />
      </Button>
    </WeaponButtonComponentStyle> 
  )
};