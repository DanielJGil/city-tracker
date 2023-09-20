import CountryItem from "../CountryItem/CountryItem";
import Loader from "../Loader/Loader";
import styles from "./CountryList.module.css";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Loader />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <div className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </div>
  );
}

export default CountryList;
