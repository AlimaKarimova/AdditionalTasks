const username = document.querySelector('#email');

function checkUsername(e) {
    // e.preventDefault();
    // if (username.value == null || username.value.indexOf('@') == -1 ||
    //     username.value.indexOf('.') == -1) {
    //     username.classList('red');

    // }
    username.value.innerHTML += 'salam';

}
username.addEventListener('click', checkUsername);