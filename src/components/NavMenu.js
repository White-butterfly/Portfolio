import React, { useState } from 'react'
import {NavLink } from 'react-router-dom';
import styled from 'styled-components'
import {  MdClose, MdMenu } from "react-icons/md";
const NavMenu = () => {
    const [showNav, SetShowNav]= useState(false);
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
    *{
        pointer-events: none;
    }
}
.closeNavIcon{
    display:none;
    
}
.all{
    background-color:#D3D3D3;
}
@media only screen and (max-width: 768px){
    padding: 0;
    .hide-item{
       transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon{
        display: block; 
    }
    .navItems{
        --top: 1rem;
        transitions: .3s ease transform;
        background-color: #D2f8d2;
        padding: 2rem;
        width: 90%;
        max-width: 300px;
        border-radius: 12px;
        position: absolute;
        right: 1rem;
        top: var(--top);
        .closeNavIcon {
            display: block;
            width: 3rem;
            margin: 0 0 0 auto;
            cursor:pointer;
            * {
                pointer-events: none;
            }

        }
        li{
            display: block;
            margin-bottom: .5rem;

        }
    }
  
}

    `;
    return (
        <>
       <div className="all">
           
        <NavMenuStyles>
            <div className="mobile-menu-icon"
              onClick={()=> SetShowNav(!showNav)}
              role= "button"
              onKeyDown={()=>SetShowNav(!showNav)}
              tabIndex={0}>
<MdMenu/>
            </div>
          <ul className= {!showNav ? 'navItems hide-item' : 'navItems'}>
              <div className="closeNavIcon"
              onClick={()=> SetShowNav(!showNav)}
              role= "button"
              onKeyDown={()=>SetShowNav(!showNav)}
              tabIndex={0}>
                  <MdClose/>
              </div>
              <li> <NavLink to="/"
                 onClick={()=> SetShowNav(!showNav)}
                 role= "button"
                 onKeyDown={()=>SetShowNav(!showNav)}
                 tabIndex={0}>Home</NavLink></li>

              <li> <NavLink to="/pages/About"
                 onClick={()=> SetShowNav(!showNav)}
                 role= "button"
                 onKeyDown={()=>SetShowNav(!showNav)}
                 tabIndex={0}>About</NavLink></li>

              <li> <NavLink to="/pages/Projects"
                 onClick={()=> SetShowNav(!showNav)}
                 role= "button"
                 onKeyDown={()=>SetShowNav(!showNav)}
                 tabIndex={0}>Projects</NavLink></li>

              <li> <NavLink to="/pages/Contact"
                 onClick={()=> SetShowNav(!showNav)}
                 role= "button"
                 onKeyDown={()=>SetShowNav(!showNav)}
                 tabIndex={0}>Contact</NavLink></li>
          </ul>
        </NavMenuStyles>
    
        </div>
        </>
    )
}

export default NavMenu
