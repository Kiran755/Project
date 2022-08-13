
import React from 'react'
import StartUpItem from './StartUpItem'
import "./StartUps.css"
import { db } from './firebase';
import { collection, doc, getDocs } from "firebase/firestore";
import { useState } from 'react';
import { useEffect } from 'react';
const StartUpPage = () => {
    let [arr, setarr] = useState("");
    const HandleData = (data) => {
        return <StartUpItem startupName={data.FullName} />
    }
    const colref = collection(db, "startups");
    getDocs(colref).then((docsnap) => {
        docsnap.docs.forEach((doc) => {
            HandleData(doc.data());
        })
        console.log(arr);

    }).catch((err) => {
        console.log(err.message);
    })
    return (
        <div className='First_Box'>
            <HandleData />
        </div>
    )
}

export default StartUpPage