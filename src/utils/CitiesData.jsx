import axios from "axios";
import { useEffect } from "react";

const CitiesData = ({ dataOfCities }) => {
  // var Doctorid = "d2beabbb-d891-4a86-8297-26b006d0861f";
  // var Labid = "1d70a7da-654c-4396-a411-f098c0f3f376";
  // var Madicine = "e80cd81a-74d8-4ceb-bd37-e057dc4a4af7";

  useEffect(() => {
    const getCityName = async () => {
      var data = await axios.get(
        "https://sopapi.starhealth.in/availableCities"
      );

      console.log(data.data);
      dataOfCities(data.data);
    };
    getCityName();
  }, []);

  return <div></div>;
};

export default CitiesData;
