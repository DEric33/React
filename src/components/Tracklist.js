import './Tracklist.css';
import MUSIC from './Musique';

function Tracklist() {
    const playMusic = MUSIC.map(x => x.name );
    //const playMusic = "Bonjour{`${val}\n`} ceci est un message de test";
    return (
        <>
        <h1>Tracklist</h1>
        <p>{playMusic}</p>
        </>
    )
}

export default Tracklist;