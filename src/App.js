import { useState } from "react";
import "./styles.css";
import { ChordsPage } from "./chords/ChordsPage";
import { SongPage } from "./songs/SongPage";

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

      <footer>
        Made by <a href="https://bouwe.io">Bouwe</a> 🧔🏻‍♂️
      </footer>
    </div>
  );
}
