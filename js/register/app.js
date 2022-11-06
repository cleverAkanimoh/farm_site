const signupBtn = document.querySelector('#signupBtn');
const signinBtn = document.querySelector('#registeredBtn');

const signinEl = document.querySelector('.signinForm');
const signupEl = document.querySelector('.signupForm');

const signin = (e) => {
    e.preventDefault();
    signinEl.style.display = 'flex';
    signupEl.style.display = 'none';
}
const signup = (e) => {
    e.preventDefault();
    signinEl.style.display = 'none';
    signupEl.style.display = 'flex';
}

signupBtn.onclick = signup;
signinBtn.onclick = signin;