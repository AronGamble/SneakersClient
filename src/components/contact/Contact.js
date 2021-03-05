import React from 'react';
import { useQuery, gql } from '@apollo/client';

const authors = gql`
  query GetMessage {
    books{
      author
    }
  }
`;

function Contact() {


  const { loading, error, data } = useQuery(authors);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
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
                        <a href="http://www.ouraddress.com">www.ouraddress.com</a><br />
                        {
                          data.books.map(author =>
                          (<>
                            <a key={author.title} href="http://www.ouraddress.com">{author.author}</a><br />
                            </>
                          ))


                        }
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

export default Contact;