import React from 'react'
import '../../GB/GB.css'
import Card from '../../Card/card'
import data from './finance'

export default function page() {
    return (

        <>
            <h1>Finance Heads</h1>
            <div className="members_container">
                {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} imageUrl={data.imageUrl} facebookLink={data.facebookLink}
                        email={data.email} linkedinLink={data.linkedinLink} />
                ))}
            </div>
        </>

    )
}
