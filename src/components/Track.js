import './Track.css';
import MUSIC from './Musique';

function Track() {
    const playMusic = MUSIC.map(x => x.album );
    return (
        <>
        <h1>Track</h1>
        <p>{playMusic}</p>
        </>
    )
}

export default Track;