import React from "react";
const Home = props => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Test Logo
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav "
        >
          <ul class="navbar-nav">
            <li class="nav-item active ">
              <a class="nav-link mr-5" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link mr-5" href="/settings">
                Settings
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="/logout">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container mt-5">
        <h1>Hello {props.name},Welcome to Home page</h1>
      </div>
    </div>
  );
};
export default Home;
