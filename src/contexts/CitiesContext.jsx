import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch("/data/cities.json");
        const data = await res.json();
        const { cities } = data;
        setCities(cities);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  function getCity(id) {
    cities.map((city) => String(city.id) === id && setCurrentCity(city));
  }

  function addCity(newCity) {
    setCities((cities) => [...cities, newCity]);
    setCurrentCity(newCity);
  }

  function deleteCity(id) {
    setCities(cities.filter((city) => String(city.id) !== String(id)));
  }

  return (
    <CitiesContext.Provider
      value={{ cities, isLoading, currentCity, getCity, addCity, deleteCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error(
      "CitiesContext can't be used outside of the CitiesProvider"
    );
  return context;
}

export { CitiesProvider, useCities };
