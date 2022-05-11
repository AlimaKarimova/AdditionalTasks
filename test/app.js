// document.querySelector('.login-form form').reset();

const userName = document.getElementById('userName');

function validateUserName() {
	if (userName.value == '' || userName.value.indexOf('@') == -1) {
		userName.innerHTML = 'salam'
	}
}
userName.addEventListener('keyup', validateUserName)