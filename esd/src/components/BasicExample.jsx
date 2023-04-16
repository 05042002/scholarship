import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Nav, Tab } from 'react-bootstrap';




function BasicExample() {

  // const [list, setList] = useState(['apple', 'banana', 'orange']);
  // const [index, setIndex] = useState(0);

  // const handleChange = (event) => {
  //   setIndex(Number(event.target.value));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (index < list.length) {
  //     alert(list[index]);
  //   } else {
  //     alert('Index is out of range');
  //   }
  // };

  // return (
  //   <>
  //    <form onSubmit={handleSubmit}>
  //       <label>
  //         Enter an index number:
  //         <input type="number" value={index} onChange={handleChange} />
  //       </label>
  //       <button type="submit">Show Element</button>
  //     </form>
  //   </>
  // );

  // const [dictionary, setDictionary] = useState({apple: {quantity: 10, price: 1.50}, banana: {quantity: 5, price: 0.75}, orange: {quantity: 15, price: 2.00}});
  // const [key, setKey] = useState('');

  // const handleChange = (event) => {
  //   setKey(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (key in dictionary) {
  //     alert(`Quantity: ${dictionary[key].quantity}, Price: ${dictionary[key].price}`);
  //   } else {
  //     alert('Key not found in dictionary');
  //   }
  // };

  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         Enter a key:
  //         <input type="text" value={key} onChange={handleChange} />
  //       </label>
  //       <button type="submit">Show Value</button>
  //     </form>
  //   </div>
  // );

  const [dictionary, setDictionary] = useState({
    apple: [1, 'red', 'fruit'],
    banana: [2, 'yellow', 'fruit'],
    carrot: [3, 'orange', 'vegetable']
  });
  const [selectedKey, setSelectedKey] = useState('');

  const handleButtonClick = (key) => {
    setSelectedKey(key);
  };

  const selectedValues = selectedKey ? dictionary[selectedKey] : [];

  return (
    <div>
      <h2>Select a key:</h2>
      {Object.keys(dictionary).map((key) => (
        <button key={key} onClick={() => handleButtonClick(key)}>
          {key}
        </button>
      ))}
      {selectedKey && (
        <div>
          <h2>Values for {selectedKey}:</h2>
          <ul>
            {selectedValues.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

}
  


export default BasicExample;