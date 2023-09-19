import CityItem from "../CityItem/CityItem";
import styles from "./CityList.module.css";

function CityList({ cities }) {
  return (
    <ul className={styles.cityList}>
      {cities && cities.map((city, i) => <CityItem city={city} key={i} />)}
    </ul>
  );
}

export default CityList;
