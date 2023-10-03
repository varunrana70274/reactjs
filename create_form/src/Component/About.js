import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

export default function About({ props }) {
    const navigate = useNavigate();
    const Home = () => {
        navigate("/");
    }
    return (
        <>
            <p>{props?.newRecod?.PlaceFrom}</p>
            <button onClick={Home}>
                Back to Home
            </button>
        </>
    )
}



