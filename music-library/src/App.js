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
    let res = await axios.get('http://localhost:5000/api/songs')
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
      let res = await axios.post('http://localhost:5000/api/songs', song);
      alert('Song Added!')
      this.setState({
          song:res.data
      });
  }
  catch(e){
      console.log(e.message)
  }

}

async deleteSongs(id){
  await axios.delete('http://localhost:5000/api/songs/'+id+'/');
  this.getAllSongs()
}

// columnEditButton(cell, row, rowIndex, formatExtraData){
//   return (
//   <ModalForm buttonStyle='btn btn-secondary' action='Edit' title='Edit Song'
//   content={<EditSong id={row.id}/>}/>
  // )
// }

// columnDeleteButton(cell, row, rowIndex, formatExtraData){
//   return (
//           <DeleteSong id={row.id} />


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
   <MusicTable songs = {this.state.songs} />



  </Fragment>
  
   );
}
}

export default App;
