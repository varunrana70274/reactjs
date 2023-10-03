import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import "./css/Home.css"
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <div>
                <ul className='ul'>
                    <li><a href="/"><img alt='logo' src={require('./Image/coollogo_com-6777595.png')} /></a></li>
                    {/* <p style={{ float: "right" }}><Link style={{backgroundColor:'white',paddingTop:10}} to="/Form">Create Resume</Link></p> */}
                </ul>
                <div className='row1'>
                    <div className='center'>
                        <h1 className="h1_text">Build a professional resume for free</h1>
                        <h5>Create your resume easily with our free builder and professional templates.</h5>
                        <Link style={{padding:10,backgroundColor:"lightblue",borderRadius:10,marginTop:20}} to="/Form">Create Resume</Link>
                    </div>
                    <div>
                        <img className='imagesize' alt='home iamge' src={require('./Image/first-screen.png')} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
