import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Form.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Form({ cities, setCities }) {
  const [cityName, setCityName] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country: "Estonia",
      date,
      emoji: "EE",
      id: 123,
      notes,
      position: "latlng",
    };

    await setCities([...cities, newCity]);
    navigate("/app/cities");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <span className={styles.flag}>---</span>
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
        <Link className={styles.addBtn}>Add</Link>
        <Link className={styles.backBtn}>&larr; Back</Link>
      </div>
    </form>
  );
}

export default Form;
