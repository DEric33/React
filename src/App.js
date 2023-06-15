import logo from './logo.svg';
import './App.css';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Tracklist from './components/Tracklist';
import Track from './components/Track';
import SaveToSpotify from './components/SaveToSpotify';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Playlist />
        <SearchBar />
        <SearchResults />
        <Tracklist />
        <Track />
        <SaveToSpotify />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
