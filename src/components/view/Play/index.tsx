import React, { useState, useEffect, useMemo } from 'react';

import { ResultView } from './Result';
import { WeaponView } from './Weapon';

import {
  Box,
  Button
} from '@mui/material';
import { ModeSettingComponent, ModeSettingModal, StatusModal } from '../../common';
import { PlayViewStyle } from './index.style';
import { MODE, WIN_CONDITION, TURN } from '../../../constants';

export const PlayView = () => {

  const [isModeSetting, setIsModeSetting] = useState<boolean>(false);
  const [isShowStatus, setIsShowStatus] = useState<boolean>(false);
  const [currentMode, setCurrentMode] = useState<number>(MODE.PERSON_COMPUTER);
  const [player1Weapon, setPlayer1Weapon] = useState<number>(0);
  const [player2Weapon, setPlayer2Weapon] = useState<number>(0);
  const [turn, setTurn] = useState<number>(1);

  const playMatch = () => {
    setIsModeSetting(false);
    setPlayer1Weapon(0);
    setPlayer2Weapon(0);
    setTurn(TURN.PLAYER1);
    setIsShowStatus(false);
    console.log("reset values")
  }

  const confirmMode = (mode: number) => {
    setCurrentMode(mode);
    setIsModeSetting(false);
    playMatch();
  }

  const confirmWeapon = (weapon: number) => {
    if (turn === TURN.PLAYER1) {
      setPlayer1Weapon(weapon);
      setTurn(TURN.PLAYER2);
    } else if (turn === TURN.PLAYER2) {
      setPlayer2Weapon(weapon);
      setTurn(TURN.PLAYER1);
    }
  }

  const winner = useMemo((): number => {
    if (player2Weapon !== 0) {
      setIsShowStatus(true);
      if (player1Weapon === player2Weapon) {
        return 3;
      }
      if (WIN_CONDITION[player1Weapon] === player2Weapon) {
        return 1;
      }
      return 2;
    }
    return 0;
  }, [player2Weapon]);

  useEffect(() => {
    if (turn === TURN.PLAYER2 && currentMode === MODE.PERSON_COMPUTER) {
      const randomWeapon = Math.floor((Math.random() * 10 + 1)) % 3 + 1;
      confirmWeapon(randomWeapon);
    }
  }, [turn])

  return (
    <PlayViewStyle>
      <Box className="main-container">
        <ModeSettingComponent
          player1={ "HUMAN" }
          player2={ currentMode === 2? "HUMAN": "COMPUTER" }
          settingMode={ setIsModeSetting }
        />
        <br />
        <ResultView player1Weapon={ player1Weapon } player2Weapon={ player2Weapon } turn={turn} mode={ currentMode } />
        <br />
        <br />
        <WeaponView setWeapon={ confirmWeapon } />
      </Box>

      {
        isModeSetting &&
          <ModeSettingModal closeModal={ setIsModeSetting } currentMode={ currentMode } setMode={ confirmMode } />
      }

      {
        isShowStatus &&
          <StatusModal status={ winner } playMatch={ playMatch } mode={ currentMode } />
      }
    </PlayViewStyle>
  )
}