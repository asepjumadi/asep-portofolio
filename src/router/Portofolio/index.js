import React, { Component } from 'react';
import '../../style/sass/portofolio.scss'
import ReactDOM from 'react-dom'
import classNames from 'classnames';
class Portofolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post:null,
      theposition:0,
      active:0,
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
    
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  listenToScroll = () => {
    const winScroll =document.body.scrollTop || document.documentElement.scrollTop
  console.log("ok saya klik")
  console.log(winScroll)
    const height = document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  console.log(height)
    const scrolled = winScroll / height
  // console.log(scrolled)
  if(scrolled < 0.1){
    this.setState({active:1})
  }else if(scrolled>0.1 && scrolled<= 0.19){
    this.setState({active:2})
  }else if(scrolled>0.19 && scrolled<=0.29){
    this.setState({active:3})
  }else if(scrolled>0.29 && scrolled<=0.40){
    this.setState({active:4})
  }else if(scrolled>0.40 && scrolled<=0.49){
    this.setState({active:5})
  }else if(scrolled>0.49 && scrolled<=0.58){
    this.setState({active:6})
  }else if(scrolled>0.58 && scrolled<=0.68){
    this.setState({active:7})
  }else if(scrolled>0.68 && scrolled<=0.78){
    this.setState({active:8})
  }else if(scrolled>0.78){
    this.setState({active:9})
  }
   this.setState({
      theposition: scrolled
    });
  
}
  render() {
    console.log(this.state.theposition)
    console.log(this.state.active)
    return (
    <div className="htmlwash">
        <div className="bodywash">
        <nav className="navwash">
          <ul>
            <li className="li1"><a href="#section-1" >Section 1</a></li>
            <li className="li2"><a href="#section-2">Section 2</a></li>
            <li className="li3"><a href="#section-3">Section 3</a></li>
            <li className="li4"><a href="#section-4">Section 4</a></li>
            <li className="li5"><a href="#section-5">Section 5</a></li>
            <li className="li6"><a href="#section-6">Section 6</a></li>
            <li className="li7"><a href="#section-7">Section 7</a></li>
            <li className="li8"><a href="#section-8">Section 8</a></li>
            <li className="li9"><a href="#section-9">Section 9</a></li>
          </ul>
        </nav>
        <main className="mainwash">
          <section id="section-1">
            <h1>Section 1</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?</p>
          </section>
          <section id="section-2">
            <h1>Section 2</h1>
            <p>Ratione nulla nam, ipsa dignissimos corrupti veniam nostrum, laudantium asperiores sequi numquam placeat velit voluptate in praesentium non labore unde incidunt laborum maxime quae magni.</p>
          </section>
          <section id="section-3">
            <h1>Section 3</h1>
            <p>Soluta quibusdam ad nostrum vel voluptate delectus sequi dolores quia quaerat officia corrupti, aperiam fugit facere debitis repudiandae praesentium sapiente inventore repellendus, nemo commodi alias!</p>
          </section>
          <section id="section-4">
            <h1>Section 4</h1>
            <p>Aliquid aliquam magnam ducimus similique obcaecati, unde exercitationem laborum incidunt, quas in ipsum inventore nostrum? Blanditiis optio cumque earum iste odio! Alias sint accusamus repudiandae.</p>
          </section>
          <section id="section-5">
            <h1>Section 5</h1>
            <p>Officia ipsum fugit iure eaque quisquam error tempore earum enim illum, delectus officiis incidunt corrupti aliquid nam quas perspiciatis eveniet doloremque quod labore? Doloremque, ipsum?</p>
          </section>
          <section id="section-6">
            <h1>Section 6</h1>
            <p>Aperiam repellat dignissimos fugiat possimus esse, suscipit neque nisi libero alias obcaecati ipsam, porro illo corrupti nostrum reprehenderit unde, illum in laudantium impedit. Modi, veniam.</p>
          </section>
          <section id="section-7">
            <h1>Section 7</h1>
            <p>Cum asperiores temporibus itaque consequatur quod inventore, quia quis explicabo dicta esse minus voluptatem reiciendis eveniet animi, necessitatibus illum dolorem doloremque repellat placeat, dolores eaque.</p>
          </section>
          <section id="section-8">
            <h1>Section 8</h1>
            <p>Optio qui, omnis itaque rerum iusto molestiae necessitatibus deleniti quod tenetur id perspiciatis voluptatum dolorum quisquam eius ipsum non architecto labore! Distinctio, tenetur. Officiis, necessitatibus?</p>
          </section>
          <section id="section-9">
            <h1>Section 9</h1>
            <p>Rem iste iure blanditiis excepturi esse nisi corrupti sequi, illo, laborum quo quis quaerat assumenda perspiciatis quod fuga vel laudantium doloribus architecto tempora omnis earum!</p>
          </section>
        </main>
      </div>
    </div>
    );
  }
}

export default Portofolio;
