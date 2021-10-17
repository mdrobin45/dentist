import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Home from './Components/Pages/Home/Home';
import NotFound from './Components/Pages/NotFound/NotFound';
import Services from './Components/Pages/Services/Services';

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/home'>
            <Home/>
          </Route>
          <Route exact path='/about'>
            <About/>
          </Route>
          <Route exact path='/services'>
            <Services/>
          </Route>
          <Route exact path='/contact'>
            <Contact/>
          </Route>
          <Route exact path='*'>
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
};

export default App;