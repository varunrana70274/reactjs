import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [citesData, setCitesData] = useState({});
  const states = [
    { name: "Haryana", value: 'Hr', cites: ["Ambala", 'Rohtak', 'Karnal'] },
    { name: "Delhi", value: 'Dl', cites: ["New Delhi", 'Central Delhi'] },
    { name: "Uthar Pardesh", value: 'Up', cites: ["Noida", 'gaziabad',] },
  ]
  useEffect(() => {

  }, [])
  return (
    <>
      <select onChange={(e) => {
        setCitesData(states.find(item => item.name === e.target.value))
        debugger
        setTimeout(() => {
          console.log(citesData);
        }, 2000);
      }}>
        {states.map(item => {
          return (
            <option key={item.value} value={item.name}>{item.name}</option>
          )
        })
        }
      </select>

      <select onChange={(e) => {
        console.log(e.target.value);
      }}>
        {citesData?.cites?.map(item => {
          return (
            <option key={item} value={item}>{item}</option>
          )
        })
        }
      </select>
    </>
  );
}

export default App;
