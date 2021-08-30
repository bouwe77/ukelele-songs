//import songs from "./songs";

import useSongs from './useSongs'

export default function SongMenu({ selectedValue, onSelect }) {
  const { songs, isLoading, error } = useSongs()

  function handleChange(event) {
    onSelect(songs.find((song) => song.title === event.target.value))
  }

  if (!songs) return null

  if (isLoading) return <>Loading...</>

  if (error) return <>{error}</>

  return (
    <select
      className="song-select"
      value={selectedValue}
      onChange={handleChange}
    >
      {songs.map((song) => {
        return <option value={song.title}>{song.title}</option>
      })}
    </select>
  )
}
