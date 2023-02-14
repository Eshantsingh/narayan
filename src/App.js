import React from 'react'

import "./App.css";
import Navbar from './components/Navbar';
import Feeds from './components/Feeds';
import Indian from './components/Indian';
import Stocks from './components/Stocks';
import Mobiles from './components/Mobiles';
//import Login from './components/Login';

import Footer from './components/Footer';
import { Route} from "react-router-dom";


const App =()=> {
  return (
    <>
         <Navbar/>

<Route exact path="/">
<Feeds />
</Route>

<Route path="/Indian">
<Indian />
</Route>

<Route path="/Stocks">
<Stocks />
</Route>

<Route path="/Mobiles">
<Mobiles />
</Route>

<Footer/>
</>

  )
}

export default App