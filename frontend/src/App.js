import './App.css';
import React from 'react';
import Home from './COMPONENTS/Home';
import Navbar from './COMPONENTS/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './COMPONENTS/Login';
import Cr_ac from './COMPONENTS/Cr_ac';
import List_todo from './COMPONENTS/List_todo';
import Create_todo from './COMPONENTS/Create_todo';
import About from './COMPONENTS/About';
import Contact from './COMPONENTS/Contact';
import Blogs from './COMPONENTS/Blogs';

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" exact component={Login} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Cr_ac" exact component={Cr_ac} />
            <Route path="/Create_todo" exact component={Create_todo} />
            <Route path="/About" exact component={About} />
            <Route path="/Contact" exact component={Contact} />
            <Route path="/Blogs" exact component={Blogs} />
            <Route path="/Create_todo/:id" exact component={Create_todo} />

            <Route path="/List_todo" exact component={List_todo} />
          

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
