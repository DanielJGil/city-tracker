import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Form.module.css";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import BackButton from "../BackButton/BackButton";
import { useUrlLocation } from "../../hooks/useUrlLocation";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import { useCities } from "../../contexts/CitiesContext";
import { useNavigate } from "react-router-dom";

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [geocodingError, setGeocodingError] = useState("");
  const { addCity } = useCities();
  const [lat, lng] = useUrlLocation();

  const navigate = useNavigate();

  useEffect(
    function () {
      async function getCityGeocoding() {
        try {
          setIsLoadingGeocoding(true);
          setGeocodingError("");
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
          );

          if (!res.ok) throw new Error("There was a problem fetching the data");

          const data = await res.json();

          if (!data.countryCode)
            throw new Error(
              "That doesn't seem to be a city. Click somewhere else."
            );

          setCityName(data.city);
          setCountry(data.countryName);
          setEmoji(data.countryCode);
        } catch (err) {
          setGeocodingError(err.message);
        } finally {
          setIsLoadingGeocoding(false);
        }
      }
      getCityGeocoding();
    },
    [lat, lng]
  );

  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: {
        lat,
        lng,
      },
      id,
    };

    addCity(newCity);
    navigate("/app");
  }

  if (geocodingError) return <Message message={geocodingError} />;

  if (isLoadingGeocoding) return <Loader />;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>

        <ReactDatePicker
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="addBtn">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
