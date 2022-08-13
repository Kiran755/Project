import React from 'react'
import "./CommonFormPageStyle.css";
const ThirdFormPage = ({ details, setDetails, setPay }) => {
    const HandleRazorPay = (e) => {
        setDetails({ ...details, RazorPayName: e.target.value });
    }
    const HandleRazorPayId = (e) => {
        setDetails({ ...details, RazorPayId: e.target.value })
    }
    return (
        <div className='Form'>
            <div className="personal-details">
                <div className="group">
                    <span>Razorpay Name : </span>
                    <input type="text" placeholder="RazorPay name" value={details.RazorPayName} onChange={(e) => HandleRazorPay(e)}></input>
                </div>
                <div className="group">
                    <span>Razorpay Id : </span>
                    <input type="password" placeholder="razorpay Id for donation" value={details.RazorPayId} onChange={(e) => HandleRazorPayId(e)}></input>
                </div>
                <div className='group'>
                    <button onClick={setPay}>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default ThirdFormPage