import React from "react";
const Settings = props => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
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
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/home">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/settings">
                Settings
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/logout">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <h1>Hello {props.name},Welcome to Settings page</h1>
    </div>
  );
};
export default Settings;
