import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="menu"
export default class extends Controller {
  static targets = ["menu", "icon"]

  show() {
    // Toggle menu visibility
    this.menuTarget.classList.toggle("d-none");

    if (this.menuTarget.classList.contains("d-none")){
      // if menu is hidden,
      this.iconTarget.classList.remove("fa-xmark");
      this.iconTarget.classList.add("fa-bars-staggered", "menu-icon");
      this.iconTarget.removeAttribute("id", "close-icon");
      this.iconTarget.setAttribute("id", "navicon"); // Add the navicon ID back
    } else {
      // if menu is visible,
      this.iconTarget.classList.remove("fa-bars-staggered", "menu-icon"); // each class needs to be an individual argument
      this.iconTarget.classList.add("fa-xmark");
      // note that this.element in the Stimulus controller refers to the element with the data-controller="menu" attribute (in this case, the .navbar-wrapper div). If you want to modify the <i> element, you need to target it specifically.
      this.iconTarget.removeAttribute("id", "navicon");
      this.iconTarget.setAttribute("id", "close-icon");
    }

    // Toggle no-scroll class on body
    document.body.classList.toggle("no-scroll");
  }
}
