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
    ],
    links: ["https://bouwe.io", "https://youtube.com"]
  },
  {
    title: "Test456",
    chords: ["A", "B", "C"],
    lines: [
      ["A", "B", "C"],
      ["A", "B", "C"]
    ],
    links: []
  }
];

export default function App() {
  return (
    <div>
      <h1>My Ukelele Songs</h1>
      {songs.map((song) => {
        return (
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
                      <span
                        key={`${song.title}-line-${lineIndex}-${chordIndex}`}
                      >
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
                    <a href={link}>{link}</a>
                  </li>
                </ul>
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
