import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import { darkTheme } from './styles';

import { PATH } from './constants';

import {
  HomePage,
  PlayPage
} from './pages';

function App() {
  return (
    <ThemeProvider theme={ darkTheme }>
      <BrowserRouter>
        <Routes>
          <Route path={ PATH.HOME } element={ <HomePage /> }> </Route>
          <Route path={ PATH.PLAY } element={ <PlayPage /> }> </Route>
          <Route path="*" element={ <Navigate to={ PATH.HOME } /> }> </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
