import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Pricing from "./pages/Pricing/Pricing";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import AppPage from "./pages/AppPage/AppPage";
import CityList from "./components/CityList/CityList";
import CountryList from "./components/CountryList/CountryList";
import Form from "./components/Form/Form";
import { useEffect, useState } from "react";
import City from "./components/City/City";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppPage />}>
          <Route
            index
            element={<Navigate replace to="cities" isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="form"
            element={<Form cities={cities} setCities={setCities} />}
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
