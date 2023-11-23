import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "form", "button" ]

  connect() {
    console.log("Hello from toggle_new_controller.js"); // working
  }

  toggleForm(){
    console.log("New checklist button clicked"); // button is not binded to this controller yet!
    // this.buttonTarget.classList.toggle("d-none");
    // introduce an if statement to check if form is visible or not!
    this.formTarget.classList.toggle("d-none");
    // or maybe it's bc visible does not correspond to display none! TBC tomorrow!
  }

  close(){
    const newChecklistForm = document.getElementById("new-checklist-form"); // TBC refactor into Stimulus code
    newChecklistForm.classList.add("d-none"); // making form not display
    console.log("form from close function reached", newChecklistForm); // working

    /* Button reppears */
    // target button and remove d-none class from button
    console.log("button from close function reached", this.buttonTarget);
    // this.buttonTarget.classList.remove("d-none");
  }
}

// TBC - remove new_button when form is visible && animations

// maybe just need to do an if it's visible get the button to become
