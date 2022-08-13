import React from 'react'
import FirstFormPage from './FirstFormPage'
import SecondFormPage from './SecondFormPage'
import ThirdFormPage from './ThirdFormPage'
import { useState } from "react";
import { db } from './firebase';
import { addDoc, getDoc, doc, collection } from "firebase/firestore";
const MultiFormPage = (props) => {

    const [FirstFormDetails, setFirstFormDetails] = useState({ FullName: "", Age: 0, Email_id: "", Phone_Number: 0, Address: "" });
    const [SecondFormDetails, setSecondFormDetails] = useState({ StartUpName: "", StartUpType: "", StartUpDesc: "" });
    const [ThirdFormDetails, setThirdFormDetails] = useState({ RazorPayName: "", RazorPayId: "" });


    const HandleClick = () => {
        const FullName = FirstFormDetails.FullName;
        const Age = FirstFormDetails.Age;
        const Email_id = FirstFormDetails.Email_id;
        const Phone_Number = FirstFormDetails.Phone_Number;
        const Address = FirstFormDetails.Address;
        const StartUpname = SecondFormDetails.StartUpName;
        const StartUpType = SecondFormDetails.StartUpType;
        const StartUpDesc = SecondFormDetails.StartUpDesc;
        const RazorPayName = ThirdFormDetails.RazorPayName;
        const RazorPayId = ThirdFormDetails.RazorPayId;


        addDoc(collection(db, "startups"), {
            FullName: FullName,
            Age: Age,
            Email_id: Email_id,
            Phone_Number: Phone_Number,
            Address: Address,
            StartUpName: StartUpname,
            StartUpType: StartUpType,
            StartUpDesc: StartUpDesc,
            RazorPayName: RazorPayName,
            RazorPayId: RazorPayId
        }).then(() => {
            alert("data added successfully");
            setFirstFormDetails({
                FullName: "",
                Age: 0,
                Email_id: "",
                Phone_Number: 0,
                Address: ""
            })
            setSecondFormDetails({
                StartUpName: "",
                StartUpType: "",
                StartUpDesc: ""
            })
            setThirdFormDetails({
                RazorPayName: "",
                RazorPayId: ""
            })

        }).catch((err) => {
            alert(err.message);
        })

    }
    switch (props.index) {
        case 1:
            return (
                <>
                    <FirstFormPage details={FirstFormDetails} setDetails={setFirstFormDetails} />
                </>
            )
        case 2:
            return (
                <>
                    <SecondFormPage details={SecondFormDetails} setDetails={setSecondFormDetails} />
                </>
            )
        case 3:
            return (
                <>
                    <ThirdFormPage details={ThirdFormDetails} setDetails={setThirdFormDetails} setPay={HandleClick} />
                </>
            )
    }
}

export default MultiFormPage