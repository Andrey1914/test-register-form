import * as React from "react";

import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! 🎉🎉🎉</span>
      </h1>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
