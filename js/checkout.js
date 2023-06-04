const form = document.querySelector("#checkoutform");
const fName = document.querySelector("#fname");
const fnameError = document.querySelector("#fnameError");
const lName = document.querySelector("#lname");
const lNameError = document.querySelector("#lnameError");
const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const postal = document.querySelector("#postal");
const postalError = document.querySelector("#postalError");
const btn = document.querySelector(".buybtn");
const confirmation = document.querySelector(".confirmation");
btn.disabled = true;

function validateForm() {
	if (checkLength(fName.value, 0) === true) {
		fnameError.style.display = "none";
	} else {
		fnameError.style.display = "block";
	}
	if (checkLength(lName.value, 0) === true) {
		lName.style.display = "none";
	} else {
		lNameError.style.display = "block";
	}
	if (validateEmail(email.value) === true) {
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
	}
	if (checkLength(address.value, 0) === true) {
		addressError.style.display = "none";
	} else {
		addressError.style.display = "block";
	}
	if (checkLength(city.value, 0) === true) {
		cityError.style.display = "none";
	} else {
		cityError.style.display = "block";
	}
	if (checkLength(postal.value, 0) === true) {
		postalError.style.display = "none";
	} else {
		postalError.style.display = "block";
	}
	if (checkLength(fName.value, 0) && checkLength(lName.value, 0) && validateEmail(email.value) && checkLength(address.value, 0) && checkLength(city.value, 0) && checkLength(postal.value, 0)) {
		btn.disabled = false;
	} else {
		confirmation.innerHTML = "";
		btn.disabled = true;
	}
}

fName.addEventListener("keyup", validateForm);
lName.addEventListener("keyup", validateForm);
email.addEventListener("keyup", validateForm);
address.addEventListener("keyup", validateForm);
city.addEventListener("keyup", validateForm);
postal.addEventListener("keyup", validateForm);
btn.addEventListener("click", validateForm);

function checkLength(value, len) {
	if (value.trim().length > len) {
		return true;
	} else {
		return false;
	}
}

function validateEmail(email) {
	const regEx = /\S+@\S+\.\S+/;
	const patternMatches = regEx.test(email);
	return patternMatches;
}
