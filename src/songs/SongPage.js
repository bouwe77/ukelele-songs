import { useState } from "react";
import SongSearch from "../song-search/SongSearch";
import { Song } from "./Song";

export function SongPage() {
  const [selectedSong, setSelectedSong] = useState();
  function selectSong(song) {
    setSelectedSong(song);
  }

  return (
    <>
      <div>
        <SongSearch onSelect={selectSong} />
      </div>
      {selectedSong ? <Song song={selectedSong} /> : null}
    </>
  );
}
