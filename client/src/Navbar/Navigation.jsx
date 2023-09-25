import React from 'react'
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <div>
                <NavLink to="/" className="navlink">
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink to="/project" className="navlink" >
                    Project
                </NavLink>
            </div>
            <div>
                <NavLink to="/stack" className="navlink">
                    Stack
                </NavLink>
            </div>
            <div>
                <NavLink to="/connect" className='navlink'>
                    Connect
                </NavLink>
            </div>
            <div>
                <NavLink to="https://granite-iguanodon-d9b.notion.site/Web-Development-bf158079be2f4ec180aa848895055330?pvs=4" className='navlink'>
                    Notion
                </NavLink>
            </div>
        </>
    )
}

export default Navigation