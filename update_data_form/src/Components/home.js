import React, { useState } from 'react';
import './home.css'
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { FormAdd, updateForm } from './Reducer/Reducer';

function Home(props) {
    const dispatch = useDispatch();
    const location = useLocation();
    // const data = location.state?.data;
    // const id = location.state?.id;
    const {data, id} = location.state;
    
    console.log('data',data);
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(FormAdd(formData));
        setFormData(initialState);
        alert('Submit');
        navigate(`AboutPage`);
    };
    const initialState =
    {
        firstname: '',
        lastname: '',
        emailaddress: '',
        country: '',
        streetaddress: '',
        city: '',
        region: '',
        postalcode: '',
    }
    console.log('data', data);
    const [formData, setFormData] = useState(data ? data : initialState);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };
    // const handleReset = () => {
    //     setFormData(initialState);
    // }
    const handleUpdateClick = (e) => {
        e.preventDefault();
        dispatch(updateForm(id, formData));
        setFormData(initialState);
        navigate(`AboutPage`);
    };
    
    return (
        <div className="flex justify-center	h-screen items-center	">
            <div className="mt-5 md:col-span-2 md:mt-0 w-2/3" >
                <form>
                    <div className="overflow-hidden shadow sm:rounded-md">
                        <div className="bg-white px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">First name</label>
                                    <input onChange={handleChange} value={formData.firstname} type="text" name="firstname" id="first-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">Last name</label>
                                    <input onChange={handleChange} value={formData.lastname} type="text" name="lastname" id="last-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                </div>

                                <div className="col-span-6 sm:col-span-4">
                                    <label className="block text-sm font-medium text-gray-700">Email address</label>
                                    <input onChange={handleChange} value={formData.emailaddress} type="text" name="emailaddress" id="email-address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">Country</label>
                                    {/* <select onChange={handleChange} value={formData.country} id="country" name="country" ="country-name" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <option>INDIA</option>
                                    </select> */}
                                    <input onChange={handleChange} value={formData.country} type="text" id="country" name="country" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                </div>

                                <div className="col-span-6">
                                    <label className="block text-sm font-medium text-gray-700">Street address</label>
                                    <input onChange={handleChange} value={formData.streetaddress} type="text" name="streetaddress" id="street-address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                </div>

                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">City</label>
                                    <input onChange={handleChange} value={formData.city} type="text" name="city" id="city" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">State / Province</label>
                                    <input onChange={handleChange} value={formData.region} type="text" name="region" id="region" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                                    <input onChange={handleChange} value={formData.postalcode} type="text" name="postalcode" id="postal-code" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            {!data ?
                                <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={handleSubmit}>Save</button>
                                :
                                <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={handleUpdateClick}>Update</button>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Home;
