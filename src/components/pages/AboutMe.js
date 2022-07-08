import React from "react";

export default function AboutMe() {
  return (
    <div>
      <h1>HOME / ABOUT ME</h1>
      <p>
        This is the home page, with about me info (and active 'about me' nav
        link)
      </p>
      <h2>HEADER</h2>
      <p>
        WHEN I load the portfolio THEN I am presented with a page containing a
        header, a section for content, and a footer WHEN I view the header
      </p>
      <p>
        THEN I am presented with the developer's name and navigation with titles
        corresponding to different sections of the portfolio
      </p>
      <p>
        WHEN I view the navigation titles THEN I am presented with the titles
        About Me, Portfolio, Contact, and Resume, and the title corresponding to
        the current section is highlighted
      </p>
      <p>
        WHEN I click on a navigation title THEN I am presented with the
        corresponding section below the navigation without the page reloading
        and that title is highlighted
      </p>
      <h2>ABOUT ME</h2>
      <p>
        WHEN I load the portfolio the first time THEN the About Me title and
        section are selected by default
      </p>
      <p>
        WHEN I am presented with the About Me section THEN I see a recent photo
        or avatar of the developer and a short bio about them
      </p>

      <h2>FOOTER</h2>
      <p>
        WHEN I view the footer THEN I am presented with text or icon links to
        the developer’s GitHub and LinkedIn profiles, and their profile on a
        third platform (Stack Overflow, Twitter)
      </p>
    </div>
  );
}
