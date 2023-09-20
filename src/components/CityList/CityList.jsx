import CityItem from "../CityItem/CityItem";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import styles from "./CityList.module.css";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Loader />;

  if (!cities.length)
    return <Message message={"Add your first city by clicking on the map!"} />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
