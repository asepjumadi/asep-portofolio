import React, { Component } from 'react';
import '../../style/sass/about.scss'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <div>
      <div className="aboutbg" style={{width:window,height:600}}>
        <div className="abouttrans">
            <div className="aboutcard row"  >
              <h1 className="header-title"  >About Me</h1>
            </div>
        </div>
      </div>
    <div className="center--position">      
      <div class="p-media-object u-align--center ">
          <div class="p-media-object__details">
            <h3 class="p-media-object__title">
              <a href="#">Special my Motto and motivation</a>
            </h3>
            <blockquote class="p-pull-quote">
              <p class="p-pull-quote__quote">working wholeheartedly to create digital products that are beneficial to humanity's progress, failure will not make me give up on changing the future.</p>
              <cite class="p-pull-quote__citation">Asep Jumadi, junior Software Engineer at freelance indonesia</cite>
            </blockquote>
          </div>
        </div>
        
      </div>
      <ul class="p-matrix u-clearfix">
        <li class="p-matrix__item">
          <img class="p-matrix__img" src="https://assets.ubuntu.com/v1/60d9b81e-picto-canonical.svg" alt="icon"/>
          <div class="p-matrix__content">
            <h3 class="p-matrix__title"><a class="p-matrix__link" href="#">Canonical</a></h3>
            <div class="p-matrix__desc">
              <p>Canonical is the global software company behind Ubuntu and is the number-one Ubuntu services provider</p>
            </div>
          </div>
        </li>
        <li class="p-matrix__item">
          <img class="p-matrix__img" src="https://assets.ubuntu.com/v1/c4f35e06-products-hero-ubuntu.svg" alt="icon"/>
          <div class="p-matrix__content">
            <h3 class="p-matrix__title"><a class="p-matrix__link" href="#">Ubuntu</a></h3>
            <div class="p-matrix__desc">
              <p>The world’s most popular Linux for servers, desktops and things, with enterprise support and enhanced security by Canonical</p>
            </div>
          </div>
        </li>
        <li class="p-matrix__item">
          <img class="p-matrix__img" src="https://assets.ubuntu.com/v1/0de4fcd5-logo-maas-icon.svg" alt="icon"/>
          <div class="p-matrix__content">
            <h3 class="p-matrix__title"><a class="p-matrix__link" href="#">MAAS</a></h3>
            <p class="p-matrix__desc">Create a bare-metal cloud with Metal as a Service for IPAM and provisioning</p>
          </div>
        </li>
      </ul>
      <div className="u-align--center">
      <iframe width="800" height="500" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">
          </iframe>
      </div>
      
    </div>
    );
  }
}

export default About;
