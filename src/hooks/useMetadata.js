import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const metadata = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteUrl
        }
      }
    }
  `);

  return metadata.site.siteMetadata;
};

export default useSiteMetadata;
