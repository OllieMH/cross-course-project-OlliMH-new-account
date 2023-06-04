const form = document.querySelector("#contactform");
const mail = document.querySelector("#mail");
const mailError = document.querySelector("#mailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const btn = document.querySelector("button");
const confirmation = document.querySelector(".confirmation");
btn.disabled = true;

function validateForm() {
	if (validateEmail(mail.value) && checkLength(message.value, 9)) {
		btn.disabled = false;
	} else {
		confirmation.innerHTML = "";
		btn.disabled = true;
	}
	if (validateEmail(mail.value) === true) {
		mailError.style.display = "none";
	} else {
		mailError.style.display = "block";
	}
	if (checkLength(message.value, 9) === true) {
		messageError.style.display = "none";
	} else {
		messageError.style.display = "block";
	}
}

mail.addEventListener("keyup", validateForm);
message.addEventListener("keyup", validateForm);

function submitForm(event) {
	event.preventDefault();
	confirmation.innerHTML = `Form has been submitted!`;
	form.reset(); //Not working for some reason
}

btn.addEventListener("click", submitForm);

function checkLength(value, len) {
	if (value.trim().length > len) {
		return true;
	} else {
		return false;
	}
}

function validateEmail(mail) {
	const regEx = /\S+@\S+\.\S+/;
	const patternMatches = regEx.test(mail);
	return patternMatches;
}
