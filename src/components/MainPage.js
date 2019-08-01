import React, { Component } from 'react';
import banner from '../images/banner.png'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import logo3 from '../images/logo3.png'
import tools1 from '../images/tools1.png'
import tools2 from '../images/tools2.png'
import tools3 from '../images/tools3.png'
import tools4 from '../images/tools4.png'
import tools5 from '../images/tools5.png'
import tools6 from '../images/tools6.png'
import user1 from '../images/user1.jpg'
import user2 from '../images/user2.jpg'
import user3 from '../images/user3.jpg'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Reveal';

class MainPage extends Component {
  state = {}
  render() {
    return (
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-copy">
                <Fade>
                  <h1 className="hero-title mt-0 is-revealing14" ref='huh'>CRYPTO BIT-TRADER</h1>
                  <p className="hero-paragraph is-revealing15">All in one tool for cryptocurrency traders
                  </p>
                  <div className="hero-cta is-revealing16" ><Link to='/register' className="button button-primary" href="#">Getting Started</Link></div>
                </Fade>
              </div>
              <Fade>
                <div className="hero-figure anime-element is-revealing17" >
                  <img src={banner} alt="" />
                </div>
              </Fade>
            </div>
          </div>
        </section>
        <section className="features section">
          <div className="container">
            <h1 className='featureTitle'>Why Choose Crypto Bit-Trader?</h1>
            <div className="features-inner section-inner has-bottom-divider">
              <div className="features-wrap">
                <div className="feature text-center is-revealing1">
                  <Fade>
                    <div className="feature-inner">
                      <div className="feature-icon">
                        <img src={logo3} alt="Feature 01" />
                      </div>
                      <h4 className="feature-title mt-24">Fast & Simple Usage</h4>
                      <p className="text-sm mb-0">Our tool is very simple to use so that You can start trading so fast. It is also very customizable so that You can adjust it to yourself.</p>
                    </div>
                  </Fade>
                </div>
                <div className="feature text-center is-revealing2">
                  <Fade>
                    <div className="feature-inner">
                      <div className="feature-icon">
                        <img src={icon1} alt="Feature 01" />
                      </div>
                      <h4 className="feature-title mt-24">100% Secure</h4>
                      <p className="text-sm mb-0">We keep your account 100% secure by encrypting all your data. Also We do not store Your API keys so that no one can steal your money.</p>
                    </div>
                  </Fade>
                </div>
                <div className="feature text-center is-revealing3">
                  <Fade>
                    <div className="feature-inner">

                      <div className="feature-icon">
                        <img src={icon2} alt="Feature 01" />
                      </div>
                      <h4 className="feature-title mt-24">24/7 Service</h4>
                      <p className="text-sm mb-0">Receive immediate feedback. Chat live, 24/7, with our professional multilingual Customer Support.</p>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features section">
          <h1 className='featureTitle'>All Trading Tools In One Place</h1>
          <div className="container">
            <div className="features-inner section-inner has-bottom-divider">
              <div className="features-wrap">
                <div className="feature text-center is-revealing4">
                  <Fade>
                    <div className="feature-inner">
                      <div className="feature-icon">
                        <img src={tools6} alt="Feature 01" />
                      </div>
                      <h4 className="feature-title mt-24">Cryptocurrency Calculator</h4>
                      <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat
                        nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis.
                        Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                    </div>
                  </Fade>
                </div>
                <div className="feature text-center is-revealing5">
                  <Fade>
                    <div className="feature-inner">
                      <div className="feature-icon">
                        <img src={tools1} alt="Feature 01" />
                      </div>
                      <h4 className="feature-title mt-24">Bybit/Bitmex Orders Scaler</h4>
                      <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat
                        nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis.
                        Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                    </div>
                  </Fade>
                </div>
                <div className="feature text-center is-revealing6">
                  <Fade>
                    <div className="feature-inner">
                      <div className="feature-icon">
                        <img src={tools2} alt="Feature 01" />
                      </div>
                      <h4 className="feature-title mt-24">Shorts/Longs Counter</h4>
                      <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat
                        nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis.
                        Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                    </div>
                  </Fade>
                </div>
                <div className="feature text-center is-revealing7">
                  <Fade>
                    <div className="feature-inner">
                      <div className="feature-icon">
                        <img src={tools3} alt="Feature 01" />
                      </div>
                      <h4 className="feature-title mt-24">Orderbook</h4>
                      <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat
                        nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis.
                        Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                    </div>
                  </Fade>
                </div>
                <div className="feature text-center is-revealing8">
                  <Fade>
                    <div className="feature-inner">
                      <div className="feature-icon">
                        <img src={tools4} alt="Feature 02" />
                      </div>
                      <h4 className="feature-title mt-24">Cryptocurrency Price Charts</h4>
                      <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat
                        nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis.
                        Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                    </div>
                  </Fade>
                </div>
                <div className="feature text-center is-revealing9">
                  <Fade>
                    <div className="feature-inner">
                      <div className="feature-icon">
                        <img src={tools5} alt="Feature 03" />
                      </div>
                      <h4 className="feature-title mt-24">Live Prices</h4>
                      <p className="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat
                        nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis.
                        Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pricing section">
          <div className="container-sm">
            <div className="pricing-inner section-inner">
              <div className="pricing-header text-center">
                <h2 className="section-title mt-0">Unlimited for all</h2>
                <p className="section-paragraph mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad quis nostrud.
                  </p>
              </div>
              <div className="pricing-tables-wrap">
                <div className="pricing-table">
                  <div className="pricing-table-inner is-revealing10">
                    <div className="pricing-table-main">
                      <div className="pricing-table-header pb-24">
                        <div className="pricing-table-price"><span
                          className="pricing-table-price-currency h2"></span><span
                            className="pricing-table-price-amount h1">Free</span><span
                              className="text-xs">/month</span></div>
                      </div>
                      <div className="pricing-table-features-title text-xs pt-24 pb-24">What you will get
                        </div>
                      <ul className="pricing-table-features list-reset text-xs">
                        <li>
                          <span>Entry to open beta</span>
                        </li>
                        <li>
                          <span>Cryptocurrency Calculator</span>
                        </li>
                        <li>
                          <span>Bybit/Bitmex Orders Scaler</span>
                        </li>
                        <li>
                          <span>10$ Welcome Bonus</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-table-cta mb-8">
                      <Link to='/register' className="button button-primary button-shadow button-block" href="#">Try
                          Now!</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features section">
          <h1 className='featureTitle'>They love Crypto Bit-Trader</h1>
          <div className="container">
            <div className="features-inner section-inner has-bottom-divider">
              <div className="features-wrap">
                <div className="feature text-center is-revealing11">
                  <Fade>
                    <div className="feature-inner ">
                      <div className="feature-icon feedback-icon">
                        <img src={user3} alt="Feature 01" />
                      </div>
                      <h4 className="feature-title mt-24">Tana Casson</h4>
                      <p className="text-sm mb-0">"This is unbelievable. After using Bit-Trader, I'm earning
                        more money on trades."
                      </p>
                    </div>
                  </Fade>
                </div>
                <div className="feature text-center is-revealing12">
                  <Fade>
                    <div className="feature-inner">
                      <div className="feature-icon feedback-icon">
                        <img src={user2} alt="Feature 02" />
                      </div>
                      <h4 className="feature-title mt-24">Tess Rexford</h4>
                      <p className="text-sm mb-0">"Great job, I will definitely be using Bit-Trader again! I
                        don't know what else to say. This website is the most valuable business resource
                        I have EVER used."</p>
                    </div>
                  </Fade>
                </div>
                <div className="feature text-center is-revealing13">
                  <Fade>
                    <div className="feature-inner">
                      <div className="feature-icon feedback-icon">
                        <img src={user1} alt="Feature 03" />
                      </div>
                      <h4 className="feature-title mt-24">Brennan Butler</h4>
                      <p className="text-sm mb-0">"I'm very surprised that They care so much about their
                        customers!"</p>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta section">
          <div className="container">
            <div className="cta-inner section-inner">
              <h3 className="section-title mt-0">Get Free 10$ Bonus</h3>
              <div className="cta-cta">
                <Link to='/register' className="button button-primary button-wide-mobile" href="#">Register Now</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default MainPage;