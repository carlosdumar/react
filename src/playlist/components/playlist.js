import React, {Component} from 'react';
import Media from './media';
import './playlist.css'
import Play from '../../icons/components/play';

function Playlist(props) {  
    console.log(props.data)        
    const playlist = props.data.categories[0].playlist
    return(
        <div className="Playlist">
            <Play />
            {
                playlist.map((item) => {
                    return <Media {...item} key={item.id}/>
                })
            }
        </div>
    )
    
}

export default Playlist;