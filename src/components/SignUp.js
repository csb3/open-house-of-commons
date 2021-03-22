import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PostcodeSearch from "./PostcodeSearch";
import axios from "axios";
import Results from "./Results";
import "./SignUp.scss";
import { useCookies } from "react-cookie";

export default function SignUp(props) {
  const [state, setState] = useState({ email: "", password: "" });
  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies(["Email"]);

  if (cookies.Email) {
    history.push("/");
  }

  const handleInputChange = function (event) {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your state values: \n 
            email: ${state.email} \n `);

    const email=state.email;
    const password=state.password;

    axios.post("/api/signup", { email, password })
      .then((res) => {
        console.log(res.data[0].email);
      });
  };

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://represent.opennorth.ca/postcodes/${postcode}/?sets=federal-electoral-districts`
  //     )
  //     .then((response) => {
  //       setResults([...response.data.results]);
  //     });
  // }, [postcode]);

  return (
    <form className="sign-up" onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={state.email}
          onChange={handleInputChange}
        />
        <br />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleInputChange}
        />
        <br />
      </label>
      <label>
        Find your MP (optional)
        <br />
        <br />
        Enter your postal code:
        <main></main>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
