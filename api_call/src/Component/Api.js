import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Api.css';
import { Checkbox, Drawer } from 'rsuite';
import "rsuite/dist/rsuite.css";
const Api = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [attributes, setAttributes] = useState([]);
    const [filterAttributes, setFilterAttributes] = useState([]);
    const getProduct = async () => {
        axios
            .get(
                `http://192.168.1.28:3004/categories`,
            )
            .then(res => {
                // console.log(res.data);
                setCategories(res.data);
            })
            .catch(err => {
                console.log('Error', err);
            });
    };
    const getAttributesList = async () => {
        axios
            .get(
                `http://192.168.1.28:3004/attributes`,
            )
            .then(res => {
                console.log(res.data);
                setAttributes(res.data);
            })
            .catch(err => {
                console.log('Error', err);
            });
    }
    const Product = async (item) => {
        axios
            .get(
                `http://192.168.1.28:3004/products/?categorie=${item.name}`,
            )
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.log('Error', err);
            });
    };
    const ProductItem = async (item) => {
        axios
            .get(
                `http://192.168.1.28:3004/products`,
            )
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.log('Error', err);
            });
    };

    useEffect(() => {
        getProduct();
        ProductItem();
        getAttributesList();
    }, []);

    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const handleget = (item) => {
        Product(item);
        setOpen(true);
        setPlacement("left");
        filteredData(item);
    };

    const filteredData = (item) => {
        const attList = item?.att_id;
        // console.log('attList', attList);
        // console.log('attributes', attributes);
        const filterData = attributes.filter(({ id }) => attList.includes(`${id}`));
        // console.log('filterData', filterData);
        setFilterAttributes(filterData);
    };
    const filterItem = (val) => {
        const updatedItem = products.filter((categItem) => {
            // console.log('categItem', categItem);
            return categItem.attributes.filter(item => item.value[0] === val)
        })
        console.log('updatedItem', updatedItem);
        setProducts(updatedItem)
    }
    // console.log('products.attributes?.value', products?.map(item => console.log('hello', item.attributes.map(itm => console.log("jjjj",itm.value)))))

    return (
        <div>
            <div id="navbar">
                {categories?.map(item => {
                    return (
                        <>
                            <a key={item.id} onClick={() => handleget(item)}>{item.name}</a>
                        </>
                    )
                })}
            </div >

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }} >
                {products?.map(item => {
                    return (
                        <div className='border'>
                            <h5 key={item?.id}>{item.name}</h5>
                            <h5>{item.categorie}</h5>
                            {item.attributes?.map(val => <h5>{val.value}</h5>)}
                        </div>
                    )
                })}
            </div>
            <Drawer placement={placement} open={open} onClose={() => setOpen(false)}>
                <Drawer.Header>
                    <Drawer.Title>Drawer Title</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <div >
                        {filterAttributes?.map(item => {
                            return (
                                <div>
                                    <h2>{item.att_id}</h2>
                                    {
                                        item.att_value?.map(val => <Checkbox onClick={() => filterItem(val)} style={{ display: 'flex', flexDirection: 'column' }}>{val}</Checkbox>)
                                    }
                                </div>
                            )
                        })}
                    </div>
                </Drawer.Body>
            </Drawer>
        </div >

    )
}

export default Api
