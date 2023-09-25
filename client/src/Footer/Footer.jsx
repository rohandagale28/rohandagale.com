import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="section-1">
                    <ul>
                        <li><a href="https://www.instagram.com/rohan_dagle28/" target='_blank'><InstagramIcon sx={{ fontSize: "1.4rem" }} /></a></li>
                        <li><a href="https://github.com/rohandagale28" target='_blank'><GitHubIcon sx={{ fontSize: "1.4rem" }} /></a></li>
                        <li><a href="https://www.linkedin.com/in/rohan-dagale-7b67461b3/" target='_blank'><LinkedInIcon sx={{ fontSize: "1.4rem" }} /></a></li>
                        <li><a href="https://twitter.com/RohanDagal39605" target='_blank'><img src="https://i.postimg.cc/T3db8k5w/twitter.png" width="16" style={{ paddingTop: "4px", color: "#000" }} /></a></li>
                    </ul>
                </div>
            </div >
        </>
    )
}

