import React from 'react'

const StartUpItem = ({ startupName, startUpType, startupDesc }) => {
    return (
        <>
            <div className="box">
                <h1>{startupName}</h1>
                <h3>{startUpType}</h3>
                <div>
                    {startupDesc}
                </div>
            </div>
        </>
    )
}

export default StartUpItem