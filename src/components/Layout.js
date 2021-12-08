import React from "react";
import Header from "../components/Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header isHeaderFixed={true} />
      {children}
      <Footer />
    </>
  );
}
