document.getElementById('loging-submit').addEventListener('click', function () {
    // get user email
    const userEmail = document.getElementById('user-email').value;
    // console.log(userEmail);


    // get user password
    const userPassword = document.getElementById('user-password').value;
    // console.log(userPassword);

    if (userEmail == 'sayed' && userPassword == 'anas') {
        window.location.href = 'banking.html';
    }
})


