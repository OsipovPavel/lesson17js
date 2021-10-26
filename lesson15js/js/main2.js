'use strict';

let formRegistration = document.querySelector('#form-registration');
let formUser = document.querySelector('#form-user');
let textWrong = document.querySelectorAll('.text-wrong');
let expDate = new Date;

if (!!formRegistration) {
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let repeatPassword = document.querySelector('#repeat-password');
    
    formRegistration.addEventListener('submit', event => {
        event.preventDefault();
        let regStr = /^\w+([._-]\w+)*@\w+([._-]\w+)*\.\w{2,3}$/;
        if (!regStr.test(email.value)) {
            textWrong[0].classList.remove('unvisible');
            return;
        } else {
            textWrong[0].classList.add('unvisible');
        }
        if (!/[a-z]/.test(password.value) || 
            !/[A-Z]/.test(password.value) || 
            !/\d/.test(password.value) ||
            password.value.length < 6) {
            textWrong[1].classList.remove('unvisible');
            return;
        } else {
            textWrong[1].classList.add('unvisible');
        }
        if (password.value !== repeatPassword.value) {
            textWrong[2].classList.remove('unvisible');
        } else {
            textWrong[2].classList.add('unvisible');
        }
        expDate.setTime((new Date).getTime()+60*60*1000);
        document.cookie = 'login='+ email.value + '; path=/; expires=' + expDate.toGMTString();
        window.location.href='index23.html';
    })
}

if (!!formUser) {
    let userData = document.cookie.split(';');
    let firstName = document.querySelector('#first-name');    
    let lastName = document.querySelector('#last-name');
    let yearBirthday = document.querySelector('#year-birthday');
    let gender = document.querySelector('#gender');
    let phone = document.querySelector('#phone');
    let skype = document.querySelector('#skype');
    let userLogin = userData[0].trim().split('=')[1];
    let login = document.querySelector('.user-login');
    let linkExit = document.querySelector('.link-exit');
    login.textContent = userLogin;
    const fillForm = () => {
        console.dir(userData);
        userData.forEach(elem => {
            let item = elem.trim().split('=');
            console.dir(item);
            switch (item[0]) {
                case 'firstName': firstName.value = item[1];
                    break;
                case 'lastName': lastName.value = item[1];
                    break;
                case 'yearBirthday': yearBirthday.value = item[1];
                    break;
                case 'gender': gender.value = item[1];
                    break;
                case 'phone': phone.value = item[1];
                    break;
                case 'skype': skype.value = item[1];
                    break;
            }
        })
        
    }
    if (!userLogin) window.location.href = index2.html;
    if (userData.length>1) fillForm();
    linkExit.addEventListener('click', () => {
        document.cookie = 'login='+ '' + '; path=/; expires=0';
        window.location.href = index2.html;
    })
    formUser.addEventListener('submit', event => {
        event.preventDefault();
const CURRENT_YEAR = (new Date).getFullYear();

let abc = /^[A-Z][a-z]*(-[A-Z][a-z]*)*$/;
if (!abc.test(firstName.value) || firstName.value > 20) {
    textWrong[0].classList.remove('unvisible');
    return;
} else {
    textWrong[0].classList.add('unvisible');
}
if (!abc.test(lastName.value) || lastName.value > 20) {
    textWrong[1].classList.remove('unvisible');
    return
} else {
    textWrong[1].classList.add('unvisible');
}
let year = +yearBirthday.value;
if (year < 1900 || year > CURRENT_YEAR) {
    textWrong[2].classList.remove('unvisible');
} else {
    textWrong[2].classList.add('unvisible');
}
if (!!phone.value) {
    let phoneStr = /^\+?[0-9() -]{10,}/;
    let ppp = /\D*[ ()+-]*/g;
    let gg = phone.value.replace(ppp, '');
    if (!phoneStr.test(phone.value) || gg.length < 10 || gg.length > 12) {
        textWrong[3].classList.remove('unvisible');
        return;
    } else {
        textWrong[3].classList.add('unvisible');
    }
}
if (!!skype.value) {
    let skypeStr = /^[0-9a-zA-Z.-]+$/;
    if (!skypeStr.test(skype.value)) {
        textWrong[4].classList.remove('unvisible');
        return;
    } else {
        textWrong[4].classList.add('unvisible');
    }
}
// console.dir(gender.value);
document.cookie = 'firstName='+firstName.value+'path=?/; expires=' + expDate; 
document.cookie = 'LastName='+lastName.value+'path=?/; expires=' + expDate; 
document.cookie = 'yearBirthday='+yearBirthday.value+'path=?/; expires=' + expDate; 
document.cookie = 'gender='+gender.value+'path=?/; expires=' + expDate; 
document.cookie = 'phone='+phone.value+'path=?/; expires=' + expDate; 
document.cookie = 'skype='+skype.value+'path=?/; expires=' + expDate; 
})
}