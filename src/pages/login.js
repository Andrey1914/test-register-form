// import * as React from "react";

// import { Link } from "gatsby";

// import Seo from "../components/seo";

// const LoginForm = () => {
//   return (
//     <main>
//       <h1>Login</h1>
//       <form>
//         <label>
//           Email
//           <input />
//         </label>
//         <label>
//           Password
//           <input />
//         </label>
//         <button type="submit">Login</button>
//       </form>
//       <Link to="/">Back to Home</Link>
//     </main>
//   );
// };

// export const Head = () => <Seo title="Login Page" />;

// export default LoginForm;

import React, { useState } from "react";
import { navigate } from "gatsby";
// import { handleLogin, isLoggedIn } from "../utils/auth";
import { isLoggedIn, handleLogin } from "../components/services/auth";
import Seo from "../components/seo";

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleUpdate = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(formData);
    if (isLoggedIn()) {
      navigate("/app/profile");
    }
  };

  if (isLoggedIn()) {
    navigate("/app/profile");
  }

  return (
    <>
      <h1>Log in</h1>
      <form
        method="post"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label>
          Username
          <input type="text" name="username" onChange={handleUpdate} />
        </label>
        <label>
          Password
          <input type="password" name="password" onChange={handleUpdate} />
        </label>
        <input type="submit" value="Log In" />
      </form>
    </>
  );
};

export const Head = () => <Seo title="Login Page" />;

export default LoginForm;
