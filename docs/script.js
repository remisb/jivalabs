import { html, render } from 'lit-html';

class AppNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const navBarTemplate = html`
      <!-- navigation bar -->
      <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <!-- Jiva Labs logo-->
          <a class="navbar-item">
            <img src="img/jiva-labs-1.png" width="90" height="28">
          </a>
          <!-- /Jiva Labs logo-->
      
          <!-- nav bar burger-->
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navBarBurger">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <!-- /nav bar burger-->
        </div>
      
        <div id="navBarBurger" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="aboutUs.html">
              About us
            </a>
      
            <a class="navbar-item" href="technologicalStack.html">
              Technological stack
            </a>
      
            <a class="navbar-item" href="contactUs.html">
              Contact us
            </a>
          </div>
        </div>
      </nav>
      <!-- /navigation bar -->
    `;

    render(navBarTemplate, this.shadowRoot);
  }
}

window.customElements.define('app-navbar', AppNavbar);