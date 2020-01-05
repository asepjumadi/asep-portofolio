import React, { Component } from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom';
import { MDBBtn,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
// import 'mdbreact/dist/css/mdb.css';
import '../../style/sass/home.scss'
import '../../index.scss'
function Navigations(){
 
 return (
  <header id="navigation" class="p-navigation ">
  <div class="p-navigation__row--full-width ">
    <div class="p-navigation__banner">
      <div class="p-navigation__logo">
      <Link to="/">
        <a class="p-navigation__link align-items-center" href="#">
        <p style={{color:'white',marginRight:15,fontWeight:'bold'}}>Asep's Portofolio</p>
        </a>
        </Link>
      </div>
      <a href="#navigation" class="p-navigation__toggle--open" title="menu"><img src={require('../../assets/icons/menu-1.png')} style={{color:'white',height:20,width:20}} alt="icon_open"/></a>
      <a href="#navigation-closed" class="p-navigation__toggle--close" title="close menu">Close menu</a>
    </div>
    <nav class="p-navigation__nav">
      <span class="u-off-screen">
        <a href="#main-content">Jump to main content</a>
      </span>
      <ul class="p-navigation__links" role="menu">
        <li class="p-navigation__link " role="menuitem">
        <Link to="/">
        <a>Home</a>
        </Link>
        </li>
        <li class="p-navigation__link" role="menuitem">
        <Link to="/about">
        <a>About</a>
        </Link>
        </li>
        <li class="p-navigation__link" role="menuitem">
        <Link to="/abilities">
        <a>Services</a>
        </Link>  
        </li>
        <li class="p-navigation__link" role="menuitem">
        <Link to="/portofolio">
        <a>Portofolio</a>
        </Link>
        </li>
        <li class="p-navigation__link" role="menuitem">
        <Link to="/experience">
        <a>Blog</a>
        </Link>
        </li>
       
      </ul>
    </nav>
  </div>
</header>
    );
}

export default Navigations;
