import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Home from './Components/Pages/Home/Home';
import NotFound from './Components/Pages/NotFound/NotFound';
import Services from './Components/Pages/Services/Services';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import Service from './Components/Service/Service';



const App = () =>
{
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <PrivetRoute exact path='/services'>
            <Services />
          </PrivetRoute>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/service/:idService'>
            <Service/>
          </Route>
          <Route exact path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;