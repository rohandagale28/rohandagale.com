import React from 'react'
import { Link } from "react-router-dom"

const Card = (props) => {

    return (
        <>
            <Link to={props?.link} target='_blank' className='Link-to'>
                <div className="card">
                    <div className="title">
                        <div>
                            {props?.title}
                        </div>
                        <div className='image-container'>
                            {props?.icons.map((item) => {
                                return (
                                    <React.Fragment key={item}>
                                        <img src={item} className='image' />
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                    <div className="description">
                        {props.description.length > 250 ? props?.description.slice(0, 250) + "..." : props?.description}
                    </div>
                </div >
            </Link>
        </>
    )
}

export default Card