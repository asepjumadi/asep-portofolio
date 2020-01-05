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
            <p className="header-title"  >About Me</p>
          </div>
      </div>
      </div>
    </div>
    );
  }
}

export default About;
