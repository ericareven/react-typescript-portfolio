import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss';
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Projects from "./projects/Projects";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";

// const Resume = "https://docs.google.com/document/d/e/2PACX-1vRx8d3n9todKjzb9Zpo4jyYm6Q-Ebbusm-7phMg224cQteZ8egd0ENClI4SCEz_LVeMiJuO2eHHI7CH/pub"

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode;
      console.log(oppositeOfCurrentDarkMode);
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`);
      setDarkMode(oppositeOfCurrentDarkMode);
   }

   useEffect(() => {
      let detectedDarkMode = localStorage.getItem('darkMode') === 'true';

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode);
      } else {
         localStorage.setItem('darkMode', 'false');
      }
   }, []);

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'} justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home />} />
                  <Route exact path={'/about'} element={<About />} />
                  <Route exact path={'/projects'} element={<Projects />} />
                  {/* <Route element={<Resume />} /> */}
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'} py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                  <p>&copy; 2023</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
}

