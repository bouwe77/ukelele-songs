import { Chord } from "../ukelele/Chord";

export function Song({ song }) {
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
