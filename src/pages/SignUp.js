import React from "react";
import { auth } from "../firebase";

export default function SignUp() {
  function handleSignUp(e) {
    e.preventDefault();

    const signUpInfo = {
      email: e.target.email.value,
      birthday: e.target.dateOfBirth.value,
      name: e.target.name.value,
      telefon: parseInt(e.target.telefon.value),
    };

    if (e.target.password.value !== e.target.passwordConfirm.value) {
      console.log("passer ikke");
      return;
    }

    auth
      .createUserWithEmailAndPassword(
        e.target.email.value,
        e.target.password.value
      )
      .then((e) => {
        console.log(e);
      });

    console.log(signUpInfo);
  }

  return (
    <div>
      <h1>Sign up</h1>

      <form onSubmit={(e) => handleSignUp(e)}>
        <div>
          <label htmlFor="Navn">Navn:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Fødsesdagsdato</label>
          <input type="date" name="dateOfBirth" />
        </div>
        <div>
          <label htmlFor="telefon">Telefon nummer:</label>
          <input type="tel" name="telefon" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Adgangkode:</label>
          <input type="password" name="password" />
        </div>
        <div>
          <label htmlFor="passwordConfirm">Gentag adgangkode:</label>
          <input type="password" name="passwordConfirm" />
        </div>
        <input type="submit" value="Opret" />
      </form>
    </div>
  );
}
