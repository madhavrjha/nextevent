/*

==================================
==================================
    index.html
  Toggle SignIn and SignUp Tab
==================================
==================================

*/


const signInBtn = document.querySelector('#login .tab-header div:nth-child(1)');
const signUpBtn = document.querySelector('#login .tab-header div:nth-child(2)');

const signInForm = document.querySelector('#login-form');
const signUpForm = document.querySelector('#signup-form');

// console.log(signInBtn, signUpBtn, signInForm, signupForm);

signUpBtn.addEventListener('click', (e) => {
  signInBtn.classList.remove('active');
  signUpBtn.classList.add('active');
  signInForm.classList.add('hidden');
  signUpForm.classList.remove('hidden');
});

signInBtn.addEventListener('click', (e) => {
  signInBtn.classList.add('active');
  signUpBtn.classList.remove('active');
  signInForm.classList.remove('hidden');
  signUpForm.classList.add('hidden');
});

/*

==================================
==================================
      index.html
    Form Validation
==================================
==================================

*/


/*

==================================
==================================
      index.html
    Sending request to Server
==================================
==================================

*/

