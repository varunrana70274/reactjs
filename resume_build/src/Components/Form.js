import React, { useState } from 'react'
import Template from './Template'
import "./Form.css"
export const Form = () => {
    const initialState = {
        Name: '',
        Email: '',
        Phone: '',
    }
    const [data, setData] = useState(initialState);
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value.trim()
        });
    };
    return (
        <div className="form">
            <div style={{width: '100%'}}>
                <Form>
                    <input type="text" name="fname" /><br />
                    <input type="text" name="lname" /><br />
                    <button >Submit</button>
                </Form>
            </div>
            <div><Template /></div>
        </div>
    )
}
