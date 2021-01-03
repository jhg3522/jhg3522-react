import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';
import { ReactComponent as Home } from "./img/home.svg";
import { ReactComponent as Info } from "./img/man.svg";
import { ReactComponent as TimeLine } from "./img/timeline.svg";

function Header(props){
 return (
     <div className='Header'>
         <h1>Wink-Book</h1>
         <ul>
             <li><NavLink exact to="/"><Home  height={33} /></NavLink></li>
             <li><NavLink to="/information"><Info height={33}/></NavLink></li>
             <li><NavLink to="/TimelinePage"><TimeLine height={33}/></NavLink></li>
         </ul>
     </div>
 )
}

export default Header