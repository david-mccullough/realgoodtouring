import * as React from "react";
import { Link } from "gatsby";

// markup
const NotFoundPage = () => {
  return (
    <>
      <h1>We couldn’t find what you were looking for.</h1>
      <Link to="/">Go home</Link>
    </>
  );
};

export default NotFoundPage;
