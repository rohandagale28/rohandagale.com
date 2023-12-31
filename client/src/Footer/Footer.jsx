import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import resume from '../assets/Rohan_dagale_FD.pdf'

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
                <div className="resume-footer">
                    <a href={resume} className='resume-link'
                        download="Resume_RohanDagale"
                        target="_blank"
                        rel="noopener noreferrer">
                        <div>
                            <span>Resume</span>
                        </div>
                        <div>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0748 7.09999C19.8854 6.63153 19.603 6.20631 19.2447 5.84999L16.5247 3.12999C16.1661 2.77203 15.7416 2.48679 15.2747 2.28999C14.8113 2.10001 14.3156 2.00153 13.8148 2H7.47467C6.45786 2.00525 5.4842 2.4115 4.7652 3.13051C4.04619 3.84951 3.63996 4.82318 3.6347 5.84V18.17C3.63735 19.1867 4.04315 20.1608 4.763 20.8788C5.48285 21.5968 6.45797 22 7.47467 22H16.5347C17.0379 22.001 17.5363 21.9026 18.0014 21.7104C18.4665 21.5182 18.889 21.236 19.2447 20.88C19.6034 20.5263 19.8874 20.1042 20.0798 19.6387C20.2722 19.1731 20.369 18.6737 20.3647 18.17V8.56999C20.374 8.06491 20.2752 7.56369 20.0748 7.09999ZM15.8148 15.1L13.1547 17.77C13.0036 17.9213 12.8232 18.0404 12.6247 18.12C12.5025 18.1684 12.3749 18.202 12.2447 18.22C12.0939 18.2598 11.9355 18.2598 11.7847 18.22C11.6545 18.202 11.5269 18.1684 11.4047 18.12C11.2037 18.0404 11.0227 17.9175 10.8747 17.76L8.21466 15.1C8.05083 14.9087 7.96532 14.6626 7.97504 14.4109C7.98476 14.1593 8.08906 13.9205 8.26715 13.7424C8.44525 13.5643 8.68393 13.46 8.93561 13.4503C9.18728 13.4406 9.43339 13.5262 9.62469 13.69L11.0247 15.09V10.47C11.0247 10.2048 11.13 9.95041 11.3176 9.76288C11.5051 9.57534 11.7595 9.46999 12.0247 9.46999C12.2899 9.46999 12.5443 9.57534 12.7319 9.76288C12.9194 9.95041 13.0247 10.2048 13.0247 10.47V15.09L14.4247 13.69C14.616 13.5262 14.862 13.4406 15.1137 13.4503C15.3654 13.46 15.6042 13.5643 15.7823 13.7424C15.9604 13.9205 16.0647 14.1593 16.0744 14.4109C16.0841 14.6626 15.9985 14.9087 15.8347 15.1H15.8148ZM16.0247 8.25999C15.511 8.25737 15.0191 8.05213 14.6558 7.68887C14.2926 7.32562 14.0873 6.8337 14.0847 6.31999V3.48999C14.1512 3.48515 14.2182 3.48515 14.2847 3.48999C14.4286 3.51951 14.5692 3.56305 14.7047 3.62C14.9881 3.74011 15.2461 3.91319 15.4647 4.12999L18.1848 6.84999C18.4015 7.06858 18.5747 7.32652 18.6948 7.60999C18.7517 7.74541 18.7952 7.88609 18.8248 8.03V8.23L16.0247 8.25999Z" fill="currentColor" />
                            </svg>
                        </div>
                    </a>
                </div>
            </div >
        </>
    )
}

