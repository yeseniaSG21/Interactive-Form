/**
The "Name" field:
  When page loads, curser should focus on the "name" field.
**/
const name = document.getElementById("name").focus();

/**
The "Job" section:
  The form should hide the "Other job role" field when a role from the dropdown menu is chosen.
  If "Other job role" is chosen, the field to write in another role should display.
**/
const jobRole = document.getElementById("title");
const otherJobField = document.getElementById("other-job-role");
