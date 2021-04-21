import React from 'react'
import {Switch , Route} from 'react-router'
import About from '../Components/About/About'
import Contact from '../Components/Contact/Contact'
import Navbar from '../Components/Navbar/Navbar'
import Portfolio from '../Components/Portfolio/Portfolio'
const Routes = () => {
    return (
        <>
        <Navbar/>
           <Switch>
               <Route path = "/" exact ><About/></Route>
               <Route exact path = "/projects"  ><Portfolio/></Route>
               <Route exact path = "/contact" ><Contact/></Route>
            </Switch> 
        </>
    )
}

export default Routes
