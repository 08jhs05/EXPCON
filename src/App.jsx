import React, { useEffect, useState } from 'react';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import Pricing from './components/Pricing'
import Payment from './components/Payment';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

//All styling is done in App.css
import './App.css';

function App() {
    //gets current scroll position of window using usestate hook. then pass it to navigation components as props
    const [section, setSection] = useState('Hero');
    const sectionNames = ['Hero', 'Red', 'Yellow', 'Perks', 'Reviews', 'GetNow', 'Footer'];

    useEffect(() => {
        window.onscroll = () => {
            setSection(sectionNames[Math.floor((window.pageYOffset+80)/1080)]); //convert scroll position value to section names
                                                                                //the 80 added after page y offset is for navigation offset
        }
    });
    
  return (
    <div className="App">
        <BrowserRouter>
            <Navigation section={section}/>
            <Switch>
                <Route exact path="/">
                    <Landing/>
                </Route>
                <Route path="/pricing">
                    <Pricing/>
                </Route>
                <Route path="/payment">
                    <Payment/>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
