import { createContext, useContext, useEffect, useReducer } from "react";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };

    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    case "city/loaded":
      return {
        ...state,
        currentCity: action.payload,
      };

    case "city/created":
      return {
        ...state,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        cities: state.cities.filter(
          (city) => String(city.id) !== String(action.payload)
        ),
      };

    default:
      throw new Error("Unknown action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch("/data/cities.json");
        const data = await res.json();
        const { cities } = data;
        dispatch({ type: "cities/loaded", payload: cities });
      } catch {
        throw new Error("There was a problem loading cities");
      }
    }
    fetchCities();
  }, []);

  function getCity(id) {
    cities.map(
      (city) =>
        String(city.id) === id &&
        dispatch({ type: "city/loaded", payload: city })
    );
  }

  function addCity(newCity) {
    dispatch({ type: "city/created", payload: newCity });
  }

  function deleteCity(id) {
    dispatch({ type: "city/deleted", payload: id });
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
