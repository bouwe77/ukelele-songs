import { Song } from "./Song";
import useLocalStorageState from "use-local-storage-state";
import SongMenu from "../song-menu/SongMenu";

export function SongPage() {
  const [selectedSong, setSelectedSong] = useLocalStorageState("selectedSong");
  function selectSong(song) {
    setSelectedSong(song);
  }

  return (
    <>
      <div className="song-menu">
        <SongMenu selectedValue={selectedSong?.title} onSelect={selectSong} />
      </div>
      {selectedSong ? <Song song={selectedSong} /> : null}
    </>
  );
}
