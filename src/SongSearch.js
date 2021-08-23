import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { useThrottle } from "react-use";
import { useState, useMemo } from "react";
import { matchSorter } from "match-sorter";

function SongSearch() {
  const [term, setTerm] = useState("");
  const results = useSongMatch(term);
  const handleChange = (event) => setTerm(event.target.value);

  return (
    <div>
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
  const songs = [
    // {
    //   title: "Your Love Keeps Lifting Me Higher",
    //   chords: ["D", "G", "G6"],
    //   lines: [["D", "G", "G6"]]
    // },
    // {
    //   title: "Twist In My Sobriety",
    //   chords: ["Em", "Am7", "B"],
    //   lines: [["Em"], ["Am7", "B"]] //, ["C", "A", "C"]]
    // },
    {
      title: "Test123",
      chords: ["A", "B", "C"],
      lines: [
        ["A", "B", "C"],
        ["A", "B", "C"]
      ],
      links: ["https://bouwe.io", "https://youtube.com"],
      kind: "song"
    },
    {
      title: "Test456",
      chords: ["A", "B", "C"],
      lines: [
        ["A", "B", "C"],
        ["A", "B", "C"]
      ],
      links: [],
      kind: "chords"
    }
  ];

  // const [songs, setSongs] = useState([
  // ]);

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

export default SongSearch;
