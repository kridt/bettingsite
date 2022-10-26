import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Start</Link>
        </li>
        <li>
          <Link to={"/login"}>Log ind</Link>
        </li>
        <li>
          <Link to={"/"}>Om os</Link>
        </li>
        <li>
          <Link to={"/"}>Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}
