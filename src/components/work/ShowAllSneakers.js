/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://sneakerspike.azurewebsites.net/inventory';

function ShowAllSneakers() {

  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    getAllSneakers();
  }, []);

  const getAllSneakers = async () => {

    axios.get(url).then((response) => {

      setSneakers(response.data);

    })
      .catch(e => console.error('Error: $(e)')
      )
  };

  return (

    <div className="container-fluid">
      <div className="filter">
        <ul className="nav nav-pills text-center">

          {sneakers.map(s => (
            <li><a className="hover-effect" data-group={s.brand} href="#">{s.brand}</a></li>
          ))

          }


          <li><a className="hover-effect" data-group="all" href="http://www.starwars.com">All</a></li>
          <li><a className="hover-effect" data-group="web" href="http://www.starwars.com">Web</a></li>
          <li><a className="hover-effect" data-group="video" href="http://www.starwars.com">Video</a></li>
          <li><a className="hover-effect" data-group="photography" href="http://www.starwars.com">Photography</a></li>
          <li><a className="hover-effect" data-group="design" href="http://www.starwars.com">Design</a> </li>
        </ul>
      </div>
      <div className="row">
        <div className="grid">
          {sneakers.map(s => (
            <div key={s.brand} className="item col-md-3 col-sm-4 col-xs-6" data-groups='[{s.brand}]'>
              <a href="#!portfolio-item-1.html" className="hover-overlay">
                <img alt="Project 1" src="https://sneakersimages.blob.core.windows.net/sneakers/IMG-4906.jpg" />
                <div className="overlay background-90-e">
                  <div className="hidden-xs">
                    <p className="title heading-e">{s.brand}</p>
                    <p className="text-center heading-e"><strong>{s.model}</strong></p>
                    <p className="text-center">{s.purchaseDate}</p>
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