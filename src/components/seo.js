import * as React from "react";

import useSiteMetadata from "../hooks/useMetadata";

const Seo = ({ title }) => {
  const { siteTitle } = useSiteMetadata();

  return (
    <title>
      {title} | {siteTitle}
    </title>
  );
};

export default Seo;
