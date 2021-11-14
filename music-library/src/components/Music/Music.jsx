import React from 'react';


const Music = (props) => {
    return (          
        <tbody> 
       
            <tr>                
                <td>{props.song.id} <button onClick={() => props.deleteSongs(props.song.id)}>Delete song </button>  </td>          
                <td>{props.song.title}</td>
                <td>{props.song.artist}</td>
                <td>{props.song.album}</td>
                <td>{props.song.genre}</td>
                <td>{props.song.releaseDate}</td>
            </tr>          
          
            
        </tbody>
        
    );
}

export default Music;