import { useEffect, useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import axios from "axios";

const App = () => {
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState(null);

  const filterCountries = (el) =>{
    
  }

  const filterContries = (event) => {



    event.preventDefault();
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(res => {
        console.log(res.data.filter(el => el.name.common.includes(`${search[0].toUpperCase()}${search.slice(1)}`)))
      })
      .catch(err => console.log(err))
  };

  const handleSearchChange = (event) => {
    console.log("this is search letter", event.target.value);
    setSearch(event.target.value);
  };

  return (
    <>
      <Form
        onSubmit={filterContries}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <Results message={msg} />
    </>
  );
};

export default App;
