import React from "react";
import { Link } from "react-router-dom"

const NavTabs = () => (
	<ul className="nav nav-tabs">
  		<li className="nav-item">
  			<Link 
  				to="/news" 
  				className={
  					window.location.pathname === "/news/:searchTerm" ?
  					'nav-link active' : 'nav-link'
  				}>
  					News
  				</Link>
  		</li>
  		<li className="nav-item">
  			<Link 
  				to="/saved" 
  				className={
  					window.location.pathname === "/saved" ?
  					'nav-link active' : 'nav-link'
  				}>
  				Saved
  				</Link>
  		</li>
  	</ul>
);

export default NavTabs;

