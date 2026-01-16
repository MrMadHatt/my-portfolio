/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import imageUrl from "url:../images/linesofcode-unsplash.jpg";

const imageAltText = "A computer screen displaying lines of code";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Student at Pikes Peak State College pursuing a degree in Computer Science. Passionate about front/back-end development and game design, with a keen interest in AI and machine learning technologies. ";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Python",
  "HTML, CSS, JavaScript",
  "UI/UX Design",
  "SQLlite",
  "Game engine development",
  "Microsoft Office Suite",
  "Git/GitHub",
  "Learning: React.js, Node.js, PyPi Packages, Pandas, Front and back-end web development.",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  '"Debugging is like being the detective in a crime movie where you\'re also the murderer." - Every developer ever';

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={imageUrl} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 1,
            fontSize: "1rem",
            margin: "2rem 3rem",
            gap: "3rem",
            lineHeight: "1.8",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
