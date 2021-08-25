import { useState } from "react";
import "./styles.css";
import { ChordsPage } from "./chords/ChordsPage";
import { SongPage } from "./songs/SongPage";

export default function App() {
  const [page, setPage] = useState("songs");

  const getNavClassName = (nav) =>
    nav === page ? `nav-item nav-item-active` : `nav-item`;

  return (
    <div>
      <nav>
        <div>
          <h1>My Uke</h1>
        </div>
        <div class="nav-items">
          <button
            className={getNavClassName("songs")}
            onClick={() => setPage("songs")}
          >
            songs
          </button>
          <button
            className={getNavClassName("chords")}
            onClick={() => setPage("chords")}
          >
            chords
          </button>
        </div>
      </nav>

      {page === "songs" ? <SongPage /> : <ChordsPage />}

      <footer>
        Made by <a href="https://bouwe.io">Bouwe</a> 🧔🏻‍♂
      </footer>
    </div>
  );
}
