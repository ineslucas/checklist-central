import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "form" ]

  connect() {
    console.log("Hello from toggle_new_controller.js") // working
  }

  // not needed as of now - TBC
  toggleForm() {
    console.log("New checklist button clicked"); // button is not binded to this controller yet!
    this.formTarget.classList.toggle("d-none"); // maybe it's bc the form is not a child of the button?
    // or maybe it's bc visible does not correspond to display none! TBC tomorrow!
  }

  close(e){
    e.preventDefault(); // stops it from redirecting
    const newChecklistForm = document.getElementById("new-checklist-form"); // TBC refactor into Stimulus code
    newChecklistForm.classList.add("d-none"); // making form not display
  }

  // TBC - remove new_button when form is visible && animations
}
