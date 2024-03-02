import * as React from "react";

import { Link, navigate } from "gatsby"; // highlight-line
// import { getUser, isLoggedIn, logout } from "../services/auth" // highlight-line
import { getUser, isLoggedIn, logout } from "./services/auth";
import useSiteMetadata from "../hooks/useMetadata";

const Layout = ({ pageTitle, children }) => {
  const { siteTitle, siteUrl } = useSiteMetadata();
  let greetingMessage = "";
  if (isLoggedIn()) {
    greetingMessage = `Hello ${getUser().name}`;
  } else {
    greetingMessage = "You are not logged in";
  }
  return (
    <div>
      <header>{siteTitle}</header>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/registration">Registration page</Link>
          </li>
          <li>
            <Link to="/login">Login page</Link>
          </li>
        </ul>
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              logout(() => navigate(`/login`));
            }}
          >
            Logout
          </a>
        ) : null}
      </nav>

      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>

      <footer>{siteUrl}</footer>
    </div>
  );
};

export default Layout;
