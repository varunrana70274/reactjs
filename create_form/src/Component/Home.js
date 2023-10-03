import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Box, Button, Center, Flex, FormControl, FormLabel, Input, Select, Spacer, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { FiRefreshCcw } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";

export default function Home() {
    const navigate = useNavigate();
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
    const [storeData, setStoreData] = useState([]);
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
        setStoreData([...storeData, newRecod]);
    };
    const newRecod = { ...formData, id: new Date().getTime().toString() };
    useEffect(() => {
        // console.log('errors', errors);
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log('formData', formData);
            // alert('Thanks You');
            setFormData(FormObj);
            navigate("/courses", { newRecod });
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
    console.log('storeData', storeData);
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
                        <Button leftIcon={<FiPlusCircle />} onClick={handleSubmit} w='40%' className="btn btn-primary">
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
            {/* <Center>
                <TableContainer>
                    <Table size='sm'>
                        <Thead >
                            <Tr >
                                <Th style={{ paddingLeft: 10 }}>Place From</Th>
                                <Th style={{ paddingLeft: 10 }}>Date From</Th>
                                <Th style={{ paddingLeft: 10 }}>Place To</Th>
                                <Th style={{ paddingLeft: 10 }}>Date To</Th>
                                <Th style={{ paddingLeft: 10 }}>ModeOf Travel</Th>
                                <Th style={{ paddingLeft: 10 }}>Dts</Th>
                                <Th style={{ paddingLeft: 10 }}>Reason Not Taking Dts</Th>
                                <Th style={{ paddingLeft: 10 }}>Entitled</Th>
                                <Th style={{ paddingLeft: 10 }}>Sanction Details</Th>
                                <Th style={{ paddingLeft: 10 }}>Distance</Th>
                                <Th style={{ paddingLeft: 10 }}>Amount</Th>
                                <Th style={{ paddingLeft: 10 }}>Remarks</Th>
                            </Tr>
                        </Thead>
                        {storeData.map(item => (
                            <Tbody>
                                <Tr key={item.id}>
                                    <Td>{item.PlaceFrom}</Td>
                                    <Td>{item.DateFrom}</Td>
                                    <Td>{item.PlaceTo}</Td>
                                    <Td>{item.DateTo}</Td>
                                    <Td>{item.ModeOfTravel}</Td>
                                    <Td>{item.Dts}</Td>
                                    <Td>{item.ReasonNotTakingDts}</Td>
                                    <Td>{item.Entitled}</Td>
                                    <Td>{item.SanctionDetails}</Td>
                                    <Td>{item.Distance}</Td>
                                    <Td>{item.Amount}</Td>
                                    <Td>{item.Remarks}</Td>
                                    <Button mx={5} onClick={() => {
                                        setStoreData(
                                            storeData.filter(a =>
                                                a.id !== item.id
                                            )
                                        );
                                    }}>Delete</Button>
                                    <Button px={10}>Edit</Button>
                                </Tr>
                            </Tbody>
                        ))}
                    </Table>
                </TableContainer>
            </Center> */}
        </>

    )
}


