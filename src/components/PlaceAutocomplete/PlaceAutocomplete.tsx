import { useEffect } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import Input from "../../../../../../../component/Inputs/Input";

import styles from "./PlaceAutocomplete.module.css";

interface Props {
  location: string;
  error: string;
  setLocation: (address: string) => void;
}

const PlacesAutocomplete = ({ location, error, setLocation }: Props) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: "initmap",
    debounce: 300,
  });

  useEffect(() => {
    setValue(location, false);
    console.log(location);
  }, [location]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = ({ description }: any) =>
    () => {
      // When the user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description })
        .then((results) => {
/*           const { lat, lng } = getLatLng(results[0]);
          console.log("📍 Coordinates: ", { lat, lng });
          console.log(results);
          console.log(results[0].formatted_address!); */

          // Save adress
          setLocation(results[0].formatted_address || "");
        }).catch((error: Error) => {
          console.log(error.message);
        })
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div className={styles.container}>
      <Input
        name="location"
        label="Ubicación"
        value={value}
        error={error}
        handleChange={handleInput}
      />
      {status === "OK" && <ul className={styles.dropBox}>{renderSuggestions()}</ul>}
    </div>
  );
};

export default PlacesAutocomplete;