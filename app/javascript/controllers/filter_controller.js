import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="filter"
export default class extends Controller {
  static targets = [ "allChecklists", "gymChecklists", "airportChecklists", "otherChecklists", "allButton", "gymButton", "airportButton", "otherButton" ]

  connect() {
    console.log("Hello from filter_controller.js")
  }

  showAll() {
    // Button Styling
    this.allButtonTarget.classList.add("status-selected"); // show all button as selected
    this.allButtonTarget.classList.remove("status-unselected"); // remove unselected class from all button

    // show other buttons as unselected
    this.gymButtonTarget.classList.add("status-unselected");
    this.gymButtonTarget.classList.remove("status-selected");
    this.airportButtonTarget.classList.add("status-unselected");
    this.airportButtonTarget.classList.remove("status-selected");
    this.otherButtonTarget.classList.add("status-unselected");
    this.otherButtonTarget.classList.remove("status-selected");

    // hide other checklists and show correct collection
    this.allChecklistsTarget.classList.remove("d-none"); // show all checklists
    this.gymChecklistsTarget.classList.add("d-none");
    this.airportChecklistsTarget.classList.add("d-none");
    this.otherChecklistsTarget.classList.add("d-none");
  }

  showGym() {
    // Button Styling
    this.gymButtonTarget.classList.add("status-selected"); // show gym button as selected
    this.gymButtonTarget.classList.remove("status-unselected"); // remove unselected class from gym button

    // show other buttons as unselected
    this.allButtonTarget.classList.add("status-unselected");
    this.allButtonTarget.classList.remove("status-selected");
    this.airportButtonTarget.classList.add("status-unselected");
    this.airportButtonTarget.classList.remove("status-selected");
    this.otherButtonTarget.classList.add("status-unselected");
    this.otherButtonTarget.classList.remove("status-selected");

    // hide other checklists and show correct collection
    this.gymChecklistsTarget.classList.remove("d-none"); // show gym checklists
    this.allChecklistsTarget.classList.add("d-none");
    this.airportChecklistsTarget.classList.add("d-none");
    this.otherChecklistsTarget.classList.add("d-none");
  }

  showAirport() {
    // Button Styling
    this.airportButtonTarget.classList.add("status-selected"); // show airport button as selected
    this.airportButtonTarget.classList.remove("status-unselected"); // remove unselected class from airport button

    // show other buttons as unselected
    this.allButtonTarget.classList.add("status-unselected");
    this.allButtonTarget.classList.remove("status-selected");
    this.gymButtonTarget.classList.add("status-unselected");
    this.gymButtonTarget.classList.remove("status-selected");
    this.otherButtonTarget.classList.add("status-unselected");
    this.otherButtonTarget.classList.remove("status-selected");

    // hide other checklists and show correct collection
    this.airportChecklistsTarget.classList.remove("d-none"); // show airport checklists
    this.allChecklistsTarget.classList.add("d-none");
    this.gymChecklistsTarget.classList.add("d-none");
    this.otherChecklistsTarget.classList.add("d-none");
  }

  showOther() {
    console.log("showOther() has been called");
    // Button Styling
    this.otherButtonTarget.classList.add("status-selected"); // show other button as selected
    this.otherButtonTarget.classList.remove("status-unselected"); // remove unselected class from other button

    // show other buttons as unselected
    this.allButtonTarget.classList.add("status-unselected");
    this.allButtonTarget.classList.remove("status-selected");
    this.gymButtonTarget.classList.add("status-unselected");
    this.gymButtonTarget.classList.remove("status-selected");
    this.airportButtonTarget.classList.add("status-unselected");
    this.airportButtonTarget.classList.remove("status-selected");

    // hide other checklists and show correct collection
    this.otherChecklistsTarget.classList.remove("d-none"); // show other checklists
    this.allChecklistsTarget.classList.add("d-none");
    this.gymChecklistsTarget.classList.add("d-none");
    this.airportChecklistsTarget.classList.add("d-none");
  }
}
