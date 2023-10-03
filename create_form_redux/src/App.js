import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Center, Flex, FormControl, FormLabel, Input, Select, Spacer, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import {  useState } from 'react';
import { FiRefreshCcw } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { addform, deleteform, updateform } from './redux/FormReducers';
function App() {
  const FormObj = useSelector(state => state.Forms.travelDetails);
  const dispatch = useDispatch();
  
  const initialState = {
    PlaceFrom: '',
    DateFrom: '',
    PlaceTo: '',
    DateTo: '',
    ModeOfTravel: '',
    Dts: '',
    ReasonNotTakingDts: '',
    Entitled: 'Economy Class',
    Travelled: '',
    SanctionDetails: '',
    Distance: '',
    Amount: '',
    Remarks: '',
  }
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };
  const handleSubmit = () => {
    dispatch(addform(formData));
    setFormData(initialState);
    alert('Submit');
  };
  const handleDelete = (index) => {
    dispatch(deleteform(index));
  };
  const handleUpdate = (item) => {
    dispatch(updateform(formData , item));
  }
  const [errors, setErrors] = useState({});
  const handleValidation = () => {
    const error = {};
    const regez = /^[A-Za-z]+$/
    if (formData.PlaceFrom === '') {
      error.PlaceFrom = 'Required';
    } else if (!regez.test(formData.PlaceFrom)) {
      error.PlaceFrom = 'Please Provide a valid Input';
    }
    if (formData.DateFrom === '') {
      error.DateFrom = 'Required';
    }
    if (formData.PlaceTo === '') {
      error.PlaceTo = 'Required';
    } else if (!regez.test(formData.PlaceTo)) {
      error.PlaceTo = 'Please Provide a valid Input';
    }
    if (formData.DateTo === '') {
      error.DateTo = 'Required';
    }
    if (formData.ModeOfTravel === '') {
      error.ModeOfTravel = 'Required';
    }
    if (formData.Distance === '') {
      error.Distance = 'Required';
    }
    if (formData.Amount === '') {
      error.Amount = 'Required';
    }
    if (formData.Remarks === '') {
      error.Remarks = 'Required';
    } else if (!regez.test(formData.Remarks)) {
      error.Remarks = 'Please Provide a valid Input';
    }
    setErrors(error);
    return error;
  };
  const onSubmit = () => {
    const error = handleValidation();
    if (Object.keys(error).length === 0) {
      handleSubmit();
    } else {
      console.log('errors', error);
    }
  };

  const handleReset = () => {
    setFormData(initialState);
  }
  const DynamicOptions = (option) => {
    if (option === "Air") {
      return (
        <FormControl >
          <FormLabel>Travelled</FormLabel>
          <Select placeholder='Select option' style={{ width: '100%' }} onChange={handleChange} name='Travelled' value={formData.Travelled}>
            <option value='Economy'>Economy class</option>
            <option value='business'>business class</option>
          </Select>
        </FormControl>)
    } else if (option === "Train") {
      return (
        <FormControl >
          <FormLabel>Travelled</FormLabel>
          <Select placeholder='Select option' style={{ width: '100%' }} onChange={handleChange} name='Travelled' value={formData.Travelled}>
            <option value='option1'>AC 1st class</option>
            <option value='option2'>AC 2st class</option>
            <option value='option2'>AC 3st class</option>
            <option value='option2'>Sleeper</option>
          </Select>
        </FormControl>)
    } else {
      return (
        <FormControl >
          <FormLabel>Travelled</FormLabel>
          <Select disabled={true} placeholder='Select option' style={{ width: '100%' }} onChange={handleChange} name='Travelled' value={formData.Travelled}>
            <option value='option1'>Economy class</option>
            <option value='option2'>business class</option>
          </Select>
        </FormControl>)
    }
  }
  // console.log('FormObj', FormObj);
  return (
    <>
      <Center flexDirection='column' style={{ backgroundColor: 'ButtonShadow' }} h='1000px' >
        <h2 colorScheme='green'>FORM</h2>
        <Box w='30%' p={25} color='black' bg='white' shadow='2xl'>
          <Center>
            <Text>
              From
            </Text>
          </Center>
          <FormControl >
            <FormLabel>Enter Place </FormLabel>
            <Input
              value={formData.PlaceFrom}
              name='PlaceFrom'
              onChange={handleChange}
              w='100%'
              size='lg'
              type='text' />
            <FormLabel style={{ color: 'red' }}>{errors.PlaceFrom}</FormLabel>
          </FormControl>
          <FormControl >
            <FormLabel>Date & time</FormLabel>
            <Input
              name='DateFrom'
              value={formData.DateFrom}
              onChange={handleChange}
              w='100%'
              placeholder="Select Date and Time"
              size="lg"
              type="datetime-local"
            />
            <FormLabel style={{ color: 'red' }}>{errors.DateFrom}</FormLabel>
          </FormControl>
          <Center>
            <Text>
              To
            </Text>
          </Center>
          <FormControl >
            <FormLabel>Enter Place</FormLabel>
            <Input
              name='PlaceTo'
              value={formData.PlaceTo}
              onChange={handleChange}
              w='100%'
              type='text' />
            <FormLabel style={{ color: 'red' }}>{errors.PlaceTo}</FormLabel>
          </FormControl>
          <FormControl >
            <FormLabel>Date & time</FormLabel>
            <Input
              name='DateTo'
              value={formData.DateTo}
              onChange={handleChange}
              w='100%'
              placeholder="Select Date and Time"
              size="lg"
              type="datetime-local"
            />
            <FormLabel style={{ color: 'red' }}>{errors.DateTo}</FormLabel>
          </FormControl>
          <br />

          <FormControl >
            <FormLabel>Mode of travel</FormLabel>
            <Select placeholder='Select option' style={{ width: '100%' }} onChange={handleChange} name='ModeOfTravel' value={formData.ModeOfTravel}>
              <option value='Air'>Air</option>
              <option value='Bus'>Bus</option>
              <option value='Train'>Train</option>
              <option value='Road'>Road</option>
              <option value='Taxy'>Taxi</option>
            </Select>
            <FormLabel style={{ color: 'red' }}>{errors.ModeOfTravel}</FormLabel>
          </FormControl>

          {formData.ModeOfTravel === "Air" || formData.ModeOfTravel === "Train" ? (
            <FormControl>
              <FormLabel>DTS</FormLabel>
              <Select placeholder='Select option' style={{ width: '100%' }} onChange={handleChange} name='Dts' value={formData.Dts} >
                <option value='option1'>DTS</option>
                <option value='option2'>No DTS(Air India)</option>
                <option value='option3'>No DTS(Pvt)</option>
              </Select>
            </FormControl>
          ) : (
            <FormControl>
              <FormLabel>DTS</FormLabel>
              <Select disabled={true} placeholder='Select option' style={{ width: '100%' }} onChange={handleChange} name='Dts' value={formData.Dts} >
                <option value='option1'>DTS</option>
                <option value='option2'>No DTS(Air India)</option>
                <option value='option3'>No DTS(Pvt)</option>
              </Select>
            </FormControl>
          )
          }

          {formData.Dts === 'option2' || formData.Dts === 'option3' ? (
            <FormControl>
              <FormLabel>Reason for not taking DTS</FormLabel>
              <Input
                value={formData.ReasonNotTakingDts}
                name='ReasonNotTakingDts'
                onChange={handleChange}
                w='100%' type='text' />
            </FormControl>
          ) : (
            <FormControl>
              <FormLabel>Reason for not taking DTS</FormLabel>
              <Input
                disabled={true}
                value={formData.ReasonNotTakingDts}
                name='ReasonNotTakingDts'
                onChange={handleChange}
                w='100%' type='text' />
            </FormControl>
          )
          }
          <Center>
            <Text>
              Class of Travel
            </Text>
          </Center>
          <FormControl >
            <FormLabel>Entitled</FormLabel>
            {/* <Select disabled='true' style={{ width: '370px' }} onChange={handleChange} name='Entitled' value={formData.Entitled}>
                <option value='option1'>Economy Class</option>
              </Select> */}
            <Input placeholder='Economy Class' disabled='true' w='100%' onChange={handleChange} name='Entitled' value={formData.Entitled} />
          </FormControl>
          {DynamicOptions(formData.ModeOfTravel)}
          {formData.Travelled === 'business' ? (
            <FormControl >
              <FormLabel>Sanction Details</FormLabel>
              <Input
                value={formData.SanctionDetails}
                name='SanctionDetails'
                onChange={handleChange}
                w='100%' type='text' />
            </FormControl>
          ) : (
            <FormControl >
              <FormLabel>Sanction Details</FormLabel>
              <Input
                disabled={true}
                value={formData.SanctionDetails}
                name='SanctionDetails'
                onChange={handleChange}
                w='100%' type='text' />
            </FormControl>
          )}

          <FormControl >
            <FormLabel>Distance in KM</FormLabel>
            <Input
              value={formData.Distance}
              name='Distance'
              onChange={handleChange}
              w='100%' type='text'
            />
            <FormLabel style={{ color: 'red' }}>{errors.Distance}</FormLabel>
          </FormControl>
          <FormControl >
            <FormLabel>Amount (in Rs.)</FormLabel>
            <Input
              name='Amount'
              value={formData.Amount}
              onChange={handleChange}
              w='100%' type='text' />
            <FormLabel style={{ color: 'red' }}>{errors.Amount}</FormLabel>
          </FormControl>
          <FormControl >
            <FormLabel>Remarks</FormLabel>
            <Input
              name='Remarks'
              value={formData.Remarks}
              onChange={handleChange}
              w='100%' type='text' />
            <FormLabel style={{ color: 'red' }}>{errors.Remarks}</FormLabel>
          </FormControl>
          <Flex flexDirection='row' py={10}>
            <Button leftIcon={<FiPlusCircle />} onClick={onSubmit} w='40%' className="btn btn-primary">
              Add
            </Button>
            <Spacer />
            <Button colorScheme='twitter' leftIcon={<FiRefreshCcw />} w='40%' onClick={() => {
              handleReset()
            }}>
              Reset
            </Button>
          </Flex>
        </Box>
      </Center >
      <Center>
        <TableContainer>
          <Table size='sm'>
            <Thead >
              <Tr >
                <Th style={{ paddingLeft: 50 }}>Place From</Th>
                <Th style={{ paddingLeft: 50 }}>Date From</Th>
                <Th style={{ paddingLeft: 50 }}>Place To</Th>
                <Th style={{ paddingLeft: 50 }}>Date To</Th>
                <Th style={{ paddingLeft: 50 }}>ModeOf Travel</Th>
                <Th style={{ paddingLeft: 50 }}>Dts</Th>
                <Th style={{ paddingLeft: 50 }}>Reason Not Taking Dts</Th>
                <Th style={{ paddingLeft: 50 }}>Entitled</Th>
                <Th style={{ paddingLeft: 50 }}>Sanction Details</Th>
                <Th style={{ paddingLeft: 50 }}>Distance</Th>
                <Th style={{ paddingLeft: 50 }}>Amount</Th>
                <Th style={{ paddingLeft: 50 }}>Remarks</Th>
              </Tr>
            </Thead>
            {FormObj?.map((item, index) => (
              <>
                <Tbody>
                  <Tr key={item.PlaceFrom}>
                    <Td style={{ paddingLeft: 50 }}>{item.PlaceFrom}</Td>
                    <Td style={{ paddingLeft: 50 }}>{item.DateFrom}</Td>
                    <Td style={{ paddingLeft: 50 }}>{item.PlaceTo}</Td>
                    <Td style={{ paddingLeft: 50 }}>{item.DateTo}</Td>
                    <Td style={{ paddingLeft: 50 }}>{item.ModeOfTravel}</Td>
                    <Td style={{ paddingLeft: 50 }}>{item.Dts}</Td>
                    <Td style={{ paddingLeft: 50 }}>{item.ReasonNotTakingDts}</Td>
                    <Td style={{ paddingLeft: 50 }}>{item.Entitled}</Td>
                    <Td style={{ paddingLeft: 50 }}>{item.SanctionDetails}</Td>
                    <Td style={{ paddingLeft: 50 }}>{item.Distance}</Td>
                    <Td style={{ paddingLeft: 50 }}>{item.Amount}</Td>
                    <Td style={{ paddingLeft: 50 }}>{item.Remarks}</Td>
                    <Button onClick={() => handleDelete(index)}>Delete</Button>
                    <Button onClick={() => handleUpdate(item, index)}>Edit</Button>
                  </Tr>
                </Tbody>
              </>
            ))}
          </Table>
        </TableContainer>
      </Center>
    </>
  );
}

export default App;
