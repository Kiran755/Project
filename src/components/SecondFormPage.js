import React from 'react'
import "./CommonFormPageStyle.css";
const SecondFormPage = ({ details, setDetails }) => {
    const HandleStartUpName = (e) => {
        setDetails({ ...details, StartUpName: e.target.value });
    }
    const HandleStartUpType = (e) => {
        setDetails({ ...details, StartUpType: e.target.value });
    }
    const HandleStartUpDesc = (e) => {
        setDetails({ ...details, StartUpDesc: e.target.value });
    }
    return (
        <div className='Form'>
            <div className="personal-details">
                <div className='group'>
                    <span>
                        Start-Up Name:
                    </span>
                    <input type="text" placeholder="Enter Start Up Name" value={details.StartUpName} onChange={(e) => HandleStartUpName(e)}></input>
                </div>
                <div className='group'>
                    <span>
                        Start-Up Type:
                    </span>
                    <input type="text" placeholder="Enter the type of Start-Up" value={details.StartUpType} onChange={(e) => HandleStartUpType(e)}></input>
                </div>
                <div className='group'>
                    <span>
                        Start-Up Description:
                    </span>
                    <textarea rows="30" cols="150" value={details.StartUpDesc} onChange={(e) => HandleStartUpDesc(e)}></textarea>
                </div>
            </div>

        </div>
    )
}

export default SecondFormPage