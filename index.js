let form = document.querySelector('.form');
let submit = document.querySelector('.submit');

//focus in
form.addEventListener('focusin', function (e) {
    let parentsElement = e.target.parentElement;
    let err = parentsElement.querySelector('.error');
    if (err !== null) {
        err.remove();
    }
});

//focus out
form.addEventListener('focusout', function (e) {
    let parentsElement = e.target.parentElement;
    let child = parentsElement.querySelector('input');
    // console.log(child);

    let error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = 'This field is mandatory.';

    if (child.value === '') {
        parentsElement.append(error);
    } else {
        let classOfClickedInput = child.getAttribute('class');
        console.log(child.getAttribute('class'));

        //mobile number validation
        if (classOfClickedInput === 'phnum') {
            if (child.value.length > 0 && child.value.length <= 9) {
                let error = document.createElement('div');
                error.classList.add('error');
                error.innerHTML = 'please enter a valid ph num';
                child.parentElement.append(error);
            }
        }

        //password validation
        else if (classOfClickedInput === 'password') {
            let passRegex =
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
            if (child.value.match(passRegex) || child.value === '') {
                return true;
            } else {
                let error = document.createElement('div');
                error.classList.add('error');
                error.innerHTML =
                    'pass must have 8-15 characters, an uppercase letter, a lowercase letter, a number and a special character';
                child.parentElement.append(error);
            }
        }

        //confirm pass validation
        else if (classOfClickedInput === 'repassword') {
            let password = document.querySelector('.password');
            if (password.value !== child.value && child.value !== '') {
                /////replace password
                let error = document.createElement('div');
                error.classList.add('error');
                error.innerHTML = "pass doesn't match";
                child.parentElement.append(error);
            }
        }

        //current email validation
        else if (classOfClickedInput === 'email') {
            let mailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (child.value.match(mailcheck) || child.value === '') {
                return true;
            } else {
                let error = document.createElement('div');
                error.classList.add('error');
                error.innerHTML =
                    'enter valid email in the format anystring@anystring.any';
                child.parentElement.append(error);
            }
        }
    }
});

// submit.addEventListener('click', function (e) {});