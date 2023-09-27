import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GitHubIcon from '@mui/icons-material/GitHub';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [drawer, setDrawer] = React.useState(false)

  const handleClick = () => {
    setDrawer(!drawer)
  }

  return (
    <>
      <div className='navbar'>
        <div className='navigation'>
          <Navigation />
        </div>
        <NavLink to="https://github.com/rohandagale28" target='_blank'>
          <div className='navbar-github'>
            <GitHubIcon />
          </div>
        </NavLink>
        {drawer === true ? (
          <>
            <div className="drawer" onClick={handleClick}>
              <Navigation />
            </div>
          </>
        ) : (
          <>
            <div className='navbar-option' onClick={handleClick}>
              <MoreVertIcon />
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Navbar