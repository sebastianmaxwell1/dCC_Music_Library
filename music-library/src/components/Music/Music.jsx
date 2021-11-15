import React from 'react';


const Music = (props) => {
    return (          
        <tbody> 
       
            <tr>                
                <td>{props.song.title}</td>
                <td>{props.song.artist}</td>
                <td>{props.song.album}</td>
                <td>{props.song.genre}</td>
                <td>{props.song.releaseDate}</td>
                <td>{props.song.deleteSongs}</td>   
            </tr>          
          
            
        </tbody>
        
    );
}

export default Music;