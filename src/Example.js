import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { useThrottle } from "react-use";
import { useState, useEffect, useMemo } from "react";
import { matchSorter } from "match-sorter";

function SongComboBox() {
  const [term, setTerm] = useState("");
  const results = useSongMatch(term);
  const handleChange = (event) => setTerm(event.target.value);

  return (
    <div>
      <h4>Clientside Search</h4>
      <Combobox aria-label="Songs">
        <ComboboxInput className="song-search-input" onChange={handleChange} />
        {results && (
          <ComboboxPopover className="shadow-popup">
            {results.length > 0 ? (
              <ComboboxList>
                {results.slice(0, 10).map((result, index) => (
                  <ComboboxOption key={index} value={`${result.title}`} />
                ))}
              </ComboboxList>
            ) : (
              <span style={{ display: "block", margin: 8 }}>
                No results found
              </span>
            )}
          </ComboboxPopover>
        )}
      </Combobox>
    </div>
  );
}

function useSongMatch(term) {
  const throttledTerm = useThrottle(term, 100);
  const songs = useSongSearch(term);

  return useMemo(
    () =>
      throttledTerm.trim() === ""
        ? null
        : matchSorter(songs, throttledTerm, {
            keys: [(song) => `${song.title}`]
          }),
    [throttledTerm, songs]
  );
}

function useSongSearch(searchTerm) {
  const [songs, setSongs] = useState([
    { title: "Test 123" },
    { title: "Another Song" },
    { title: "It's Now Or Never" }
  ]);

  // useEffect(() => {
  //   if (searchTerm.trim() !== "") {
  //     let isFresh = true;
  //     fetchSongs(searchTerm).then((songs) => {
  //       if (isFresh) setSongs(songs);
  //     });
  //     return () => (isFresh = false);
  //   }
  // }, [searchTerm]);

  return songs;
}

// const cache = {};
// function fetchSongs(value) {
//   if (cache[value]) {
//     return Promise.resolve(cache[value]);
//   }
//   return fetch("https://my-stuff/api?" + value)
//     .then((res) => res.json())
//     .then((result) => {
//       cache[value] = result;
//       return result;
//     });
// }

export default SongComboBox;
