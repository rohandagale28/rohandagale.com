import React from 'react'

const Card = (props) => {

    return (
        <>
            <a href={props?.link} target='_blank' className='Link-to'>
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
            </a>
        </>
    )
}

export default Card