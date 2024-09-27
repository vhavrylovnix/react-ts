import React, {lazy, Suspense, useState} from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import {Box, CircularProgress} from "@mui/material";
import Layout from "./components/Layout/Layout.tsx";

const MainPage = React.lazy(() => import('./pages/MainPage/MainPage'));
const TimeLinePage = React.lazy(() => import('./pages/TimeLinePage/TimeLinePage.tsx'));
function App() {

  return (
      <Box>
          <Layout>
              <Suspense fallback={<Box sx={{
                  display: 'flex',
                  width: '100%',
                  height: '80vh',
                  justifyContent: 'center',
                  alignItems: 'center'
              }}> <CircularProgress size={100} /> </Box>}>
                  <Routes>
                      <Route element={<MainPage />} path="/" />
                      <Route element={<TimeLinePage />} path="/timeline" />
                      <Route element={<MainPage />} path="*" exact={true} />
                  </Routes>
              </Suspense>
          </Layout>

      </Box>

  )
}

export default App
