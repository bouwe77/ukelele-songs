import Ukelele from "react-ukelele";
import SongComboBox from "./Example";
import "./styles.css";

export default function App() {
  const song = {
    title: "Test123",
    chords: ["A", "B", "C"],
    lines: [
      ["A", "B", "C"],
      ["A", "B", "C"]
    ],
    links: ["https://bouwe.io", "https://youtube.com"],
    kind: "song"
  };

  return (
    <div>
      <h1>My Ukelele Songs</h1>
      <div>
        <SongComboBox />
      </div>
      <div key={song.title} className="song">
        <h2>{song.title}</h2>
        <div className="chords">
          <>
            {song.chords.map((chord, index) => {
              return (
                <Chord key={`${song.title}-chord-${index}`} chord={chord} />
              );
            })}
          </>
        </div>
        <div className="lines">
          {song.lines.map((line, lineIndex) => (
            <div key={`${song.title}-line-${lineIndex}`}>
              {line.map((chord, chordIndex) => (
                <>
                  <span key={`${song.title}-line-${lineIndex}-${chordIndex}`}>
                    {chord}
                  </span>{" "}
                </>
              ))}
              <br />
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
    </div>
  );
}

function Chord({ chord }) {
  return (
    <div className="chord">
      <div>
        <Ukelele width={200} height={200} chord={chord} />
      </div>
      <div className="chord-name">
        <h3>{chord}</h3>
      </div>
    </div>
  );
}
