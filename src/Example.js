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

function Example() {
  const [term, setTerm] = useState("");
  const results = useCityMatch(term);
  const handleChange = (event) => setTerm(event.target.value);

  return (
    <div>
      <h4>Clientside Search</h4>
      <Combobox aria-label="Cities">
        <ComboboxInput className="city-search-input" onChange={handleChange} />
        {results && (
          <ComboboxPopover className="shadow-popup">
            {results.length > 0 ? (
              <ComboboxList>
                {results.slice(0, 10).map((result, index) => (
                  <ComboboxOption
                    key={index}
                    value={`${result.city}, ${result.state}`}
                  />
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

function useCityMatch(term) {
  const throttledTerm = useThrottle(term, 100);
  const cities = useCitySearch(term);

  return useMemo(
    () =>
      throttledTerm.trim() === ""
        ? null
        : matchSorter(cities, throttledTerm, {
            keys: [(item) => `${item.city}, ${item.state}`]
          }),
    [throttledTerm, cities]
  );
}

function useCitySearch(searchTerm) {
  const [cities, _] = useState([
    { city: "Tzum", state: "FRL" },
    { city: "Drachten", state: "FRL" }
  ]);

  return cities;
}

export default Example;
