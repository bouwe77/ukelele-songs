import Ukelele from "react-ukelele";
import "./styles.css";

const songs = [
  // {
  //   title: "Your Love Keeps Lifting Me Higher",
  //   chords: ["D", "G", "G6"],
  //   lines: [["D", "G", "G6"]]
  // },
  // {
  //   title: "Twist In My Sobriety",
  //   chords: ["Em", "Am7", "B"],
  //   lines: [["Em"], ["Am7", "B"]] //, ["C", "A", "C"]]
  // },
  {
    title: "Test123",
    chords: ["A", "B", "C"],
    lines: [
      ["A", "B", "C"],
      ["A", "B", "C"]
    ]
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
