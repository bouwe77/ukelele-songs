import SongSearch from "../song-search/SongSearch";
import { Song } from "./Song";
import useLocalStorageState from "use-local-storage-state";

export function SongPage() {
  const [selectedSong, setSelectedSong] = useLocalStorageState("selectedSong");
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
