import { useState } from "react";
import { Chord } from "../ukelele/Chord";

const chords = ["C", "D", "E", "F", "G", "A", "B"];

export function ChordsPage() {
  const [selectedChord, setSelectedChord] = useState(chords[0]);

  const getButtonClassName = (chord) =>
    chord === selectedChord
      ? "chord-button chord-button-active"
      : "chord-button";

  return (
    <>
      <div className="chord-buttons">
        {chords.map((chord) => (
          <button
            onClick={() => setSelectedChord(chord)}
            className={getButtonClassName(chord)}
          >
            {chord}
          </button>
        ))}
      </div>
      <div className="chords">
        <Chord chord={selectedChord} />
        <Chord chord={`${selectedChord}m`} />
        <Chord chord={`${selectedChord}7`} />
      </div>
    </>
  );
}
