import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Songs from './Pages/Songs/Songs';
import Album from './Pages/Album/Album';
import Artist from './Pages/Artist/Artist';
import Genre from './Pages/Genre/Genre';
import MusicTable from './components/MusicTable/MusicTable';
import Music from './components/Music';
import axios from 'axios';
import './App.css';




class App extends Component {
  state = {
    songs:[]
  }

  componentDidMount() {
    this.getAllMusic();
  }

  async getAllMusic() {
    let res = await axios.get('http://www.devcodecampmusiclibrary.com/')
    this.setState({
      songs: res.data
    });
  }



  render() { 
    return ( 
      
      <Fragment>
      <Router>
      <NavigationBar />
      <Routes>
        <Route exact path='/songs' component={Songs} />
        <Route exact path='/album' component={Album} />
        <Route exact path='/artist' component={Artist} />
        <Route exact path='/genre' component={Genre} />
      </Routes>
    </Router>
     <MusicTable />
 


    </Fragment>
    
     );
  }
}
 
export default App;