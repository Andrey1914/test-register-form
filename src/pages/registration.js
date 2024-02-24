import * as React from "react";

import { Link } from "gatsby";

const RegisterForm = () => {
  return (
    <main>
      <h1>Registration</h1>
      <form>
        <label>
          Name
          <input />
        </label>
        <label>
          Email
          <input />
        </label>
        <label>
          Password
          <input />
        </label>
        <button type="submit">Register</button>
      </form>
      <Link to="/">Back to Home</Link>
    </main>
  );
};

export const Head = () => <title>Registration page</title>;

export default RegisterForm;
