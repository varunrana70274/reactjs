import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Checkbox, Drawer } from 'rsuite';
import "rsuite/dist/rsuite.css";
function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [filterAttributes, setFilterAttributes] = useState([]);
  let [TempProdList, setTempProdList] = useState([]);
  const [checked, setChecked] = useState([]);
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
        // console.log(res.data);
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
        setTempProdList(res.data)
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
    // console.log('val', val);
    if (checked.length <= 0) {
      setChecked([val]);
    }
    else {
      const isPresent = checked.filter((item) => {
        return item === val
      });
      if (isPresent.length === 1) {
        const finalList = checked.filter(item => item !== val);
        setChecked(finalList);
      } else {
        setChecked([...checked, val]);
      }
    }
  }
  // const createFilterList = () => {
  //   const updatedItem = TempProdList.filter((categItem) => {
  //     return categItem.attributes.some(item => item.value === checked.map(item => item))
  //   });
  //   const updatedData = [...filteredDataList, ...updatedItem];
  //   if (!filteredDataList.includes(updatedData)) {
  //     filteredDataList.push(updatedData);
  //   }
  //   setFilteredDataList(updatedData);
  //   // console.log('FilteredDataList', updatedData);
  //   const withoutDuplicates = [...new Set(updatedData)];
  //   setProducts(withoutDuplicates);
  // }
  const createFilterList = () => {
    if (checked.length <= 0) {
      setProducts(TempProdList)
    }
    else {
      const updatedItem = TempProdList.filter((categItem) => {
        console.log('categItem.attributes.filter(item =>', categItem.attributes.map(item => item.value))
        return categItem.attributes.some(item => checked.includes(item.value))
      });
      const withoutDuplicates = [...new Set(updatedItem)];
      console.log('withoutDuplicates', withoutDuplicates);
      setProducts(withoutDuplicates);
    }
  }
  useEffect(() => {
    createFilterList();
  }, [checked])
  // console.log('products', products);

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
      </div>

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
          <Drawer.Title>FILTER</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <div >
            {filterAttributes?.map(item => {
              return (
                <div>
                  <h2>{item.att_id}</h2>
                  {
                    item.att_value?.map(val => <Checkbox key={val} onClick={() => filterItem(val)} style={{ display: 'flex', flexDirection: 'column' }}>{val}</Checkbox>)
                  }
                </div>
              )
            })}
          </div>
        </Drawer.Body>
      </Drawer>
    </div>
  );
}

export default App;
