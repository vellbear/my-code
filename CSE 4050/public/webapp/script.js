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

//Cloud Firestore
var firestore = firebase.firestore();
const documentReference = firestore.doc("Users/Mood");
const currentStatus = document.getElementById("moodStatus");
const textbox = document.getElementById("mood");
const saveButton = document.getElementById("save");

function saveToFirestore() {
    const text = textbox.value;
    documentReference.set({
        currentMood: text
    });
}

function updateCurrentStatus() {
    documentReference.onSnapshot(function(doc) {
        if (doc && doc.exists) {
            const myData = doc.data();
            currentStatus.innerText = "Your Mood is: " + myData.currentMood;
        }
    })
}

saveButton.addEventListener('click', saveToFirestore);
getRealtimeUpdates = updateCurrentStatus();


//Enables welcome message
function showWelcome() {
    document.getElementById("welcome").style.display = 'block';
    //document.getElementById("welcomediv").style.display = 'none';
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