import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

const MetaTags = ({ title }) => (
  <Helmet>
    <meta charset="UTF-8" />
    <title>{title}</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
    />
    <meta name="MobileOptimized" content="320" />
    <link rel="canonical" href="https://www.realgoodtouring.com" />
    <meta
      name="description"
      content="We tour Youtube, Streaming, and Content Creator acts around the world! Live!"
    />
    <meta property="og:site_name" content="Real Good Touring" />
    <meta property="og:title" content="Real Good Touring" />
    <meta property="og:url" content="https://www.realgoodtouring.com" />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="https://www.realgoodtouring.com/assets/share-large.png"
    />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="800" />
    <meta property="og:image:height" content="416" />
    <meta itemprop="name" content="Real Good Touring" />
    <meta itemprop="url" content="https://www.realgoodtouring.com" />
    <meta name="twitter:title" content="Real Good Touring" />
    <meta name="twitter:url" content="https://www.realgoodtouring.com" />
    <meta name="twitter:card" content="summary" />
    <meta
      name="description"
      content="We tour Youtube, Streaming, and Content Creator acts around the world! Live!"
    />
    <meta
      name="twitter:image"
      content="https://www.realgoodtouring.com/assets/share-large.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <link
      rel="shortcut icon"
      href="https://www.realgoodtouring.com/assets/images/favicon.png"
    ></link>
    <script src="scripts/cookie-consent.min.js"></script>
  </Helmet>
);

export default MetaTags;
