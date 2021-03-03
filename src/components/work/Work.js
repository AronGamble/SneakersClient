import React from 'react';
import ShowAllSneakers from './ShowAllSneakers';

function Work() {

  return (
    <>
      <section id="work">
        <div className="view">
          <img alt="" className="bg" src="images/placeholders/1920x1200-2.jpg" /><img alt="" className="bg" src="images/placeholders/1920x1200-0.jpg" />
          <div className="content no-bottom-padding colors-e">
            <div className="container">
              <h2>Our <span className="highlight">Work</span></h2>
              <p className="header-details"><span className="highlight">Some Recent</span> Projects</p>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
            </div>
            <div className="gallery background-e" data-default-group="all" data-overlay=".gallery-overlay">
              <ShowAllSneakers></ShowAllSneakers>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;