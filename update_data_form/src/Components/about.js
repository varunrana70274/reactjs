import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteform } from './Reducer/Reducer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function About() {
    let navigate = useNavigate();
    const Form = useSelector(state => state.Forms.FormDetails);
    const dispatch = useDispatch();

    const handleDelete = (index) => {
        dispatch(deleteform(index));
    };
    const handleEdit = (index, item) => {
        navigate('/', { state: { data: item, id: index } });
    };
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell align="center">Last Name</TableCell>
                        <TableCell align="center">Email Address</TableCell>
                        <TableCell align="center">Country</TableCell>
                        <TableCell align="center">Street Address</TableCell>
                        <TableCell align="center">City</TableCell>
                        <TableCell align="center">Region</TableCell>
                        <TableCell align="center">Postal Code</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Form?.map((item, index) => (
                        <TableRow
                            key={item.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row"> {item.firstname}</TableCell>
                            <TableCell align="center">{item.lastname}</TableCell>
                            <TableCell align="center">{item.emailaddress}</TableCell>
                            <TableCell align="center">{item.country}</TableCell>
                            <TableCell align="center">{item.streetaddress}</TableCell>
                            <TableCell align="center">{item.city}</TableCell>
                            <TableCell align="center">{item.region}</TableCell>
                            <TableCell align="center">{item.postalcode}</TableCell>
                            <button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={() => handleEdit(index, item)}>
                                Edit
                            </button>
                            <button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={() => handleDelete(index)}>
                                Delete
                            </button>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default About;
