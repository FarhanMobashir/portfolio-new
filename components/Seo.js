import * as React from "react";
import { Helmet } from "react-helmet";

export function Seo(props) {
 
 const url = "https://www.alexandercarson.com";
  const title = "Alexander Carson";
  const description = "Alexander Carson's personal website";
  const image =  "https://www.google.com"
  

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {/* cdn */}
      
    </Helmet>
  );
}
