import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();
    const Form = () => {
        navigate("/FormPage");
    }
    return (
        <div>
            <ul>
                <li><a href="#home"><img alt='logo' src={require('./Image/coollogo_com-6777595.png')} /></a></li>
                <li style={{ float: "right" }}><a href=""><Button variant="outline-dark" onClick={Form}>Create Resume</Button></a></li>
            </ul>
            <div className='row1'>
                <div className='center'>
                    <h1 className="h1_text">Build a professional resume for free</h1>
                    <h5>Create your resume easily with our free builder and professional templates.</h5>
                    <Button className='button_margin' variant="primary" onClick={Form}>Create Resume</Button>
                </div>
                <div>
                    <img className='imagesize' alt='home iamge' src={require('./Image/first-screen.png')} />
                </div>
            </div>
        </div>
    )
}
