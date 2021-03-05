/*Timer*/
var timer;
var countTime = 0;

function setTimer() {
    timer = setInterval(startTimer, 1000);
}

function startTimer() {
    document.getElementById("score").innerHTML = "Timer";
    countTime++;

    //converts seconds into hr/min/sec
    var hours = Math.floor(countTime / 3600);
    var minutes = Math.floor((countTime - (hours * 3600)) / 60);
    var seconds = countTime % 60;

    //adds a zero in front of hr/min/sec
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    var time = hours + ':' + minutes + ':' + seconds;
    document.getElementById("timer").innerHTML = time;
}

function stopTimer() {
    clearInterval(timer);
    document.getElementById("score").innerHTML = "Score";
    document.getElementById("timer").innerHTML = countTime;
    countTime = 0;
}

/*Authentication*/
function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password);
    document.getElementById('authenticationbox').style.display = 'none';
    document.getElementById('showloggedin').style.display = 'block';
    document.getElementById('logout').style.display = 'block';
}

function signup() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    document.getElementById('authenticationbox').style.display = 'none';
    document.getElementById('showsignedin').style.display = 'block';
    document.getElementById('logout').style.display = 'block';
}

function logout() {
    firebase.auth().signOut;
    document.getElementById('authenticationbox').style.display = 'block';
    document.getElementById('showloggedin').style.display = 'none';
    document.getElementById('showsignedin').style.display = 'none';
    document.getElementById('logout').style.display = 'none';
}

document.getElementById('login').addEventListener('click', login);
document.getElementById('signup').addEventListener('click', signup);
document.getElementById('logout').addEventListener('click', logout);