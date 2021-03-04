/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from  'moment';

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
    <div className="container-fluid">
      <div className="filter">

        <ul className="nav nav-pills text-center">
          <li><a className="hover-effect" data-group="all" href="#">All</a></li>

          {brands.map(x => (
               <li key={x}><a className="hover-effect" data-group={x} href="#">{x}</a></li>

          ))
          }

        </ul>
      </div>
      <div className="row">
        <div className="grid">
          {sneakers.map(s => (
            <div key={s.id} className="item col-md-3 col-sm-4 col-xs-6" data-groups={'["' + s.brand + '"]'}>
              <a href="#!portfolio-item-1.html" className="hover-overlay">
                <img alt={s.brand + ' ' + s.model} src={s.image} />
                <div className="overlay background-90-e">
                  <div className="hidden-xs">
                    <p className="title heading-e">{s.brand}</p>
                    <p className="text-center heading-e"><strong>{s.model}</strong></p>
                    <p className="text-center">{moment(s.purchaseDate).format('DD MMMM YYYY')}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}

        </div>
      </div>
    </div>




  );
}

export default ShowAllSneakers;