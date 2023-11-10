import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "form" ]

  connect() {
    console.log("Hello from toggle_new_controller.js") // working
  }

  toggleForm() {
    console.log("New checklist button clicked"); // button is not binded to this controller yet!
    this.formTarget.classList.toggle("d-none"); // maybe it's bc the form is not a child of the button?
    // or maybe it's bc visible does not correspond to display none! TBC tomorrow!
  }
}
