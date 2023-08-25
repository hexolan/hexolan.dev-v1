import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";

const useConfigMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return data.site.siteMetadata
}

const PageHead = ({titleExt}) => {
  const { title, description } = useConfigMetadata();

  return (
    <>
      <html lang="en" />
      <title>{title}{titleExt ? (" | " + titleExt) : null}</title>
      <meta name="description" content={description} />
    </>
  )
}

export default PageHead;