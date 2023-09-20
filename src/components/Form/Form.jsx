import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../Button/Button";

function Form() {
  const [cityName, setCityName] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();

  return (
    <form className={styles.form}>
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
        <Button
          type="backBtn"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          &larr; Back
        </Button>
      </div>
    </form>
  );
}

export default Form;
