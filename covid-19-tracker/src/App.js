import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select } from "@material-ui/core";
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  //STATE = How to write a variable in react

  // https://disease.sh/v3/covid-19/countries
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso
        }));

        setCountries(countries);
      });
    };

    getCountriesData();
  }, []);
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="ap__dropdown">
          <Select variant="outlined" value="abc">
            <MenuItem value={country.value}>{country.name}</MenuItem>
            {
              countries.map(country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }

            {/* <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Option two</MenuItem>
            <MenuItem value="worldwide">Option 3</MenuItem>
            <MenuItem value="worldwide">yoooo</MenuItem> */}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
