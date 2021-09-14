import axios from 'axios';
import { useEffect } from 'react';

const CitiesData = ({ dataOfCities }) => {
  var Doctorid = 'd2beabbb-d891-4a86-8297-26b006d0861f';
  const cityName = async () => {
    var data = await axios.get('https://sopapi.starhealth.in/availableCities');
    // var doctorCitiesArray= await data.Doctorid
    dataOfCities(data.data[Doctorid]);
  };
  useEffect(() => {
    cityName();
  }, []);

  return <div></div>;
};

export default CitiesData;
