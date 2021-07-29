import React, { useEffect, useState } from 'react';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import Pricing from './components/Pricing'
import { Route, BrowserRouter, Switch } from 'react-router-dom';

//All styling is done in App.css
import './App.css';

function App() {
    //this part gets current scroll position of window using usestate hook.
    const [scrollPosition, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
        setOffset(window.pageYOffset)
        }
    }, []);

  return (
    <div className="App">
        <Navigation />
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Landing/>
                </Route>
                <Route path="/pricing">
                    <Pricing/>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
