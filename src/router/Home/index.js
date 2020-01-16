import React, { Component } from 'react';
import '../../style/sass/home.scss';
import anime from 'animejs/lib/anime.es.js';


class Home extends Component {
  constructor() {
    super();
    this.activeLink = null;
    this.markerPaths = [];
    this.rendered = false;
  }


  render() {
    return (
    <div className="_home " >
      <div  className="row ">
        <div  className="col-7">
          <h4 className="line-drawing-demo" style={{color:'white',fontWeight: 'bold',paddingTop:80}}> Hi,I'am Asep</h4>
            <h3 className="line-progress" style={{color:'white',fontWeight: 'bold',paddingTop:20,paddingLeft:5}}> WEB DEVELOPER </h3>
          <h3 className="line-progress2" style={{color:'white',fontWeight: 'bold',paddingTop:20,paddingLeft:5}}>MOBILE DEVELOPER</h3>
        </div>
        <div className="home_aspect_ratio col-4">
          <img src={require('../../assets/image/asep.png')} className="p-image--shadowed p_image--aspect" />
        </div>
      </div>
      <ul class="p-inline-images">
            <h3 className="line-progress3" style={{color:'white',fontWeight: 'bold'}}>CI/CD Tools</h3>
          <li class="p-inline-images__item">
            <img class="p-inline-images__logo" src={require('../../assets/image/heroku.png')} alt="Placeholder image"/>
            <h3 style={{color:'white'}}>HeroKu</h3>
          </li>
          <li class="p-inline-images__item ">
            <img class="p-inline-images__logo" src={require('../../assets/image/Octocat.png')} alt="Placeholder image"/>
            <h3 style={{color:'white'}}>GitHub</h3>
          </li>
          <li class="p-inline-images__item">
            <img class="p-inline-images__logo" src={require('../../assets/image/netlify.svg')} alt="Placeholder image"/>
            <h3 style={{color:'white'}}>Netlify</h3>
          </li>
          <li class="p-inline-images__item">
            <img class="p-inline-images__logo" src={require('../../assets/image/git.png')} tintColor="white" style={{width:100,height:200}} alt="Placeholder image"/>
            <h3 style={{color:'white'}}>Git</h3>
          </li>
          <li class="p-inline-images__item">
              <img class="p-inline-images__logo" src={require('../../assets/image/aws.png')} style={{width:100,height:200}} alt="Placeholder image"/>
              <h3 style={{color:'white'}}>AWS S3</h3>
          </li>
      </ul>
    </div>
    );
  }
}
//style={{height:window,width:window}}
export default Home;
