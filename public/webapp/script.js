/*Authentication*/
document.getElementById('login').addEventListener('click', e => {
    const promise = firebase.auth().signInWithEmailAndPassword(document.getElementById('email'), document.getElementById('password'));
    promise.catch(e => console.log(e.message));
});

document.getElementById('signup').addEventListener('click', e => {
    const promise = firebase.auth().createUserWithEmailAndPassword(document.getElementById('email'), document.getElementById('password'));
    promise.catch(e => console.log(e.message));
});

document.getElementById('logout').addEventListener('click', e => {
    firebase.auth().signOut;
});

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log('not loged in');
    }
});

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