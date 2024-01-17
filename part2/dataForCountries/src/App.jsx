import { useEffect, useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import Error from "./components/Error";
import Country from "./components/country";
import axios from "axios";

const App = () => {
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState([]);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const [info, setInfo] = useState({
    name: "",
    capital: [],
    area: 0,
    flags: "",
    languages: {},
  });

  const handleSearchChange = (event) => {
    console.log("this is search letter", event.target.value);
    setSearch(event.target.value);

    if (!event.target.value) {
      setMsg([]);
    } else {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then((res) => {
          const results = res.data.filter((el) =>
            el.name.common.includes(
              `${event.target.value[0].toUpperCase()}${event.target.value.slice(
                1
              )}`
            )
          );
          console.log("this is country", results);
          if (results.length == 1) {
            setMsg([]);
            axios
              .get(
                `https://studies.cs.helsinki.fi/restcountries/api/name/${results[0].name.common.toLowerCase()}`
              )
              .then((res) => {
                console.log(res.data);
                setInfo(res.data);
              })
              .catch((err) => console.log(err));
          } else if (results.length <= 10) {
            setError("");
            setMsg(results);
            setInfo({
              name: "",
              capital: [],
              area: 0,
              flags: "",
              languages: {},
            });
          } else if (results.length == 0 || show) {
            setMsg([]);
            setError("0 result");
            setInfo({
              name: "",
              capital: [],
              area: 0,
              flags: "",
              languages: {},
            });
          } else {
            setMsg([]);
            setError("Too many matches, specify another filter");
            setInfo({
              name: "",
              capital: [],
              area: 0,
              flags: "",
              languages: {},
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleClick = (id) => {

    axios
      .get(
        `https://studies.cs.helsinki.fi/restcountries/api/name/${id.toLowerCase()}`
      )
      .then((res) => {
        console.log(res.data);
        setInfo(res.data);
      })
      .catch((err) => console.log(err));

  };

  return (
    <>
      <Form search={search} handleSearchChange={handleSearchChange} />
      <Results filterResult={msg} handleClick={handleClick} />
      <Error error={error} />
      <Country info={info} />
    </>
  );
};

export default App;
