import React from 'react'
import Background from '../HomePage/Background'
import discord from '../assets/discord.png'

const Connect = () => {
  return (
    <>
      <div className="contact">
        <div className="title">connect with me</div>
        <a href="mailto:workspacex28@gmail.com">
          <div className="information">
            <div className="first">
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.94 3.155H5.06C4.24844 3.155 3.4701 3.47739 2.89624 4.05125C2.32238 4.62512 2 5.40343 2 6.215V17.775C2 18.5875 2.32205 19.3668 2.89563 19.9423C3.46921 20.5177 4.24752 20.8424 5.06 20.845H18.94C19.7525 20.8424 20.5308 20.5177 21.1044 19.9423C21.6779 19.3668 22 18.5875 22 17.775V6.215C21.9974 5.40424 21.6741 4.62746 21.1008 4.05417C20.5275 3.48088 19.7508 3.15764 18.94 3.155ZM12 11.155L3.58002 5.765C3.6843 5.45457 3.88299 5.18454 4.14838 4.99268C4.41376 4.80081 4.73253 4.69673 5.06 4.69501H18.94C19.2924 4.69684 19.6339 4.81717 19.9096 5.03665C20.1853 5.25613 20.3792 5.56199 20.46 5.905L12 11.155Z" fill="currentColor" />
                </svg>
              </div>
              <div>
                workspacex28@gmail.com
              </div>
            </div>
          </div>
        </a>
        <a href="https://discord.gg/et3h7BczrH">
          <div className="information">
            <div className="first">
              <div>
                <img src={discord} alt="" width="24" />
              </div>
              <div>
                Join Discord server
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className='section-2'>
        <div className="scrollable">
          {Array(400).fill().map((value, index) => {
            return (
              <React.Fragment key={index}>
                <Background />
              </React.Fragment>
            )
          })}
        </div>
        <div className="overlap"></div>
      </div>
    </>
  )
}

export default Connect