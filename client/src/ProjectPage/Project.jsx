import React, { useContext } from 'react'
import Card from './Card'
import Skeleton from '../Components/Skeleton'
import { DataContext } from '../context/AccountProvider'

const Project = () => {
    document.title = "Rohan Dagale - Project"

    const { project, loading } = useContext(DataContext)

    React.useEffect(() => {
    }, [])
    return (
        <React.Fragment>
            <div className="project">
                <div className='title-header'>Recent Projects</div>
                {loading === true ? <>
                    <Skeleton />
                </> :
                    <>
                        {project && project.map((item) => {
                            return (
                                <React.Fragment key={item._id}>
                                    <Card title={item.title} description={item.description} icons={item.icons} link={item.link} />
                                </React.Fragment>
                            )
                        })}
                    </>}
            </div>
        </React.Fragment>
    )
}

export default Project