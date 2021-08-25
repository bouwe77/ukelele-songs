import songs from "./songs";

export default function SongMenu({ selectedValue, onSelect }) {
  function handleChange(event) {
    onSelect(songs.find((song) => song.title === event.target.value));
  }

  return (
    <select
      className="song-select"
      value={selectedValue}
      onChange={handleChange}
    >
      {songs.map((song) => {
        return <option value={song.title}>{song.title}</option>;
      })}
    </select>
  );
}
