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
import imageUrl from "url:../images/workspace-unsplash.webp";

const imageAltText = "Workspace with a laptop, notebook, cup of coffee and other items on desk";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Lair of Xaldern",
    description:
      "A Python project focused on building a functional game engine from scratch. Developed core logic for player navigation across multiple rooms and implemented an item acquisition system. This project allowed me to practice state management and structured coding before starting my formal CS coursework.",
    url: "https://github.com/MrMadHatt/Lair-of-Xaldern",
  },
  {
    title: "Hiero SDK Python (Fork)",
    description:
      "Contributing to the Hiero SDK for Python - a toolkit for creating, updating, and interacting with on-ledger assets and smart contracts on Hedera. Working with blockchain technology and distributed ledger systems.",
    url: "https://github.com/MrMadHatt/hiero-sdk-python",
  },
  {
    title: "Web Dev Practice",
    description:
      "A project focused on mastering CSS Flexbox and Grid layouts using semantic HTML structure. Hands-on practice with modern web development techniques and responsive design principles.",
    url: "https://github.com/MrMadHatt/web-dev-practice",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}>
      <h2 style={{ textAlign: "center", color: "white" }}>Portfolio</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
          width: "100%",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 0,
          marginBottom: 0,
          paddingTop: "3rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        <div style={{ flex: "0 0 55%", minWidth: 0, marginLeft: "-180px" }}>
          <img
            src={imageUrl}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            alt={imageAltText}
            loading="lazy"
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
