import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Songs from './Pages/Songs/Songs';
import Album from './Pages/Album/Album';
import Artist from './Pages/Artist/Artist';
import Genre from './Pages/Genre/Genre';
import MusicTable from './components/MusicTable/MusicTable';
import Music from './components/Music/Music';
import axios from 'axios';
import './App.css';
import AddSong from './components/AddSong/AddSong';




class App extends Component {
  state = {
    songs:[],
    userInput: ''
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


mapSongs(){
  return this.state.songs.map(song =>
      <Music
          key={song.id}
          song={song}
          deleteSongs={(id) => this.deleteSongs(id)}
      />,
  );
}

async addSong(song){
  console.log(song)
  try{
      let res = await axios.post('http://www.devcodecampmusiclibrary.com/', song);
      alert('Song Added!')
      this.setState({
          song:res.data
      });
  }
  catch(e){
      console.log(e.message)
  }

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

    <AddSong addSong={this.addSong.bind(this)}/>
     <MusicTable mapSongs={() => this.mapSongs()} />
 


    </Fragment>
    
     );
  }
}
 
export default App;