import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

const Playlist = (props) => {
    const handleNameChange = (text) => {
        props.onNameChange(text);
    }

    return (
        <div className="Playlist">
            <input defaultValue={ props.playlistName } onChange={handleNameChange}/>
                <TrackList tracks={ props.playlistTracks } onRemove={props.onRemove} isRemoval={true}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
};

export default Playlist;