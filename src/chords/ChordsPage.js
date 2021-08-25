import { useState } from "react";
import { Chord } from "../ukelele/Chord";

export function ChordsPage() {
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
