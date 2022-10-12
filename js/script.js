/**
The "Name" field:
  When page loads, curser should focus on the "name" field.
**/
const name = document.getElementById("name").focus();

/**
The "Job" section:
  The form should hide the "Other job role" field when a role from the dropdown menu is chosen.
  If "Other" is chosen, the field to write in another role should display.
**/
const jobRole = document.getElementById("title");
const otherJobField = document.getElementById("other-job-role");
otherJobField.style.display = 'none';

jobRole.addEventListener('change', (event) => {
  if (event.target.value === 'other') {
    otherJobField.style.display = "block";
  } else {
    otherJobField.style.display = "none";
  }
});

/**
The "T-Shirt Info" section:
  The "Color" menu should be disabled by default and then enabled once the T-shirt theme is selected.
  The color options need to be displayed and hidden based on the theme selected.
**/




/**
The "Register for Activities" section:
  As the user selects activities, the total cost should update and display on the form in real time.
**/




/**
The "Payment Info" section:
  The credit card payment should be displayed by default, while payment methods of Paypal and Bitcoin are hidden.
  As users select payment methods from the drop-down menu, the other options should be hidden.
**/




/**
The "Form Validation" section:
  Users should not be allowed to submit the form if one or more required fields/sections are left empty or filled out incorrectly.
  When the submit button is clicked, the form should submit if correctly filled out and refresh all fields.
**/





/**
The "Accessibility" section:
  Improve accessibilities so features can receieve styling as user interact with the form.
  As "Register for Activities" are checkboxed, the respective selection should be in focus.
  When invalid errors on fields/sections, the corresponding field will be highlighted.
**/
