import React, { Component } from 'react';
// import { Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar from './components/NavigationBar/NavigationBar';
import Songs from './Pages/Songs/Songs';
import Album from './Pages/Album/Album';
import Artist from './Pages/Artist/Artist';
import Genre from './Pages/Genre/Genre';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Router>
      <NavigationBar />
      <Routes>
        <Route exact path='/songs' component={Songs} />
        <Route exact path='/album' component={Album} />
        <Route exact path='/artist' component={Artist} />
        <Route exact path='/genre' component={Genre} />
      </Routes>
    </Router>
     );
  }
}
 
export default App;