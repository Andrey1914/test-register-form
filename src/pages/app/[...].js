import React from "react";

import { Router } from "@gatsbyjs/reach-router";

// import Default from "../components/Default";
import Layout from "../../components/layout";
import AboutPage from "../about";
import LoginForm from "../login";
import Profile from "../profile";
import PrivateRoute from "../../components/privatRoute";

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/details" component={AboutPage} />
        <LoginForm path="/login" />
        {/* <Default path="/" /> */}
      </Router>
    </Layout>
  );
};

export default App;
