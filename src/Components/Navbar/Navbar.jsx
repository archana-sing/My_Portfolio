import React from 'react'
import Styles from './Navbar.module.css'
import{ Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className = {Styles.header}>
           <Link className = {Styles.link} to = "/My_Portfolio">About</Link> 
           <Link className = {Styles.link} to = "/projects">Projects</Link> 
           <Link className = {Styles.link} to = "/contact">Contact me</Link> 
        </div>
    )
}

export default Navbar
