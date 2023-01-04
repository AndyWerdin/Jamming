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

  return (
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults searchResults={searchResults}/>
      <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
    </div>
  </div>
</div>
  );
}

export default App;
