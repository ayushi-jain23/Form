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

    let error = document.createElement('div');
    error.classList.add('error');

    if (child && child.value === '') {
        error.innerHTML = 'This field is mandatory.';
        parentsElement.append(error);
    } else {
        let classOfClickedInput = child.getAttribute('class');
        console.log(child.getAttribute('class'));

        //password validation
        if (classOfClickedInput === 'input_password') {
            let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
            if (child.value.match(passRegex) || child.value === '') {
                return true;
            } else {
                error.innerHTML = 'Pass must have 8-15 characters, an uppercase letter, a lowercase letter, a number and a special character';
                child.parentElement.append(error);
            }
        }

        //confirm pass validation
        else if (classOfClickedInput === 'input_repassword') {
            let password = document.querySelector('.input_password');
            if (password.value !== child.value && child.value !== '') {
                error.innerHTML = "Pass doesn't match";
                child.parentElement.append(error);
            }
        }

        //phone number validation
        else if (classOfClickedInput === 'input_phnum') {
            if (child.value.length > 0 && child.value.length <= 9) {
                error.innerHTML = 'Please enter a valid ph num';
                child.parentElement.append(error);
            }
        }

        //current email validation
        else if (classOfClickedInput === 'input_email') {
            let mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (child.value.match(mailRegex) || child.value === '') {
                return true;
            } else {
                error.innerHTML = 'Enter valid email in the format anystring@anystring.any';
                child.parentElement.append(error);
            }
        }
    }
});

submit.addEventListener('click', function (e) {
    alert("Form submitted successfully")
});
