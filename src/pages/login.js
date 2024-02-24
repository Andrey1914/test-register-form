import * as React from "react";

import { Link } from "gatsby";

const LoginForm = () => {
  return (
    <main>
      <h1>Login</h1>
      <form>
        <label>
          Email
          <input />
        </label>
        <label>
          Password
          <input />
        </label>
        <button type="submit">Login</button>
      </form>
      <Link to="/">Back to Home</Link>
    </main>
  );
};

export const Head = () => <title>Login page</title>;

export default LoginForm;
