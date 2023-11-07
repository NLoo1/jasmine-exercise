window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment



function setupIntialValues() {

  const loanAmt = document.getElementById("loan-amount");
  const loanYears = document.getElementById("loan-years");
  const loanRate = document.getElementById("loan-rate");

  loanAmt.value = 10000;
  loanYears.value = 10;
  loanRate.value = 0.2;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  // const loanAmt = document.getElementById("loan-amount");
  // const loanYears = document.getElementById("loan-years");
  // const loanRate = document.getElementById("loan-rate");
  // // const monthlyPayment = document.getElementById("monthly-payment");

  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // let output = (values.amount*(values.amount/12))/(1-(Math.exp(1+(values.rate/12), values.years*12))).toFixed(2);
  let output = values.amount*(values.rate*12)-(1+(values.rate*12))-(values.years*12).toFixed(2);
  console.log(output + " THIS IS OUTPUT");
  return output;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = calculateMonthlyPayment(monthly)
  // monthlyPayment.innerText = "FUCK"

}
