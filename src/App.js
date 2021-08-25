import { useState } from "react";
import { Chord } from "./ukelele/Chord";
import SongSearch from "./song-search/SongSearch";
import "./styles.css";

export default function App() {
  const [page, setPage] = useState("songs");

  return (
    <div>
      <h1>My Ukelele Songs</h1>
      <nav>
        <button className="buttonAsLink" onClick={() => setPage("songs")}>
          songs
        </button>
        <button className="buttonAsLink" onClick={() => setPage("chords")}>
          chords
        </button>
      </nav>
      {page === "songs" ? <SongPage /> : <ChordsPage />}
    </div>
  );
}

function ChordsPage() {
  const [selectedChord, setSelectedChord] = useState("C");
  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={() => setSelectedChord("C")}>C</button>
        <button onClick={() => setSelectedChord("D")}>D</button>
        <button onClick={() => setSelectedChord("E")}>E</button>
        <button onClick={() => setSelectedChord("F")}>F</button>
        <button onClick={() => setSelectedChord("G")}>G</button>
        <button onClick={() => setSelectedChord("A")}>A</button>
        <button onClick={() => setSelectedChord("B")}>B</button>
      </div>
      <h1>{selectedChord}</h1>
      <div className="chords">
        <Chord chord={selectedChord} />
        <Chord chord={`${selectedChord}m`} />
        <Chord chord={`${selectedChord}7`} />
      </div>
    </>
  );
}

function SongPage() {
  const [selectedSong, setSelectedSong] = useState();
  function selectSong(song) {
    setSelectedSong(song);
  }

  return (
    <>
      <div>
        <SongSearch onSelect={selectSong} />
      </div>
      {selectedSong ? <Song song={selectedSong} /> : null}
    </>
  );
}

function Song({ song }) {
  return (
    <div key={song.title} className="song">
      <h2>{song.title}</h2>
      <div className="chords">
        <>
          {song.chords.map((chord, index) => {
            return <Chord key={`${song.title}-chord-${index}`} chord={chord} />;
          })}
        </>
      </div>
      <div className="lines">
        {song.lines.map((line, lineIndex) => (
          <div className="line" key={`${song.title}-line-${lineIndex}`}>
            {line.map((chord, chordIndex) => (
              <div
                class="line-chord"
                key={`${song.title}-line-${lineIndex}-${chordIndex}`}
                style={
                  line.length === 1 && chord.length >= 5
                    ? { fontWeight: "bold", textTransform: "uppercase" }
                    : undefined
                }
              >
                {chord}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="links">
        {song.links.map((link) => (
          <ul>
            <li>
              <a href={link} target="_blank" rel="noreferrer">
                {link}
              </a>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
