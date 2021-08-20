import Ukelele from "react-ukelele";
import "./styles.css";

const songs = [
  {
    title: "Piet",
    chords: ["C", "A", "F"]
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
          <>
            <h2>{song.title}</h2>
            <div style={{ display: "flex" }}>
              <>
                {song.chords.map((chord) => {
                  return <Chord chord={chord} />;
                })}
              </>
            </div>
          </>
        );
      })}
    </div>
  );
}

function Chord({ chord }) {
  return (
    <div>
      <div>
        <Ukelele width={200} height={200} chord={chord} />
      </div>
      <div style={{ textAlign: "center" }}>
        <h3>{chord}</h3>
      </div>
    </div>
  );
}
