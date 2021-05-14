<template>
<div class="message" v-if="showMessage">{{ message }}</div>
  <div class="timer">
      <div class="highscore" v-if="showHighscore"><span>{{ highscoreText }}</span>{{ highscore }}</div>
    <div class="title">{{ title }}</div>
    <div class="timerDisplay">{{ time }}</div>
    <div class="units" v-if="showUnits">
            <span class="hrs">hours</span>
            <span class="min">minutes</span>
            <span class="sec">seconds</span>
    </div>
    <div class="buttons">
        <button v-if="showStartButton" class="button startButton" @click="setTimer" >{{ startButton }}</button>
        <button v-if="showStopButton" class="button stopButton" @click="stopTimer">{{ stopButton }}</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export default {
    data(){
        return{
            title: 'Timer',
            highscoreText: 'Highscore: ',
            highscore: 0,
            startButton: 'Start',
            stopButton: 'Stop',
            time: '00:00:00',
            countTime: 0,
            timer: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            showStartButton: true,
            showStopButton: false,
            showUnits: true,
            showHighscore: false,
            userDoc: '',
            message: '',
            showMessage: false
        }
    },

    beforeCreate(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.userDoc = user.uid;
                this.getHighScore();
                this.showMessage = false
            } else {
                this.highscore = 0;
                this.message = "Please login to save your highscore!"
                this.showMessage = true
                console.log('no user is signed in')
            }
        })
    },

    methods: {
        setTimer(e) {
            e.target.disabled = true
            this.timer = setInterval(this.startTimer, 1000)    
        },

        startTimer() {
            this.title = 'Timer'
            this.showStartButton = false
            this.showStopButton = !this.showStartButton
            this.showUnits = true
            this.showHighscore = false
            this.countTime++

            //converts seconds into hr/min/sec
            this.hours = Math.floor(this.countTime / 3600)
            this.minutes = Math.floor((this.countTime - (this.hours * 3600)) / 60)
            this.seconds = this.countTime % 60

            //adds a zero in front of hr/min/sec
            if (this.hours < 10) {
                this.hours = '0' + this.hours
            }
            if (this.minutes < 10) {
                this.minutes = '0' + this.minutes
            }
            if (this.seconds < 10) {
                this.seconds = '0' + this.seconds
            }

            this.time = this.hours + ':' + this.minutes + ':' + this.seconds
        },

        stopTimer() {
            clearInterval(this.timer)
            this.showUnits = false
            this.showStopButton = false
            this.showStartButton = !this.showStopButton
            this.title = 'Score'
            this.time = 13 * this.countTime
            this.countTime = 0
            this.showHighscore = true
            if(this.highscore < this.time){
                this.highscore = this.time;
                this.saveHighScore(this.highscore)
            }
        },

        saveHighScore(score){
            firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.firestore().collection("Highscore").doc(this.userDoc).set({
                    score: score
                })
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
            } 
        })
        },
        getHighScore(){
            firebase.firestore().collection("Highscore").doc(this.userDoc).get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data().score);
                    this.highscore = doc.data().score
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        }
    }
}
</script>

<style>
    .timer{
        margin: 0 auto;
        text-align: center;
        font-size: 100px;
        color: white;
        padding: auto;
        padding-top: 30px;
        width: 40vw;
        display: flex;
        flex-direction: column;
    }

    .message{
        padding-top: 15px;
        height: 40px;
        background-color: coral;
        width: 100%;
    }

    .highscore{
        margin-bottom: 20px;
        font-size: 50px;
        color: dodgerblue;
        width: 100%;
    }

    .timerDisplay{
        margin-top: 15px;
        color: dodgerblue;
        width: 40vw;
    }

    .units{
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    .min{
        width: 275px;
    }

    .hrs, .sec{
        width: 85px;
    }

    .startButton, .stopButton{
        margin:20px;
    }

    @media only screen and (max-width: 500px) {
        .timer, .timerDisplay{
            font-size: 50px;
            width: 100vw;
        }
        .units{
            font-size: 10px;
        }

        .min{
            width: 136px;
        }

        .hrs, .sec{
            width: 42px;
        }
    }
    
    @media only screen and (max-width: 768px) {
        .timer, .timerDisplay{
            font-size: 75px;
            width: 100vw;
        }
        .units{
            font-size: 15px;
        }

        .min{
            width: 206px;
        }

        .hrs, .sec{
            width: 64px;
        }
    }

    @media only screen and (max-width: 1190px) {
        .timer, .timerDisplay{
            width: 100vw;
        }
    }
</style>