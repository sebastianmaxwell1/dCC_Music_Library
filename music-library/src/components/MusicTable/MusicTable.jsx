import React from 'react'


const MusicTable = (props) => {
    console.log(props)
    
    return (
        <div className="container">

        <table className="table table-sm table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Song</th>
      <th scope="col">Album</th>
      <th scope="col">Artist</th>
      <th scope="col">Genre</th>
      <th scope="col">Release Date</th>
      <th scope="col">Edit / Delete Song</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th> 
      <td>{props.songs.map((song, index)=> <li>{song.title}</li>)}</td>
      <td>{props.songs.map((song, index)=> <li>{song.album}</li>)}</td>
      <td>{props.songs.map((song, index)=> <li>{song.artist}</li>)}</td>
      <td>{props.songs.map((song, index)=> <li>{song.genre}</li>)}</td>
      <td>{props.songs.map((song, index)=> <li>{song.releaseDate}</li>)}</td>
      <td><button onClick={() => props.deleteSongs(props.songs.id)}>Delete song </button>  </td>   
      
    </tr>

      
  </tbody>
</table>
</div>



    );
}


 
export default MusicTable;