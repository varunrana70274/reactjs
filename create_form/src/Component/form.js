import './App.css';
import React, { useEffect, useState } from 'react';
import { Box, Button, Center, Flex, FormControl, FormErrorMessage, FormLabel, HStack, Input, Select, Spacer, Stack, Text } from '@chakra-ui/react';
import { FiRefreshCcw } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import {Navigate} from 'react-router-dom';
export default function App() {
  const FormObj = ({
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
  });
  const [formData, setFormData] = useState(FormObj);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(formData));
    setIsSubmit(true);
    // console.log(formData);
    // alert('Thanks You');
    // setFormData(FormObj);
    <Navigate to="/Component/form.js" replace={true} />
  };
  useEffect(() => {
    // console.log('errors', errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log('formData', formData);
      alert('Thanks You');
      setFormData(FormObj);
    }
  }, [errors]);
  const validate = (value) => {
    const error = {};
    const regez = /^[A-Za-z]+$/
    if (value.PlaceFrom === '') {
      error.PlaceFrom = 'Required';
    } else if (!regez.test(value.PlaceFrom)) {
      error.PlaceFrom = 'Please Provide a valid Input';
    }
    if (value.DateFrom === '') {
      error.DateFrom = 'Required';
    }
    if (value.PlaceTo === '') {
      error.PlaceTo = 'Required';
    } else if (!regez.test(value.PlaceTo)) {
      error.PlaceTo = 'Please Provide a valid Input';
    }
    if (value.DateTo === '') {
      error.DateTo = 'Required';
    }
    if (value.ModeOfTravel === '') {
      error.ModeOfTravel = 'Required';
    }
    if (value.SanctionDetails === '') {
      error.SanctionDetails = 'Required';
    } else if (!regez.test(value.SanctionDetails)) {
      error.SanctionDetails = 'Please Provide a valid Input';
    }
    if (value.Distance === '') {
      error.Distance = 'Required';
    }
    if (value.Amount === '') {
      error.Amount = 'Required';
    }
    if (value.Remarks === '') {
      error.Remarks = 'Required';
    } else if (!regez.test(value.Remarks)) {
      error.Remarks = 'Please Provide a valid Input';
    }
    return error;
  };
  const handleReset = () => {
    setFormData(FormObj);
  }
  const DynamicOptions = (option) => {
    if (option === "Train") {
      return (
        <FormControl >
          <FormLabel>Travelled</FormLabel>
          <Select placeholder='Select option' style={{ width: '370px' }} onChange={handleChange} name='Travelled' value={formData.Travelled}>
            <option value='option1'>Economy class</option>
            <option value='option2'>business class</option>
          </Select>
        </FormControl>)
    } else if (option === "Air") {
      return (
        <FormControl >
          <FormLabel>Travelled</FormLabel>
          <Select disabled={true} placeholder='Select option' style={{ width: '370px' }} onChange={handleChange} name='Travelled' value={formData.Travelled}>
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
          <Select disabled={true} placeholder='Select option' style={{ width: '370px' }} onChange={handleChange} name='Travelled' value={formData.Travelled}>
            <option value='option1'>Economy class</option>
            <option value='option2'>business class</option>
          </Select>
        </FormControl>)
    }
  }
  return (
    <Center flexDirection='column' style={{ backgroundColor: 'ButtonShadow' }} h='929px' >
      <h2 colorScheme='green'>FORM</h2>
      <Box w='40%' p={25} color='black' bg='white' shadow='2xl'>
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
        <Flex >
          <FormControl >
            <FormLabel>Mode of travel</FormLabel>
            <Select placeholder='Select option' style={{ width: '370px' }} onChange={handleChange} name='ModeOfTravel' value={formData.ModeOfTravel}>
              <option value='Air'>Air</option>
              <option value='Bus'>Bus</option>
              <option value='Train'>Train</option>
              <option value='Road'>Road</option>
              <option value='Taxy'>Taxi</option>
            </Select>
            <FormLabel style={{ color: 'red' }}>{errors.ModeOfTravel}</FormLabel>
          </FormControl>
          <Spacer />
          {formData.ModeOfTravel === "Air" || formData.ModeOfTravel === "Train" ? (
            <FormControl>
              <FormLabel>DTS</FormLabel>
              <Select placeholder='Select option' style={{ width: '370px' }} onChange={handleChange} name='Dts' value={formData.Dts} >
                <option value='option1'>DTS</option>
                <option value='option2'>No DTS(Air India)</option>
                <option value='option3'>No DTS(Pvt)</option>
              </Select>
            </FormControl>
          ) : (
            <FormControl>
              <FormLabel>DTS</FormLabel>
              <Select disabled={true} placeholder='Select option' style={{ width: '370px' }} onChange={handleChange} name='Dts' value={formData.Dts} >
                <option value='option1'>DTS</option>
                <option value='option2'>No DTS(Air India)</option>
                <option value='option3'>No DTS(Pvt)</option>
              </Select>
            </FormControl>
          )
          }
        </Flex>
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
        <Flex >
          <FormControl >
            <FormLabel>Entitled</FormLabel>
            {/* <Select disabled='true' style={{ width: '370px' }} onChange={handleChange} name='Entitled' value={formData.Entitled}>
              <option value='option1'>Economy Class</option>
            </Select> */}
            <Input placeholder='Economy Class' disabled='true' w='210%' onChange={handleChange} name='Entitled' value={formData.Entitled} />
          </FormControl>
          <Spacer />
          {DynamicOptions(formData.ModeOfTravel) }
        </Flex>
        <FormControl >
          <FormLabel>Sanction Details</FormLabel>
          <Input
            value={formData.SanctionDetails}
            name='SanctionDetails'
            onChange={handleChange}
            w='100%' type='text' />
          <FormLabel style={{ color: 'red' }}>{errors.SanctionDetails}</FormLabel>
        </FormControl>
        <Flex w='75%'>
          <FormControl >
            <FormLabel>Distance in KM</FormLabel>
            <Input
              value={formData.Distance}
              name='Distance'
              onChange={handleChange}
              w='210%' type='text'
            />
            <FormLabel style={{ color: 'red' }}>{errors.Distance}</FormLabel>
          </FormControl>
          <Spacer />
          <FormControl >
            <FormLabel>Amount (in Rs.)</FormLabel>
            <Input
              name='Amount'
              value={formData.Amount}
              onChange={handleChange}
              w='210%' type='text' />
            <FormLabel style={{ color: 'red' }}>{errors.Amount}</FormLabel>
          </FormControl>
        </Flex>
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
          <Button colorScheme='facebook' leftIcon={<FiPlusCircle />} onClick={handleSubmit} w='40%'>
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
  );
}
