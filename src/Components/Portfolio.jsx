/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/workspace-unsplash.jpg";

const imageAltText = "Workspace with a laptop, notebook, cup of coffee and other items on desk";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "E-Commerce Web Application",
    description:
      "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, and payment integration.",
    url: "https://github.com/johndev/ecommerce-app",
  },
  {
    title: "Task Management Dashboard",
    description:
      "Modern task management application with real-time updates using React and Firebase. Includes drag-and-drop functionality and team collaboration features.",
    url: "https://github.com/johndev/task-dashboard",
  },
  {
    title: "Weather Forecast App",
    description:
      "Responsive weather application that provides real-time weather data and 7-day forecasts using OpenWeather API. Built with React and styled-components.",
    url: "https://github.com/johndev/weather-app",
  },
  {
    title: "Portfolio Website Builder",
    description:
      "A customizable portfolio template that helps developers create their personal websites quickly. Features smooth animations and mobile-first design.",
    url: "https://github.com/johndev/portfolio-builder",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
