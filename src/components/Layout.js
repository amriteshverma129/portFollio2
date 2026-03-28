import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ScrollToTopOnNavigate from "./ScrollToTopOnNavigate";

const Layout = () => {
  const theme = useSelector((store) => store.theme.theme);
  const bodyClass =
    theme === "dark"
      ? `bg-gradient-to-br from-gray-900 via-[#171c27] to-gray-900 text-white min-h-screen`
      : `bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900 min-h-screen`;

  return (
    <div className={bodyClass}>
      <ScrollToTopOnNavigate />
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
