import React from 'react';
import {NavLink} from 'react-router-dom';

function NavHome(){
  return(
    <React.Fragment>
    	<ul type="none" className="navbar">
    		<li>
		    	<NavLink style={{textDecoration: 'none',color:'white'}} to="/"> 
		      		Home
		     	</NavLink>
		    </li>
		    <li>
		    	<NavLink style={{textDecoration: 'none',color:'white'}} to="/temp"> 
		      		Temperature App
		     	</NavLink>
		    </li>
		    <li>
		    	<NavLink style={{textDecoration: 'none',color:'white'}} to="/resume"> 
		      		Resume App
		     	</NavLink>
		    </li>
		    <li>
		    	<NavLink style={{textDecoration: 'none',color:'white'}} to="/form"> 
		      		Form App
		     	</NavLink>
		    </li>
		    <li>
		    	<NavLink style={{textDecoration: 'none',color:'white'}} to="/zomato"> 
		      		Zomato App
		     	</NavLink>
		    </li>
		</ul>
    </React.Fragment>
    )
}

export default NavHome;