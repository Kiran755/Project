import React from 'react'
import "./CommonFormPageStyle.css";
const FirstFormPage = ({ details, setDetails }) => {
    const HandleFullName = (e) => {
        setDetails({ ...details, FullName: e.target.value });
    }
    const HandleAge = (e) => {
        setDetails({ ...details, Age: e.target.value });
    }
    const HandleEmailId = (e) => {
        setDetails({ ...details, Email_id: e.target.value });
    }
    const HandlePhoneNumber = (e) => {
        setDetails({ ...details, Phone_Number: e.target.value });
    }
    const HandleAddress = (e) => {
        setDetails({ ...details, Address: e.target.value });
    }
    return (
        <div className='Form'>
            <form>
                <div className="personal-details">
                    <div className="group">
                        <span>Full Name : </span>
                        <input type="text" placeholder='Full Name' value={details.FullName} onChange={(e) => { HandleFullName(e) }}></input>
                    </div>
                    <div className="group">
                        <span>Age : </span>
                        <input type="number" value={details.Age} onChange={(e) => HandleAge(e)}></input>
                    </div>
                    <div className="group">
                        <span>Email Id : </span>
                        <input type="email" value={details.Email_id} placeholder="email" onChange={(e) => HandleEmailId(e)} />
                    </div>
                    <div className="group">
                        <span>Phone Number : </span>
                        <input type="number" value={details.Phone_Number} onChange={(e) => HandlePhoneNumber(e)} placeholder="Telephone Number" />
                    </div>
                    <div className="group">
                        <span>Address : </span>
                        <textarea rows="3" col="50" maxlength="200" value={details.Address} onChange={(e) => HandleAddress(e)}></textarea>
                    </div>

                </div>

            </form>





        </div>
    )
}

export default FirstFormPage