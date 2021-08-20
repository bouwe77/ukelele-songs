import Ukelele from "react-ukelele";
import "./styles.css";

const songs = [
  {
    title: "Song 1",
    chords: ["C", "A", "F", "B", "E"],
    lines: [["C", "F", "C"], ["A"], ["B", "E"]]
  },
  {
    title: "Another great song",
    chords: ["A", "B", "C"],
    lines: [["A"], ["B", "A"], ["C", "A", "C"]]
  }
];

export default function App() {
  return (
    <div>
      <h1>My Ukelele Songs</h1>
      {songs.map((song) => {
        return (
          <div className="song">
            <h2>{song.title}</h2>
            <div className="chords">
              <>
                {song.chords.map((chord) => {
                  return <Chord chord={chord} />;
                })}
              </>
            </div>
            <div className="lines">
              {song.lines.map((line) => (
                <>
                  {line.map((chord) => (
                    <>{chord} </>
                  ))}
                  <br />
                </>
              ))}
            </div>
          </div>
        );
      })}
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
