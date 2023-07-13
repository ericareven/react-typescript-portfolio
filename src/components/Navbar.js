import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { info } from "../info/Info";

const links = [
  {
    name: 'Home',
    to: '/',
    active: 'home'
  },
  {
    name: 'About Me',
    to: '/about',
    active: 'about'
  },
  // {
  //     name: info.initials,
  //     type: 'initials',
  //     to: '/',
  //     active: 'home'
  // },
  {
    name: 'Projects',
    to: '/projects',
    active: 'projects'
  },
  {
    name: 'Resume',
    to: 'https://docs.google.com/document/d/e/2PACX-1vRx8d3n9todKjzb9Zpo4jyYm6Q-Ebbusm-7phMg224cQteZ8egd0ENClI4SCEz_LVeMiJuO2eHHI7CH/pub',
    active: 'resume',
    rel: 'noopener noreferrer',
    target: '_blank'
  }
];

export default function Navbar({ darkMode, handleClick }) {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

  return (
    <Box component={'nav'} width={'100%'}>
      <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
        gap={{ xs: '2rem', md: '8rem' }}
        textTransform={'uppercase'} fontSize={'1.2rem'}>
        {links.map((link, index) => (
          <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
            sx={{ borderImageSource: info.gradient }}>
            {link.to.startsWith('http') ? (
              <a href={link.to} target="_blank" rel="noopener noreferrer" onClick={() => setActive(link.active)} className={Style.link}>
                {!link.type && <p style={{ padding: '0.5rem 0' }}>{link.name}</p>}
                {link.type && <h1>{link.name}</h1>}
              </a>
            ) : (
              <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                {!link.type && <p style={{ padding: '0.5rem 0' }}>{link.name}</p>}
                {link.type && <h1>{link.name}</h1>}
              </Link>
            )}
          </Box>
        ))}
        <li>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>
    </Box>
  );
}
