import React from 'react'
import SectionOne from './SectionOne'
import Background from './Background'

export const Home = () => {
    document.title = "Rohan Dagale"

    return (
        <React.Fragment>
            <div className="home">
                <div className='section-1'>
                    <SectionOne />
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
                </div>
            </div>
        </React.Fragment>
    )
}
