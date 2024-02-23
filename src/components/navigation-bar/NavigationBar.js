// rfc  short-cut to create the default functional component
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/components-style/navigationBar.css';

export default function NavigationBar() {
  return (
    <div className='navBarHomePage'>

        <div className='navLeft'>
            <NavLink>Crafts Of Ceylon </NavLink>
        </div>

        <div className='navMiddle' id='cc'>
            <NavLink>Home</NavLink>     {/* In the home i want to give the user a overview of the variety before the Shop, horizontal scroll and all */}
            <NavLink>Shop</NavLink>
            <NavLink to="/">About Us</NavLink>
            <NavLink>Contacts</NavLink>
        </div>

        <div className='navRight'>
          <NavLink>User</NavLink>
          <NavLink>Sign In</NavLink>

        </div>        
    </div>
  )
}
