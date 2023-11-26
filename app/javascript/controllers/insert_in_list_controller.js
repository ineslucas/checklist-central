import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = [ "grid" ]
  // formTarget on the <form> element is what will be triggering the action on submit
  // gridTarget on the <div> element is where the new element will be inserted

  connect() {
    console.log("Hello from insert in list controller.")
    console.log(this.element) // checking that it includes both intended targets
    console.log(this.gridTarget);
  }

  disconnect() {
    console.log("Disconnected: Grid has been removed from the DOM.");
  }
}

// I removed the static target of form because it was not picking it up. Because the form is not a direct child of the controller element. It was inside an entirely different view
