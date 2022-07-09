import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        GIVEN a single-page application portfolio for a web developer
        <p></p>
        WHEN I load the portfolio THEN I am presented with a page containing a
        header, a section for content, and a footer
        <p></p>
        WHEN I view the header THEN I am presented with the developer's name and
        navigation with titles corresponding to different sections of the
        portfolio
        <p></p>
        WHEN I view the navigation titles THEN I am presented with the titles
        About Me, Portfolio, Contact, and Resume, and the title corresponding to
        the current section is highlighted
        <p></p>
        WHEN I click on a navigation title THEN I am presented with the
        corresponding section below the navigation without the page reloading
        and that title is highlighted
        <p></p>
        WHEN I load the portfolio the first time THEN the About Me title and
        section are selected by default
      </p>
    </div>
  );
}
