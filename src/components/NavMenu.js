import React from 'react'
import {NavLink } from 'react-router-dom';
import styled from 'styled-components'
import {  MdClose, MdMenu } from "react-icons/md";
const NavMenu = () => {
    const NavMenuStyles = styled.div`
    position: fixed;
    z-index: 100;
    top:0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
background: #FFFFE0;
ul{
    max-width:1200px;
    margin:0 auto;
width: 90%;
text-align: center;
}
li{
    display: inline-block;
    border-radius: 8px
    transition: .3 ease background-color;
    &:hover {
        background-color: white;
    }
}
a{
    display: inline-block;
    font-family: 'RobotoMono Regular';
    padding: 1rem 1rem;
    font-size: 1.5rem;
    color:  #C04000;
    outline: none;
}
.active{
    color: black;
}
.mobile-menu-icon{
    position: absolute;
    right: 1rem;
    top:1rem;
    width:4rem;
    cursor: pointer;
    display: none;
    outline:none;
}
.closeNavIcon{
    display:none;
    
}
@media only screen and (max-width: 768px){
    .mobile-menu-icon{
        display: block; 
    }
}

    `;
    return (
        <NavMenuStyles>
            <div className="mobile-menu-icon">
<MdMenu/>
            </div>
          <ul>
              <div className="closeNavIcon">
                  <MdClose/>
              </div>
              <li> <NavLink to="/pages/Home">Home</NavLink></li>
              <li> <NavLink to="/pages/About">About</NavLink></li>
              <li> <NavLink to="/pages/Projects">Projects</NavLink></li>
              <li> <NavLink to="/pages/Contact">Contact</NavLink></li>
          </ul>
        </NavMenuStyles>
    )
}

export default NavMenu
