import * as React from "react";

import { Link } from "gatsby";

import Seo from "../components/seo";

import { StaticImage } from "gatsby-plugin-image";

const Profile = () => {
  return (
    <main>
      <h1>My profile</h1>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        width={300}
      />
      <Link to="/">Back to Home</Link>
    </main>
  );
};

export const Head = () => <Seo title="My profile" />;

export default Profile;
