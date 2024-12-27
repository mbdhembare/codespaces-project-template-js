/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
/**
 * @typedef {Object} SiteProps
 * @property {string} name - The name of the individual.
 * @property {string} title - The professional title of the individual.
 * @property {string} email - The email address of the individual.
 * @property {string} gitHub - The GitHub username of the individual.
 * @property {string} instagram - The Instagram handle of the individual.
 * @property {string} linkedIn - The LinkedIn username of the individual.
 * @property {string} medium - The Medium username of the individual.
 * @property {string} twitter - The Twitter handle of the individual.
 * @property {string} youTube - The YouTube channel name of the individual.
 */
const siteProps = {
  name: "Monali Dhembare",
  title: "Web Designer & Content Creator",
  email: "monadhembare19@gmail.com",
  gitHub: "mbdhembare",
  instagram: "monalid_19",
  linkedIn: "monali",
  medium: "monali",
  twitter: "monali",
  youTube: "Monali's Channel",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
