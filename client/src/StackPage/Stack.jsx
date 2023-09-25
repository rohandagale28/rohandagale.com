import React, { useContext } from 'react'
import { Card } from './Card'
import Skeleton from '../Components/Skeleton'
import { DataContext } from '../context/AccountProvider'

const Stack = () => {
    document.title = "Rohan Dagale - Stack"

    const { stack, loading } = useContext(DataContext)

    return (
        <React.Fragment>
            <div className="stack">
                <div className='title'>Programing Languages, Frameworks & Tools</div>
                {loading === true ? <>
                    <Skeleton />
                </> : <>
                    {stack && stack.map((item) => {
                        return (
                            <React.Fragment key={item._id}>
                                <Card image={item.image} title={item.title} description={item.description} link={item.link} />
                            </React.Fragment>
                        )
                    })}
                </>
                }
            </div>
        </React.Fragment>
    )
}

export default Stack