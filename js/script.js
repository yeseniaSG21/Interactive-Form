/**********
  The "Name" field:
    When page loads, curser should focus on the "name" field.
**********/
document.getElementById("name").focus();

/**********
  The "Job" section:
    The form should hide the "Other job role" field when a role from the dropdown menu is chosen.
    If "Other" is chosen, the field to write in another role should display.
**********/
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

/**********
  The "T-Shirt Info" section:
    The "Color" menu should be disabled by default and then enabled once the T-shirt design theme is selected.
    The color options need to be displayed and hidden based on the theme selected.
**********/
const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');
shirtColor.disabled = true;
const designTheme = shirtColor.children;

shirtDesign.addEventListener('change', (event) => {
  shirtColor.disabled = false;
  for (let i=0; i < designTheme.length; i++) {
    if (event.target.value === designTheme[i].getAttribute('data-theme')) {
      designTheme[i].hidden = false;
      designTheme[i].setAttribute('selected', true);
    } else {
      designTheme[i].hidden = true;
      designTheme[i].removeAttribute('selected');
    }
  }
});

/**********
  The "Register for Activities" section:
    As the user selects activities, the cost of the activities should total and display on the form in real time.
**********/
const allActivities = document.getElementById('activities-box');
const cost = document.getElementById('activities-cost');
let totalCost = 0;

allActivities.addEventListener('change', (event) => {
  let activityCost = +(event.target.getAttribute('data-cost'));
  if (event.target.checked) {
    totalCost += activityCost;
  } else {
    totalCost -= activityCost;
  }

  cost.innerHTML = `Total: $${totalCost}`;
});

/**********
  The "Payment Info" section:
    The credit card payment should be displayed by default, while payment methods of PayPal and Bitcoin are hidden.
    As users select payment methods from the drop-down menu, the other options should be hidden.
**********/
const paymentMethod = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

paypal.style.display = 'none';
bitcoin.style.display = 'none';
paymentMethod.children[1].setAttribute('selected', true);

paymentMethod.addEventListener("change", (event) => {
  if (event.target.value === 'paypal') {
    paypal.style.display = 'block';
    creditCard.style.display = 'none';
    bitcoin.style.display = 'none';
  } else if (event.target.value === 'bitcoin') {
    bitcoin.style.display = 'block';
    paypal.style.display = 'none';
    creditCard.style.display = 'none';
  } else {
    creditCard.style.display = 'block';
    paypal.style.display = 'none';
    bitcoin.style.display = 'none';
  }
});

/**********
  The "Form Validation" section:
    Users should not be allowed to submit the form if one or more required fields/sections are left empty or filled out incorrectly.
    When the submit button is clicked, the form should submit if correctly filled out and refresh all fields.
    Regex format referenced from stackoverflow and codexworld
**********/
const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const card = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');

//Validate "Name" field to only contain letters
function isNameValid() {
  let nameInput = name.value;
  return /^[a-zA-Z]+ [a-zA-Z]+$/.test(nameInput);
}

//Validate "Email" field to contain letters and digits in email form
function isEmailValid() {
  let emailInput = email.value;
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput);
}

//Validate "Register for Activities"
function isRegisterValid() {
  let registerValid = totalCost > 0;
  return registerValid;
}

//Validate "Card Number" to contain 13-16 digits
function isCardNumberValid() {
  let cardInput = card.value;
  return /^\d{13,16}$/.test(cardInput);
}

//Validate "Zip code" to contain 5 digits
function isZipCodeValid() {
  let zipInput = zipCode.value;
  return /^\d{5} ?$/.test(zipInput);
}

//Validate "CVV" to contain 3 digits
function isCvvValid() {
  let cvvInput = cvv.value;
  return /^\d{3} ?$/.test(cvvInput);
}

//Add an event listener to prevent invalid information from submitting the form
form.addEventListener('submit', (event) => {
  if (!isNameValid()){
    event.p
  }

})




/**********
  The "Accessibility" section:
    Improve accessibilities so features can receieve styling as user interact with the form.
    As "Register for Activities" are checkboxed, the respective selection should be in focus.
    When invalid errors on fields/sections, the corresponding field will be highlighted.
**********/
const activitySelect = document.querySelectorAll('input[type="checkbox"]');

for (let i=0; i < activitySelect.length; i++) {
  activitySelect[i].addEventListener('focus', (event) => {
    event.target.parentElement.classList.add('focus');
  })
  activitySelect[i].addEventListener('blur', (event) => {
    event.target.parentElement.classList.remove('focus');
  })
}
