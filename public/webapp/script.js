/*Authentication*/

function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password);
}

function signup() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
}

function logout() {
    firebase.auth().signOut;
}

document.getElementById('login').addEventListener('click', login);
document.getElementById('signup').addEventListener('click', signup);
document.getElementById('logout').addEventListener('click', logout);

//Enables welcome message
function showWelcome() {
    document.getElementById("welcome").style.display = 'block';
    document.getElementById("welcomediv").style.display = 'none';
}

//Changes color of container
let colorPos = { x: 0 }; /*note to self: this is an obj. You can use it to store values*/

function changeBoxColor() {
    let colors = ['#FFDB0D', '#5194D6', '#FF0040'];
    let color = colors[colorPos.x];

    document.getElementById("boxes").style.backgroundColor = colors[colorPos.x];

    if (colorPos.x < 2)
        colorPos.x++;
    else
        colorPos.x = 0;
}

//Simple counter 
let counter = { x: 1 }

function countDown() {
    let newVal = 0;

    newVal = counter.x++;

    document.getElementById("b3").innerHTML = newVal;
}