import React from 'react';


function Home() {



  return (

    <section id="home">
      
      <div className="view">
        <img className="bg" src="images/placeholders/1920x1200-0.jpg" alt="CABBAGE" />
        <img className="bg" src="images/placeholders/1920x1200-1.jpg" alt="CRIBBAGE" />
        <div className="content home-alice full-size colors-a background-transparent">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-md-offset-1">
                <div className="text-right textillate heading  hidden-xs hidden-sm" data-textillate-options="{loop:true, in:{effect:'flipInY', reverse:true}, out:{effect:'flipOutY', reverse:true}}">
                  <ul className="texts">
                    <li>We Are Designers</li>
                    <li>We Are Programmers</li>
                    <li>We Are Coders</li>
                    <li>We Are Developers</li>
                    <li>We Are Creative</li>
                  </ul>
                </div>
                <h1 className="heading text-right">Sneakers</h1>

                <p className="text-right title">
                  Integer ligula ante, posuere et ante quis, eleifend eleifend ipsum. In sed odio mi. Vivamus dapibus gravida facilisis. In hac habitasse platea dictumst. Aliquam tincidunt ultricies enim sed pellentesque. In in mi in libero laoreet ultricies. Phasellus non metus dolor parturient vitae neque venenatis.
            </p>
                <p className="text-right"><a href="#about" className="button background-60-d heading-d">About Us</a><a href="#work" className="button background-60-f heading-f">Our Work</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Home;