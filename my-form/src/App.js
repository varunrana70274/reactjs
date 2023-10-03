import { Box, Button, Center, Flex, Input, Spacer, Table, TableContainer, Tbody, Td, Text, Textarea, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteform, FormAdd, updateForm } from './Component/Reducer';

const App = () => {
  const Form = useSelector(state => state.Forms.FormDetails);
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);
  const initialState = {
    Name: '',
    Email: '',
    Phone: '',
    PatientName: '',
    PatientAge: '',
    PrimaryConcern: '',
    AdditionalMessage: '',
  }
  const [data, setData] = useState(initialState);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value.trim()
    });
  };
  const handleReset = () => {
    setData(initialState);
  }
  const handleSubmit = () => {
    dispatch(FormAdd(data));
    setData(initialState);
    alert('Submit');
  };
  const handleDelete = (index) => {
    dispatch(deleteform(index));
  };

  const handleUpdate = (index, data) => {
    setData(data);
    setIsUpdate(true);
    setUpdateIndex(index);
  }
  const handleUpdateClick = () => {
     dispatch(updateForm(updateIndex, data));
     setData(initialState);
     setUpdateIndex(null);
     setIsUpdate(false);
  }
  return (
    <>
      <Center style={styles.container}>
        <div style={styles.section}>
          <Center style={{ padding: 20 }}>
            <Text fontSize={30} fontWeight='bold'>Book a Free Consulation</Text>
          </Center>
          <div style={{ display: "flex" }}>
            <div style={{ flexDirection: 'column', paddingLeft: 100 }}>
              <Input
                style={{ width: "80%", height: "5vh", fontSize: 20, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                placeholder='Enter Name'
                name="Name"
                type="text"
                onChange={handleChange}
                value={data.Name}
              />
              <Input
                style={{ width: "80%", height: "5vh", fontSize: 20, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                placeholder='Enter Email'
                name="Email"
                type="email"
                onChange={handleChange}
                value={data.Email} />
              <Input
                style={{ width: "80%", height: "5vh", fontSize: 20, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                placeholder='Enter Phone'
                name="Phone"
                type='telephone'
                onChange={handleChange}
                value={data.Phone} />
              <Input
                style={{ width: "80%", height: "5vh", fontSize: 20, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                placeholder='Enter Patient Name'
                name="PatientName"
                type="text"
                onChange={handleChange}
                value={data.PatientName} />
              <Input
                style={{ width: "80%", height: "5vh", fontSize: 20, marginBottom: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                placeholder='Enter Patient Age'
                name="PatientAge"
                type="number"
                onChange={handleChange}
                value={data.PatientAge} />
            </div>
            <div style={{ flexDirection: "colomn", paddingRight: 100 }}>
              <div>
                <Textarea
                  name="PrimaryConcern"
                  style={{ width: '300px', marginBottom: 10, height: '200px', fontSize: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                  placeholder='Enter Primary Concern'
                  onChange={handleChange}
                  value={data.PrimaryConcern} />
              </div>
              <div>
                <Textarea
                  name='AdditionalMessage'
                  style={{ width: "300px", marginBottom: 10, height: '120px', fontSize: 20, backgroundColor: '#f2f2f2', paddingLeft: 10, borderRadius: 10, borderColor: 'white' }}
                  placeholder='Enter Additional Message'
                  onChange={handleChange}
                  value={data.AdditionalMessage} />
              </div>
            </div>
          </div>
          <Flex style={{ alignItems: 'center', justifyContent: 'space-between', paddingLeft: 350, paddingRight: 350, paddingTop: 50 }}>
            {!isUpdate ? <button style={{ backgroundColor: '#04AA6D', width: '100px', height: '40px', borderRadius: 20, borderColor: 'white' }} onClick={handleSubmit}>
              <text style={{ fontSize: 20, color: 'white' }}>Submit</text>
            </button> : <button style={{ backgroundColor: '#04AA6D', width: '100px', height: '40px', borderRadius: 20, borderColor: 'white' }} onClick={handleUpdateClick}>
              <text style={{ fontSize: 20, color: 'white' }}>Update</text>
            </button>}
            <button style={{ backgroundColor: '#04AA6D', width: '100px', height: '40px', borderRadius: 20, borderColor: 'white' }} onClick={handleReset}>
              <text style={{ fontSize: 20, color: 'white' }}>Reset</text>
            </button>
          </Flex>
        </div>
      </Center>
      <Center>
        <TableContainer>
          <Table size='sm'>
            <Thead>
              <Tr >
                <Th style={{ paddingLeft: 100 }}>Name</Th>
                <Th style={{ paddingLeft: 100 }}>Email</Th>
                <Th style={{ paddingLeft: 100 }}>Phone</Th>
                <Th style={{ paddingLeft: 100 }}>Patient Name</Th>
                <Th style={{ paddingLeft: 100 }}>Patient Age</Th>
                <Th style={{ paddingLeft: 100 }}>Primary Concern</Th>
                <Th style={{ paddingLeft: 100 }}>Additional Message</Th>
              </Tr>
            </Thead>
            {Form?.map((item, index) => (
              <>
                <Tbody>
                  <Tr key={item.PlaceFrom}>
                    <Td style={{ paddingLeft: 100 }}>{item.Name}</Td>
                    <Td style={{ paddingLeft: 100 }}>{item.Email}</Td>
                    <Td style={{ paddingLeft: 100 }}>{item.Phone}</Td>
                    <Td style={{ paddingLeft: 100 }}>{item.PatientName}</Td>
                    <Td style={{ paddingLeft: 100 }}>{item.PatientAge}</Td>
                    <Td style={{ paddingLeft: 100 }}>{item.PrimaryConcern}</Td>
                    <Td style={{ paddingLeft: 100 }}>{item.AdditionalMessage}</Td>
                    <Button onClick={() => handleDelete(index)}>Delete</Button>
                    <Button onClick={() => handleUpdate(index, item)}>Edit</Button>
                  </Tr>
                </Tbody>
              </>
            ))}
          </Table>
        </TableContainer>
      </Center>
    </>
  )
}
const styles = {
  container: {
    backgroundColor: '#f2f2f2',
    width: "100%",
    height: "100vh",
  },
  section: {
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: "50%",
    height: "70vh",
    borderRadius: "20px",
  },
}


export default App;
