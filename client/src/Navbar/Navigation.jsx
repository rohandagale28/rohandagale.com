import React from 'react'
import { NavLink } from "react-router-dom";
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import AllInboxRoundedIcon from '@mui/icons-material/AllInboxRounded';
import CancelIcon from '@mui/icons-material/Cancel';


const Navigation = () => {
    return (
        <>
            <div className='navbar-option' style={{ position: "absolute", top: "34px", right: "24px" }}>
                <CancelIcon />
            </div>
            <div>
                <NavLink to="/" className="navlink">
                    <div className='icon-link'>
                        <HomeRoundedIcon />
                    </div>
                    <div className="link">
                        Home
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/project" className="navlink" >
                    <div className='icon-link'>
                        <AllInboxRoundedIcon fontSize='small' />
                    </div>
                    <div className="link">
                        Projects
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/stack" className="navlink">
                    <div className='icon-link'>
                        <LayersRoundedIcon fontSize='small' />
                    </div>
                    <div className="link">
                        Stack
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/connect" className='navlink'>
                    <div className='icon-link'>
                        <ContactsRoundedIcon fontSize='small' />
                    </div>
                    <div className="link">
                        Connect
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink to="https://granite-iguanodon-d9b.notion.site/Web-Development-bf158079be2f4ec180aa848895055330?pvs=4" className='navlink'>
                    <div className='icon-link'>
                        <LaunchRoundedIcon fontSize='small' />
                    </div>
                    <div className="link">
                        Notion
                    </div>
                </NavLink>
            </div>
        </>
    )
}

export default Navigation