import React from "react";

export default function Portfolio() {
  
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        WHEN I am presented with the Portfolio section THEN I see titled images
        of six of the developer’s applications with links to both the deployed
        applications and the corresponding GitHub repositories
      </p>
      <div className="cards-container">
        <div className="card">
           CARD IMAGE
          <div class="container">
            <h4>
              <b>Project name</b>
            </h4>
            <p>Project description</p>
            <p>Project Links</p>
          </div>
        </div>
      </div>
    </div>
  );
}
