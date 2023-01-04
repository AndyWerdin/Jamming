import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState(
    [
      {name: 'Rolling In the Deep', artist: 'Adele', album: '21', id: 1},
      {name: 'Waiting for Love', artist: 'Avicii', album: 'Stories', id: 2}
    ])
  const [playlistName, setPlaylistName] = useState("My Playlist")
  const [playlistTracks, setPlaylistTracks] = useState(
    [
      {name: 'Waiting for Love', artist: 'Avicii', album: 'Stories', id: 2}
    ])

  const addTrack = (track) => {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    } else {
      setPlaylistTracks([...playlistTracks, track]);
    }
  }

  const removeTrack = (track) => {
    let filteredList = playlistTracks.filter((savedTrack) => savedTrack.id !== track.id);
    setPlaylistTracks(filteredList);
  }

  const updatePlaylistName = (newName) => {
    setPlaylistName(newName);
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack}/>
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
          />
    </div>
  </div>
</div>
  );
}

export default App;
