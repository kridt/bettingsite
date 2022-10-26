import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import { auth } from "../firebase";

export default function LogInSite() {
  const navigate = useNavigate("/");
  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    auth.signInWithEmailAndPassword(email, password).then((e) => {
      navigate("/dashboard");
    });
  }

  console.log(auth);

  return (
    <div>
      <Navbar />
      <h2>log ind her under</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Adgangskode: </label>
          <input type="password" name="password" />
        </div>
        <input type="submit" value="Log ind" />
      </form>
      <p>
        Har du ikke en profil endnu? <Link to={"/signUp"}>Opret her!</Link>
      </p>
    </div>
  );
}
