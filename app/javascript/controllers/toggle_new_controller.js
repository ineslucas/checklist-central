import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "form", "button" ]

  connect() {
    console.log("Hello from toggle_new_controller.js"); // ✅
  }

  toggleForm(){
    console.log("New checklist button has been clicked.");
    // Is this function reaching the button? Yes.
    // Is this function reaching the form? Yes.

    if (this.formTarget.classList.contains("d-none")){
      // if form is hidden,
      this.buttonTarget.classList.remove("d-none"); // show button
      this.formTarget.classList.add("d-none"); // hide form
    } else {
      // if form is visible,
      this.buttonTarget.classList.add("d-none"); // hide button
      this.formTarget.classList.remove("d-none"); // show form
    }

    // Note that classList.toggle did not work.
  }

  close(){
    // Is this function reaching the button? No. Only through a Vanilla JS ID.
    // Is this function reaching the form? Yes.

    /* Form dissapears */
    const newChecklistForm = document.getElementById("new-checklist-form"); // TBC - refactor into Stimulus code.
    newChecklistForm.classList.add("d-none");

      // also works - too fast for the eye.
      // this.formTarget.classList.add("d-none");

    /* Button reppears */
    const newChecklistButton = document.getElementById("new-checklist-button");
    newChecklistButton.classList.remove("d-none");
  }
}
