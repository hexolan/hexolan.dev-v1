import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";

const useConfigMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata
}

const PageHead = ({titleExt}) => {
  const { title, description, siteUrl } = useConfigMetadata();

  return (
    <>
      <html lang="en" />
      <title>{title}{titleExt ? (" | " + titleExt) : null}</title>
      <meta name="description" content={description} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": title,
          "url": siteUrl
        })}
      </script>
    </>
  )
}

export default PageHead;