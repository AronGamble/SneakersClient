import React from 'react';

import './App.css';

function App() {
  return (
    <>
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
                  <h1 className="heading text-right">SNEAKERS</h1>
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
      <section id="about">
        <div className="view">
          <img alt="" className="bg" src="images/placeholders/1920x1200-2.jpg" />
          <div className="content pane">
            <div className="container-fluid">
              <div className="row hidden-xs hidden-sm">
                <div className="col-md-4 colors-b">
                  <div className="row">
                    <div className="col-xs-12 banner-cell">
                      <h3 className="light-font-weight">Responsive</h3>
                      <p className="title">Layout</p>
                    </div>
                    <div className="col-xs-12 success heading-b banner-cell">
                      Responsive Styling
                  <br /> Retina Ready
                </div>
                  </div>
                </div>
                <div className="col-md-4 colors-c">
                  <div className="row">
                    <div className="col-xs-12 banner-cell">
                      <h3 className="light-font-weight">Parallax</h3>
                      <p className="title">Effects</p>
                    </div>
                    <div className="col-xs-12 warning heading-c banner-cell">
                      Highly Optimized
                  <br /> Smooth Animations
                </div>
                  </div>
                </div>
                <div className="col-md-4 colors-d">
                  <div className="row">
                    <div className="col-xs-12 banner-cell">
                      <h3 className="light-font-weight">Bootstrap</h3>
                      <p className="title">Framework</p>
                    </div>
                    <div className="col-xs-12 info heading-d banner-cell">
                      Adapted for Multicolor Sections
                  <br /> Highly Customized
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="view">
          <img alt="" className="bg" src="images/placeholders/1920x1200-0.jpg" /><img alt="" className="bg" src="images/placeholders/1920x1200-1.jpg" />
          <div className="content colors-e">
            <div className="container">
              <h2>About</h2>
              <p className="header-details"><span className="highlight">We Create</span> Awesome Stuff</p>
              <p className="lead">We are <span className="highlight">Creative Team</span> located in Kalura, Bovlandia. Tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className="row">
                <div className="col-md-4">
                  <div className="col-icon">
                    <i className="li_bulb"></i>
                  </div>
                  <div className="col-content">
                    <h4>Web <span className="highlight">Development</span></h4>
                    <p>Praesent sodales, quam vitae gravida interdum, ex mi bibendum enim, sit amet tristique mi quam vel odio. Donec non nunc condimentum, hendrerit elit sed, condimentum magna. Suspendisse imperdiet purus vel ornare cursus.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="col-icon">
                    <i className="li_t-shirt"></i>
                  </div>
                  <div className="col-content">
                    <h4>Internet <span className="highlight">Marketing</span></h4>
                    <p>Curabitur et diam elementum, mollis tortor a, malesuada turpis. Vivamus gravida, justo et molestie sollicitudin, erat lorem tempus eros, vel laoreet nibh urna ac nunc, vestibulum neque vitae pellentesque efficitur.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="col-icon">
                    <i className="li_megaphone"></i>
                  </div>
                  <div className="col-content">
                    <h4>Client <span className="highlight">Support</span></h4>
                    <p>Sed porta erat vel ipsum maximus, eget maximus est maximus. Maecenas at venenatis nibh, sit amet suscipit odio. In feugiat vehicula dui. In felis enim, maximus a dolor semper efficitur elit euismod magna quis commodo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="view" id="how-we-work">
          <img alt="" className="bg" src="images/placeholders/1920x1200-2.jpg" /><img alt="" className="bg" src="images/placeholders/1920x1200-0.jpg" />
          <div className="content colors-h">
            <div className="container">
              <h3><span className="highlight">How</span> We Work</h3>
              <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  <p className="text-center">Aliquam fermentum massa ac est sollicitudin, at ultricies ligula tristique. Cras finibus, nulla ac convallis feugiat, nisl nisl lobortis est, eget auctor velit magna vel nunc. Donec nec eros rhoncus.</p>
                </div>
              </div>
              <div className="row icon-set">
                <div className="col-md-3 text-center">
                  <p>
                    <i className="li_eye circle scroll-in-animation background-20 heading" data-animation="fadeInUp"></i>
                  </p>
                  <p className="title"><span className="underline-text">Awesome</span></p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="col-md-3 text-center">
                  <p>
                    <i className="li_like circle scroll-in-animation background-20 heading" data-animation="fadeInUp"></i>
                  </p>
                  <p className="title"><span className="underline-text">Innovative</span></p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="col-md-3 text-center">
                  <p>
                    <i className="li_paperplane circle scroll-in-animation background-20 heading" data-animation="fadeInUp"></i>
                  </p>
                  <p className="title"><span className="underline-text">Creative</span></p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="col-md-3 text-center">
                  <p>
                    <i className="li_lab circle scroll-in-animation background-20 heading" data-animation="fadeInUp"></i>
                  </p>
                  <p className="title"><span className="underline-text">Experimental</span></p>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="team">
        <div className="view">
          <img alt="" className="bg" src="images/placeholders/1920x1200-1.jpg" /><img alt="" className="bg" src="images/placeholders/1920x1200-2.jpg" />
          <div className="content colors-e">
            <div className="container">
              <h2>Team</h2>
              <p className="header-details"><span className="highlight">Who </span>We Are</p>
              <p className="lead">Our success depends on the <strong className="highlight">strength of our team.</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation.</p>
              <div className="row">
                <div className="col-md-3 col-sm-6  col-xs-6">
                  <div className="hover-overlay">
                    <img alt="Mike Johnson" src="images/placeholders/380x573-1.jpg" title="Mike Johnson" className="fluid-width" />
                    <div className="overlay background-90-b">
                      <div>
                        <p className="text-center text-uppercase heading-b">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                        <div className="separator-small"></div>
                        <p className="text-center">
                          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><i className="fa fa-facebook heading-b"></i></a>
                          <a target="_blank" rel="noreferrer" href="http://www.youtube.com/"><i className="fa fa-youtube heading-b"></i></a>
                          <a target="_blank" rel="noreferrer" href="https://github.com/"><i className="fa fa-github heading-b"></i></a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="caption">
                    <p>
                      <span className="title">Mike Johnson</span>
                      <br />
                      <span className="highlight">CEO &amp; Founder</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6  col-xs-6">
                  <div className="hover-overlay">
                    <img alt="Jessica Specter" src="images/placeholders/380x573-1.jpg" title="Jessica Specter" className="fluid-width" />
                    <div className="overlay background-90-b">
                      <div>
                        <p className="text-center text-uppercase heading-b">
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                        <div className="separator-small"></div>
                        <p className="text-center">
                          <a target="_blank" rel="noreferrer" href="https://twitter.com/"><i className="fa fa-twitter heading-b"></i></a>
                          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><i className="fa fa-linkedin heading-b"></i></a>
                          <a target="_blank" rel="noreferrer" href="https://plus.google.com/"><i className="fa fa-google-plus heading-b"></i></a>
                          <a target="_blank" rel="noreferrer" href="https://vimeo.com/"><i className="fa fa-vimeo-square heading-b"></i></a>
                          <a target="_blank" rel="noreferrer" href="https://www.tumblr.com/"><i className="fa fa-tumblr heading-b"></i></a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="caption">
                    <p>
                      <span className="title">Jessica Specter</span>
                      <br />
                      <span className="highlight">Creative Director</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6  col-xs-6">
                  <div className="hover-overlay">
                    <img alt="Lynda Smith" src="images/placeholders/380x573-1.jpg" title="Lynda Smith" className="fluid-width" />
                    <div className="overlay background-90-b">
                      <div>
                        <p className="text-center text-uppercase heading-b">
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                        <div className="separator-small"></div>
                        <p className="text-center">
                          <a target="_blank" rel="noreferrer" href="https://www.flickr.com/"><i className="fa fa-flickr heading-b"></i></a>
                          <a target="_blank" rel="noreferrer" href="https://www.dropbox.com/"><i className="fa fa-dropbox heading-b"></i></a>
                          <a target="_blank" rel="noreferrer" href="https://www.xing.com/"><i className="fa fa-xing heading-b"></i></a>
                          <a target="_blank" rel="noreferrer" href="http://vk.com/"><i className="fa fa-vk heading-b"></i></a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="caption">
                    <p>
                      <span className="title">Andrew Miles</span>
                      <br />
                      <span className="highlight">Developer</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6  col-xs-6">
                  <div className="hover-overlay">
                    <img alt="Lynda Smith" src="images/placeholders/380x573-1.jpg" title="Lynda Smith" className="fluid-width" />
                    <div className="overlay background-90-b">
                      <div>
                        <p className="text-center text-uppercase heading-b">
                          Exercitation ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                        <div className="separator-small"></div>
                        <p className="text-center">
                          <a target="_blank" rel="noreferrer" href="https://twitter.com/"><i className="fa fa-twitter heading-b"></i></a>
                          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><i className="fa fa-linkedin heading-b"></i></a>
                          <a target="_blank" rel="noreferrer" href="https://plus.google.com/"><i className="fa fa-google-plus heading-b"></i></a>
                          <a target="_blank" rel="noreferrer" href="https://vimeo.com/"><i className="fa fa-vimeo-square heading-b"></i></a>
                          <a target="_blank" rel="noreferrer" href="https://www.tumblr.com/"><i className="fa fa-tumblr heading-b"></i></a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="caption">
                    <p>
                      <span className="title">Lynda Smith</span>
                      <br />
                      <span className="highlight">Programmer</span>
                    </p>
                  </div>
                </div>
              </div>
              <h3><span className="highlight">We want to change</span><br />peoples lives</h3>
              <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  <p className="text-center">Aliquam fermentum massa ac est sollicitudin, at ultricies ligula tristique. Cras finibus, nulla ac convallis feugiat, nisl nisl lobortis est, eget auctor velit magna vel nunc. Donec nec eros rhoncus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="view" id="who-we-are">
          <div className="content pane">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 stretch-height pane">
                  <div className="view fluid-height">
                    <img alt="" className="bg" src="images/placeholders/1920x1200-2.jpg" />
                    <div className="content incut colors-d background-transparent">
                      <div className="position-middle-center text-center">
                        <a className="button background-lite-c heading-c" href="#work">View Our Work</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6  stretch-height pane">
                  <div className="view fluid-height">
                    <div className="content incut colors-e background-solid">
                      <div className="position-middle-center">
                        <h3 className="text-left"><span className="highlight">Who</span> We Are</h3>
                        <p className="subtitle highlight"><strong>Quisque dolor lacus, commodo id hendrerit viverra, euismod in odio.</strong></p>
                        <p>Aliquam fermentum massa ac est sollicitudin, at ultricies ligula tristique. Cras finibus, nulla ac convallis feugiat, nisl nisl lobortis est, eget auctor velit magna vel nunc. Donec nec eros rhoncus.</p>
                        <p>Aenean nisi neque, aliquam ut nibh sit amet, finibus sagittis tortor aenean consectetur.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <div className="view">
          <img alt="" className="bg" src="images/placeholders/1920x1200-1.jpg" />
          <div className="content colors-e">
            <div className="container">
              <h2>Services</h2>
              <p className="header-details"><span className="highlight">We Are Here</span> For You</p>
              <p className="lead">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="row">
                <div className="col-md-3 top-line">
                  <h4>Web<br />Design</h4>
                  <p className="highlight">Duis ipsum dolor sit amet incididunt ut labore et dolore magna.</p>
                  <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                  <ul className="simple">
                    <li>Responsive design</li>
                    <li>Template development</li>
                    <li>Rich media banners</li>
                    <li>Frontend development</li>
                    <li>Backend development</li>
                    <li>Content creation</li>
                    <li>Content audit</li>
                    <li>Copywriting</li>
                    <li>Photography</li>
                  </ul>
                </div>
                <div className="col-md-3 top-line">
                  <h4>Internet<br />Marketing</h4>
                  <p className="highlight">Excepteur ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                  <p>Excepteur sint occaecat elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                  <ul className="simple">
                    <li>Facebook advertising</li>
                    <li>SEO and SEM</li>
                    <li>Facebook apps</li>
                    <li>Context advertising</li>
                    <li>Rich media banners</li>
                    <li>Game development</li>
                    <li>Content creation</li>
                    <li>Testing</li>
                  </ul>
                </div>
                <div className="col-md-3 top-line">
                  <h4>Digital<br />production</h4>
                  <p className="highlight">Lorem ipsum dolor sit amet, consectetur adipisicing elit eiusmod consequat.</p>
                  <p>Duis aute irure elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <ul className="simple">
                    <li>Rich media banners</li>
                    <li>Audio production</li>
                    <li>Photography</li>
                    <li>Design</li>
                    <li>Content creation</li>
                    <li>Content audit</li>
                    <li>Project management</li>
                    <li>Technical requirements</li>
                    <li>Testing</li>
                  </ul>
                </div>
                <div className="col-md-3 top-line">
                  <h4>Application<br />Development</h4>
                  <p className="highlight">Commodo ipsum dolor sit amet dolore magna aliqua.</p>
                  <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                  <ul className="simple">
                    <li>Facebook apps</li>
                    <li>Brand immersion &amp; research</li>
                    <li>Competitive analysis</li>
                    <li>Stakeholder interviews</li>
                    <li>Content audit</li>
                    <li>Project/platform planning</li>
                    <li>Technical requirements</li>
                    <li>Testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="view">
          <img alt="" className="bg" src="images/placeholders/1920x1200-2.jpg" /><img alt="" className="bg" src="images/placeholders/1920x1200-0.jpg" /><img alt="" className="bg" src="images/placeholders/1920x1200-1.jpg" />
          <div className="content half-size colors-h">
            <div className="container">
              <div className="show-list slogan">
                <div className="show-item">We Are Designers</div>
                <div className="show-item">We Are Programmers</div>
                <div className="show-item">We Are Coders</div>
                <div className="show-item">We Are Developers</div>
                <div className="show-item">We Are Creative</div>
              </div>
              <div className="separator"></div>
              <p className="text-center big-font">
                <em>— Lorem ipsum dolor sit amet —</em>
              </p>
            </div>
          </div>
        </div>
      </section>
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
              <div className="container-fluid">
                <div className="filter">
                  <ul className="nav nav-pills text-center">
                    <li><a className="hover-effect" data-group="all" href="http://www.starwars.com">All</a></li>
                    <li><a className="hover-effect" data-group="web" href="http://www.starwars.com">Web</a></li>
                    <li><a className="hover-effect" data-group="video" href="http://www.starwars.com">Video</a></li>
                    <li><a className="hover-effect" data-group="photography" href="http://www.starwars.com">Photography</a></li>
                    <li><a className="hover-effect" data-group="design" href="http://www.starwars.com">Design</a> </li>
                  </ul>
                </div>
                <div className="row">
                  <div className="grid">
                    <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["design"]'>
                      <a href="#!portfolio-item-1.html" className="hover-overlay">
                        <img alt="Project 1" src="images/placeholders/500x400-1.jpg" />
                        <div className="overlay background-90-e">
                          <div className="hidden-xs">
                            <p className="title heading-e">Image</p>
                            <p className="text-center heading-e"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                            <p className="text-center"><i className="fa fa-picture-o heading-e"></i></p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["photography", "web", "video"]'>
                      <a href="#!portfolio-item-2.html" className="hover-overlay">
                        <img alt="Project 2" src="images/placeholders/500x400-2.jpg" />
                        <div className="overlay background-90-e">
                          <div className="hidden-xs">
                            <p className="title heading-e">YouTube Video</p>
                            <p className="text-center heading-e"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                            <p className="text-center"><i className="fa fa-youtube-square heading-e"></i></p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["photography", "design"]'>
                      <a href="#!portfolio-item-3.html" className="hover-overlay">
                        <img alt="Project 3" src="images/placeholders/500x400-0.jpg" />
                        <div className="overlay background-90-e">
                          <div className="hidden-xs">
                            <p className="title heading-e">Slider</p>
                            <p className="text-center heading-e"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                            <p className="text-center"><i className="fa fa-th heading-e"></i></p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["photography", "web", "video"]'>
                      <a href="#!portfolio-item-4.html" className="hover-overlay">
                        <img alt="Project 4" src="images/placeholders/500x400-1.jpg" />
                        <div className="overlay background-90-e">
                          <div className="hidden-xs">
                            <p className="title heading-e">Vimeo Video</p>
                            <p className="text-center heading-e"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                            <p className="text-center"><i className="fa fa-vimeo-square heading-e"></i></p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["photography", "design"]'>
                      <a href="#!portfolio-item-5.html" className="hover-overlay">
                        <img alt="Project 5" src="images/placeholders/500x400-2.jpg" />
                        <div className="overlay background-90-e">
                          <div className="hidden-xs">
                            <p className="title heading-e">Slider</p>
                            <p className="text-center heading-e"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                            <p className="text-center"><i className="fa fa-th heading-e"></i></p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["photography", "web", "design"]'>
                      <a href="#!portfolio-item-6.html" className="hover-overlay">
                        <img alt="Project 6" src="images/placeholders/500x400-0.jpg" />
                        <div className="overlay background-90-e">
                          <div className="hidden-xs">
                            <p className="title heading-e">Image</p>
                            <p className="text-center heading-e"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                            <p className="text-center"><i className="fa fa-picture-o heading-e"></i></p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["design", "video", "web"]'>
                      <a href="#!portfolio-item-7.html" className="hover-overlay">
                        <img alt="Project 7" src="images/placeholders/500x400-1.jpg" />
                        <div className="overlay background-90-e">
                          <div className="hidden-xs">
                            <p className="title heading-e">Vimeo Video</p>
                            <p className="text-center heading-e"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                            <p className="text-center"><i className="fa fa-vimeo-square heading-e"></i></p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["web"]'>
                      <a href="#!portfolio-item-8.html" className="hover-overlay">
                        <img alt="Project 8" src="images/placeholders/500x400-2.jpg" />
                        <div className="overlay background-90-e">
                          <div className="hidden-xs">
                            <p className="title heading-e">Image</p>
                            <p className="text-center heading-e"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                            <p className="text-center"><i className="fa fa-picture-o heading-e"></i></p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["photography", "design", "video", "web"]'>
                      <a href="#!portfolio-item-9.html" className="hover-overlay">
                        <img alt="Project 9" src="images/placeholders/500x400-0.jpg" />
                        <div className="overlay background-90-e">
                          <div className="hidden-xs">
                            <p className="title heading-e">YouTube Video</p>
                            <p className="text-center heading-e"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                            <p className="text-center"><i className="fa fa-youtube-square heading-e"></i></p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["photography", "design"]'>
                      <a href="#!portfolio-item-10.html" className="hover-overlay">
                        <img alt="Project 10" src="images/placeholders/500x400-1.jpg" />
                        <div className="overlay background-90-e">
                          <div className="hidden-xs">
                            <p className="title heading-e">Vimeo Video</p>
                            <p className="text-center heading-e"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                            <p className="text-center"><i className="fa fa-vimeo-square heading-e"></i></p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["photography", "web"]'>
                      <a href="#!portfolio-item-11.html" className="hover-overlay">
                        <img alt="Project 11" src="images/placeholders/500x400-2.jpg" />
                        <div className="overlay background-90-e">
                          <div className="hidden-xs">
                            <p className="title heading-e">Image</p>
                            <p className="text-center heading-e"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                            <p className="text-center"><i className="fa fa-picture-o heading-e"></i></p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="item col-md-3 col-sm-4 col-xs-6" data-groups='["web", "design"]'>
                      <a href="#!portfolio-item-12.html" className="hover-overlay">
                        <img alt="Project 12" src="images/placeholders/500x400-0.jpg" />
                        <div className="overlay background-90-e">
                          <div className="hidden-xs">
                            <p className="title heading-e">Slider</p>
                            <p className="text-center heading-e"><strong>Excepteur sint lorem ipsum dolor sit amet consectetur.</strong></p>
                            <p className="text-center"><i className="fa fa-th heading-e"></i></p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="process">
        <div className="view">
          <img alt="" className="bg" src="images/placeholders/1920x1200-1.jpg" /><img alt="" className="bg" src="images/placeholders/1920x1200-2.jpg" />
          <div className="content colors-e">
            <div className="container">
              <h2>Our <span className="highlight">Process</span></h2>
              <p className="header-details"><span className="highlight">We Make</span> Our Customers Happy</p>
              <p className="lead">Curabitur eget nulla ut neque aliquam dictum. Nam sollicitudin leo dui, non malesuada felis aliquam non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus finibus tempor neque vel scelerisque. Cras nec ex ut eleifend mollis ut a nibh. Vivamus commodo est sit amet ultricies.</p>
              <div className="process">
                <div className="row process-row">
                  <div className="col-md-3 process-step">
                    <div className="process-box"><i className="li_search heading"></i></div>
                    <p className="title">Research</p>
                    <p className="text-center">Vestibulum placerat, ipsum vel mollis ornare, libero ex dapibus diam, gravida tempor.</p>
                  </div>
                  <div className="col-md-3 process-step">
                    <div className="process-box"><i className="li_pen heading"></i></div>
                    <p className="title">Concept</p>
                    <p className="text-center">Vestibulum vel dictum dolor, eget luctus risus. Nullam scelerisque viverra nisl et vehicula, in ut tellus.</p>
                  </div>
                  <div className="col-md-3 process-step">
                    <div className="process-box"><i className="li_settings heading"></i></div>
                    <p className="title">Develop</p>
                    <p className="text-center">Mauris venenatis vulputate ligula eu finibus. Donec pretium libero lacus, vitae maximus purus dapibus.</p>
                  </div>
                  <div className="col-md-3 process-step">
                    <div className="process-box"><i className="li_paperplane heading"></i></div>
                    <p className="title">Test</p>
                    <p className="text-center">Proin gravida, est sed vestibulum cursus, enim libero sollicitudin lacus, vel ornare nunc.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  <p className="text-center">Aliquam fermentum massa ac est sollicitudin, at ultricies ligula tristique. Cras finibus, nulla ac convallis feugiat, nisl nisl lobortis est, eget auctor velit magna vel nunc. Donec nec eros rhoncus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="view" id="numbers">
          <img alt="" className="bg" src="images/placeholders/1920x1200-0.jpg" /><img alt="" className="bg" src="images/placeholders/1920x1200-1.jpg" />
          <div className="content half-size colors-h">
            <div className="container-fluid">
              <h3>Our <span className="highlight">Numbers</span></h3>
              <p className="title"><span className="highlight">Some of the</span> cool facts about us</p>
              <div className="row counters">
                <div className="col-md-3 counter background-25-b">
                  <div className="count player row heading background-10-light">210</div>
                  <div className="caption">Projects</div>
                </div>
                <div className="col-md-3 counter background-35-h">
                  <div className="count player row heading background-10-light">120</div>
                  <div className="caption">Clients</div>
                </div>
                <div className="col-md-3 counter background-25-b">
                  <div className="count player row heading background-10-light">3459</div>
                  <div className="caption">Followers</div>
                </div>
                <div className="col-md-3 counter background-35-h">
                  <div className="count player row heading background-10-light">7</div>
                  <div className="caption">Years</div>
                </div>
              </div>
            </div>
            <div className="container">
              <p className="text-center ">Donec vulputate sit amet dolor vel pharetra donec pharetra.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="view">
          <img alt="" className="bg" src="images/placeholders/1920x1200-2.jpg" /><img alt="" className="bg" src="images/placeholders/1920x1200-0.jpg" />
          <div className="content colors-e">
            <div className="container">
              <h2>Our <span className="highlight">Skills</span></h2>
              <p className="header-details"><span className="highlight">Our Main</span> Skills</p>
              <p className="lead">Aliquam scelerisque vestibulum mi, eu commodo sem vestibulum convallis. Proin sed mi vehicula, porta nisi eu, facilisis nisl. Etiam tristique mi nec fermentum vestibulum. Nullam in nisi ut tellus laoreet ultrices. In ullamcorper dictum interdum vestibulum etiam tristique mi nec fermentum commodo sem vestibulum laoreet ultrices.</p>
              <div className="row">
                <div className="col-md-6">
                  <ul className="widget-tabs nav nav-tabs background-lite-e">
                    <li className="active"><a href="#html5" data-toggle="tab">HTML5</a></li>
                    <li className=""><a href="#css3" data-toggle="tab">CSS3</a></li>
                    <li className=""><a href="#jquery-skill" data-toggle="tab">jQuery</a></li>
                    <li className=""><a href="#wordpress" data-toggle="tab">Wordpress</a></li>
                    <li className=""><a href="#seo" data-toggle="tab">SEO</a></li>
                    <li className=""><a href="#photoshop" data-toggle="tab">Photoshop</a></li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade active in" id="html5">
                      <p>Fusce hendrerit enim et lacus rutrum, fermentum consectetur mauris hendrerit. Mauris scelerisque, est eget convallis blandit, lorem est scelerisque dolor, non dapibus orci enim ut risus. Praesent rhoncus ex sit amet nunc luctus, nec eleifend erat suscipit. In feugiat dui eget gravida dignissim. Quisque sed dictum felis. Integer viverra iaculis nulla, a euismod est. Nulla nec felis ipsum. Phasellus sed scelerisque nisl, eu condimentum metus. Aenean convallis risus nec eleifend pharetra. Vivamus rhoncus eleifend mi in imperdiet. Nullam a justo quis dolor viverra elementum. Nam eleifend leo quis elementum cursus.</p>
                    </div>
                    <div className="tab-pane fade" id="css3">
                      <p>Sed dapibus, leo ut egestas convallis, leo purus condimentum ipsum, sit amet lobortis odio nisi id enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi suscipit, mi in interdum volutpat, quam mi porta nisi, dapibus placerat sapien tortor eleifend arcu. Cras sit amet euismod mi, non imperdiet felis. Praesent eros nibh, ullamcorper ut suscipit sit amet, mattis sollicitudin lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis in enim sit amet nibh placerat consectetur id et enim. Nunc nec dui ac ligula posuere posuere vel id metus. Integer maximus eros nec lobortis tempor.</p>
                    </div>
                    <div className="tab-pane fade" id="jquery-skill">
                      <p>Nam eget ex mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam blandit, enim nec rutrum maximus, odio purus maximus odio, vel mattis nisi ante ut velit. Nam ut turpis vel dolor maximus dictum. Donec blandit turpis ut vulputate facilisis. Nam est nisi, posuere vitae posuere in, viverra non tellus. Pellentesque congue, sapien eget sollicitudin sollicitudin, est leo imperdiet ante, facilisis viverra mi augue in leo. Vestibulum felis urna, pharetra et eros ut, mattis consequat mi. Curabitur id tortor mattis, aliquet eros hendrerit, mattis metus. Ut dignissim vel augue in congue. Nulla a ante ut mi scelerisque suscipit. Aenean condimentum turpis mi, sit amet ullamcorper mi commodo non.</p>
                    </div>
                    <div className="tab-pane fade" id="php">
                      <p>Nulla egestas eu odio ac dictum. Phasellus eu odio lectus. Fusce luctus tempor mauris, vel accumsan leo. Nam libero velit, ultrices vel malesuada nec, euismod nec dolor. Maecenas congue erat sed maximus semper. Aliquam vestibulum magna sit amet pulvinar vestibulum. Cras semper condimentum ante, eget suscipit sapien. Sed ac urna nunc. Aenean viverra sem sit amet dolor pretium fringilla. Nam luctus tempus nibh vitae efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    </div>
                    <div className="tab-pane fade" id="wordpress">
                      <p>Fusce non commodo sapien, quis ultrices enim. Proin in placerat urna. Nulla luctus leo nec massa vestibulum consequat quis a quam. Maecenas et leo ut orci fringilla ornare non sit amet lectus. Donec ornare eros tortor, sit amet condimentum lectus placerat ut. Duis lacus neque, lacinia non nunc id, aliquet tincidunt orci. In tellus felis, posuere non est rhoncus, tincidunt elementum sapien. Sed non sagittis ante. Duis ultricies mi dolor, feugiat blandit metus ullamcorper nec. Nullam semper gravida consequat. Suspendisse potenti. Mauris sit amet nisi at enim lacinia dignissim. Aenean suscipit pulvinar ex, eu venenatis magna dapibus sit amet.</p>
                    </div>
                    <div className="tab-pane fade" id="seo">
                      <p>Proin non augue posuere, iaculis tortor in, molestie lorem. Praesent ut gravida sem. Aenean sit amet lorem leo. Curabitur risus ante, pulvinar vel erat viverra, porttitor volutpat turpis. Praesent et sapien interdum, sollicitudin nisi non, bibendum leo. Duis posuere lectus velit, vel volutpat massa blandit non. Donec pellentesque vel magna ut dignissim. Pellentesque luctus fringilla eros, in tempus neque venenatis consectetur. Pellentesque purus mauris, laoreet eget augue in, pellentesque sagittis arcu. Etiam at blandit lectus, sit amet volutpat tellus.</p>
                    </div>
                    <div className="tab-pane fade" id="photoshop">
                      <p>Donec ac consectetur neque, vel eleifend nisi. In et nibh at neque convallis tincidunt. Aliquam sodales odio vel malesuada interdum. Duis auctor malesuada lorem. Nulla sed neque ut dui imperdiet congue ut sit amet enim. Phasellus vel commodo dui. Aliquam eu eleifend diam, vitae dapibus velit. Suspendisse ac est hendrerit, mollis lectus vel, accumsan urna. Quisque sit amet iaculis libero, sed maximus justo. Nunc laoreet non libero eu vehicula. Vestibulum ex lectus, pharetra non elementum et, gravida quis mauris. Donec sodales odio eget accumsan blandit.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skillbars">
                    <div className="skillbar clearfix background-d" data-percent="40%">
                      <div className="skillbar-title background-b heading-b"><span>HTML5</span></div>
                      <div className="skillbar-bar background-b"></div>
                      <div className="skill-bar-percent heading-d">40%</div>
                    </div>
                    <div className="skillbar clearfix background-d" data-percent="45%">
                      <div className="skillbar-title background-c heading-c"><span>CSS3</span></div>
                      <div className="skillbar-bar background-c"></div>
                      <div className="skill-bar-percent heading-d">45%</div>
                    </div>
                    <div className="skillbar clearfix background-d" data-percent="50%">
                      <div className="skillbar-title background-b heading-b"><span>jQuery</span></div>
                      <div className="skillbar-bar background-b"></div>
                      <div className="skill-bar-percent heading-d">50%</div>
                    </div>
                    <div className="skillbar clearfix background-d" data-percent="40%">
                      <div className="skillbar-title background-c heading-c"><span>PHP</span></div>
                      <div className="skillbar-bar background-c"></div>
                      <div className="skill-bar-percent heading-d">40%</div>
                    </div>
                    <div className="skillbar clearfix background-d" data-percent="90%">
                      <div className="skillbar-title background-b heading-b"><span>Wordpress</span></div>
                      <div className="skillbar-bar background-b"></div>
                      <div className="skill-bar-percent heading-d">90%</div>
                    </div>
                    <div className="skillbar clearfix background-d" data-percent="75%">
                      <div className="skillbar-title background-c heading-c"><span>SEO</span></div>
                      <div className="skillbar-bar background-c"></div>
                      <div className="skill-bar-percent heading-d">75%</div>
                    </div>
                    <div className="skillbar clearfix background-d" data-percent="70%">
                      <div className="skillbar-title background-b heading-b"><span>Photoshop</span></div>
                      <div className="skillbar-bar background-b"></div>
                      <div className="skill-bar-percent heading-d">70%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="view">
          <img alt="" className="bg" src="images/placeholders/1920x1200-1.jpg" /><img alt="" className="bg" src="images/placeholders/1920x1200-2.jpg" /><img alt="" className="bg" src="images/placeholders/1920x1200-0.jpg" />
          <div className="content full-size colors-h">
            <div className="container">
              <h2>Contact</h2>
              <p className="header-details">Keep In Touch</p>
              <div className="row">
                <div className="col-md-6">
                  <div className="text-right scroll-in-animation" data-animation="fadeInLeft">
                    <p className="big-font uppercase">
                      Tel: <strong className="highlight">+7 (781) 503-1810</strong>
                    </p>
                    <p className="big-font uppercase">
                      500 Unicorn Park Dr, 21st Floor
                  <br /> Woburn, MA 01801, United States
                </p>
                    <p className="big-font">
                      <b>
                        <a href="mailto:info@ouraddress.com">info@ouraddress.com</a><br />
                        <a href="http://www.ouraddress.com">www.ouraddress.com</a>
                      </b>
                    </p>
                    <p className="big-font">
                      <a target="_blank" rel="noreferrer" href="https://twitter.com/"><span className="fa-stack"><i className="fa fa-circle fa-stack-2x heading"></i><i className="fa fa-twitter fa-stack-1x text-background"></i></span></a>
                      <a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><span className="fa-stack"><i className="fa fa-circle fa-stack-2x heading"></i><i className="fa fa-facebook fa-stack-1x text-background"></i></span></a>
                      <a target="_blank" rel="noreferrer" href="http://www.youtube.com/"><span className="fa-stack"><i className="fa fa-circle fa-stack-2x heading"></i><i className="fa fa-youtube fa-stack-1x text-background"></i></span></a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-left scroll-in-animation" data-animation="fadeInRight">

                  </div>
                </div>
              </div>
              <div className="text-center">
                <a className="map-open button background-lite-b border-heading-b heading-b" data-map-overlay=".map-overlay" href="http://www.starwars.com">Locate Us on Map</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
