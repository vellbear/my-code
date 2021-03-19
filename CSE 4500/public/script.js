/*Timer*/
var timer;
var countTime = 0;

function setTimer() {
    document.getElementById("start").style.display = 'none';
    document.getElementById("units").style.display = 'inline-block';
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
    document.getElementById("start").style.display = 'inline-block';
    document.getElementById("units").style.display = 'none';
}

/*Authentication*/
function login() {
    let email = document.querySelector('.loginemail').value.toString();
    let password = document.querySelector('.loginpassword').value.toString();

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            document.getElementById('authenticationbox').style.display = 'none';
            document.getElementById('showloggedin').style.display = 'block';
            document.getElementById('logout').style.display = 'block';
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Invalid Username or Password");
        });
}

function signup() {
    let email = document.querySelector('.signupemail').value.toString();
    let password = document.querySelector('.signuppassword').value.toString();

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            document.getElementById('authenticationbox').style.display = 'none';
            document.getElementById('showsignedin').style.display = 'block';
            document.getElementById('logout').style.display = 'block';
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Your email or password is invalid");
        });
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

/*Quote API*/
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
        var quote = JSON.parse(this.responseText);
        console.log(JSON.stringify(quote));
        var quoteContent = quote.content;
        var quoteAuthor = quote.originator.name;
        document.querySelector("#quote").innerHTML = quoteContent;
        document.querySelector("#name").innerHTML = "-" + quoteAuthor;
    }
});

xhr.open("GET", "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en");
xhr.setRequestHeader("x-rapidapi-key", "d9f6d82617msh276e657dbd25914p1e7965jsn09591f308538");
xhr.setRequestHeader("x-rapidapi-host", "quotes15.p.rapidapi.com");

xhr.send(data);