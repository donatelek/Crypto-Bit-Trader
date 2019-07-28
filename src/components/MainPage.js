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
class MainPage extends Component {
  state = {}
  render() {
    return (
      <main>
        <section class="hero">
          <div class="container">
            <div class="hero-inner">
              <div class="hero-copy">
                <h1 class="hero-title mt-0">CRYPTO BIT-TRADER</h1>
                <p class="hero-paragraph">All in one tool for cryptocurrency traders
                  </p>
                <div class="hero-cta"><Link to='/register' class="button button-primary" href="#">Getting Started</Link></div>
              </div>
              <div class="hero-figure anime-element">
                <img src={banner} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section class="features section">
          <div class="container">
            <h1 class='featureTitle'>Why Choose Crypto Bit-Trader?</h1>
            <div class="features-inner section-inner has-bottom-divider">
              <div class="features-wrap">
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img src={logo3} alt="Feature 01" />
                    </div>
                    <h4 class="feature-title mt-24">Fast & Simple Usage</h4>
                    <p class="text-sm mb-0">Our tool is very simple to use so that You can start trading so fast. It is also very customizable so that You can adjust it to yourself.</p>
                  </div>
                </div>
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img src={icon1} alt="Feature 01" />
                    </div>
                    <h4 class="feature-title mt-24">100% Secure</h4>
                    <p class="text-sm mb-0">We keep your account 100% secure by encrypting all your data. Also We do not store Your API keys so that no one can steal your money.</p>
                  </div>
                </div>
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img src={icon2} alt="Feature 01" />
                    </div>
                    <h4 class="feature-title mt-24">24/7 Service</h4>
                    <p class="text-sm mb-0">Receive immediate feedback. Chat live, 24/7, with our professional multilingual Customer Support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="features section">
          <h1 class='featureTitle'>All Trading Tools In One Place</h1>
          <div class="container">
            <div class="features-inner section-inner has-bottom-divider">
              <div class="features-wrap">
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img src={tools6} alt="Feature 01" />
                    </div>
                    <h4 class="feature-title mt-24">Cryptocurrency Calculator</h4>
                    <p class="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat
                      nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis.
                        Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                  </div>
                </div>
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img src={tools1} alt="Feature 01" />
                    </div>
                    <h4 class="feature-title mt-24">Bybit/Bitmex Orders Scaler</h4>
                    <p class="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat
                      nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis.
                        Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                  </div>
                </div>
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img src={tools2} alt="Feature 01" />
                    </div>
                    <h4 class="feature-title mt-24">Shorts/Longs Counter</h4>
                    <p class="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat
                      nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis.
                        Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                  </div>
                </div>
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img src={tools3} alt="Feature 01" />
                    </div>
                    <h4 class="feature-title mt-24">Orderbook</h4>
                    <p class="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat
                      nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis.
                        Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                  </div>
                </div>
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img src={tools4} alt="Feature 02" />
                    </div>
                    <h4 class="feature-title mt-24">Cryptocurrency Price Charts</h4>
                    <p class="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat
                      nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis.
                        Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                  </div>
                </div>
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img src={tools5} alt="Feature 03" />
                    </div>
                    <h4 class="feature-title mt-24">Live Prices</h4>
                    <p class="text-sm mb-0">Fermentum posuere urna nec tincidunt praesent semper feugiat
                      nibh. A arcu cursus vitae congue mauris. Nam at lectus urna duis convallis.
                        Mauris rhoncus aenean vel elit scelerisque mauris.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="pricing section">
          <div class="container-sm">
            <div class="pricing-inner section-inner">
              <div class="pricing-header text-center">
                <h2 class="section-title mt-0">Unlimited for all</h2>
                <p class="section-paragraph mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad quis nostrud.
                  </p>
              </div>
              <div class="pricing-tables-wrap">
                <div class="pricing-table">
                  <div class="pricing-table-inner is-revealing">
                    <div class="pricing-table-main">
                      <div class="pricing-table-header pb-24">
                        <div class="pricing-table-price"><span
                          class="pricing-table-price-currency h2"></span><span
                            class="pricing-table-price-amount h1">Free</span><span
                              class="text-xs">/month</span></div>
                      </div>
                      <div class="pricing-table-features-title text-xs pt-24 pb-24">What you will get
                        </div>
                      <ul class="pricing-table-features list-reset text-xs">
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
                    <div class="pricing-table-cta mb-8">
                      <Link to='/register' class="button button-primary button-shadow button-block" href="#">Try
                          Now!</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="features section">
          <h1 class='featureTitle'>They love Crypto Bit-Trader</h1>
          <div class="container">
            <div class="features-inner section-inner has-bottom-divider">
              <div class="features-wrap">
                <div class="feature text-center is-revealing">
                  <div class="feature-inner ">
                    <div class="feature-icon feedback-icon">
                      <img src={user3} alt="Feature 01" />
                    </div>
                    <h4 class="feature-title mt-24">Tana Casson</h4>
                    <p class="text-sm mb-0">"This is unbelievable. After using Bit-Trader, I'm earning
                      more money on trades."
                      </p>
                  </div>
                </div>
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon feedback-icon">
                      <img src={user2} alt="Feature 02" />
                    </div>
                    <h4 class="feature-title mt-24">Tess Rexford</h4>
                    <p class="text-sm mb-0">"Great job, I will definitely be using Bit-Trader again! I
                      don't know what else to say. This website is the most valuable business resource
                        I have EVER used."</p>
                  </div>
                </div>
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon feedback-icon">
                      <img src={user1} alt="Feature 03" />
                    </div>
                    <h4 class="feature-title mt-24">Brennan Butler</h4>
                    <p class="text-sm mb-0">"I'm very surprised that They care so much about their
                        customers!"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="cta section">
          <div class="container">
            <div class="cta-inner section-inner">
              <h3 class="section-title mt-0">Get Free 10$ Bonus</h3>
              <div class="cta-cta">
                <Link to='/register' class="button button-primary button-wide-mobile" href="#">Register Now</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default MainPage;