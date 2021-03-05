/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import ShowAllSneakersFuncApp from './ShowAllSneakersFuncApp';


const url = 'https://sneakerspike.azurewebsites.net/inventory';

var unique = [];

function ShowAllSneakers() {

  const [sneakers, setSneakers] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    getAllSneakers();
  }, []);

  const getAllSneakers = async () => {


    axios.get(url).then((response) => {

      setSneakers(response.data);

      unique = [...new Set(response.data.map(x => x.brand))];
      setBrands(unique);

    })
      .catch(e => console.error('Error: $(e)')
      )
  };

  return (
    
          <ShowAllSneakersFuncApp></ShowAllSneakersFuncApp>
    


  );
}

export default ShowAllSneakers;