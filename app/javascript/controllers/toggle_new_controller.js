import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "form", "button" ]

  connect() {
    console.log("Hello from toggle_new_controller.js"); // ✅

    // Listen for turbo stream events
    // document.addEventListener("turbo:render", () => {
    //   this.hideFormAndShowButton();
    // });
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
    const newChecklistForm = document.getElementById("new-checklist-form");
    newChecklistForm.classList.add("d-none");
      // this.formTarget.classList.add("d-none"); // also works - too fast for the eye.

    /* Button reppears */
    const newChecklistButton = document.getElementById("new-checklist-button");
    newChecklistButton.classList.remove("d-none");
  }

  hideFormAndShowButtonAfterFormSubmission() {
    console.log("hideFormAndShowButtonAfterFormSubmission() has been called.");

    const newChecklistForm = document.getElementById("new-checklist-form");
    const newChecklistButton = document.getElementById("new-checklist-button");

    if (newChecklistForm && newChecklistButton) {
      // Hide the form
      newChecklistForm.classList.add("d-none");
      // Show the button
      newChecklistButton.classList.remove("d-none");

      window.scrollTo({
        // top: document.body.scrollHeight, // Scroll to the bottom of the page (the scrollHeight has been measured at the first load of the page)
        top: 0, // scroll to the top of the page
        behavior: 'smooth'
      });
    }
  }
}
