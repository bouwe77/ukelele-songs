import Ukelele from "react-ukelele";
import "./styles.css";

const songs = [
  {
    title: "Piet",
    chords: ["C", "A", "F", "A", "C"]
  },
  {
    title: "Henk",
    chords: ["A", "B", "C"]
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
            (hier nog de volgorde)
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
