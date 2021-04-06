<template>
  <div class="timer">
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
export default {
    data(){
        return{
            title: 'Timer',
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
            showUnits: true
        }
    },

    methods: {
        setTimer() {
            this.timer = setInterval(this.startTimer, 1000)
        },

        startTimer() {
            this.title = 'Timer'
            this.showStopButton = true
            this.showStartButton = false
            this.showUnits = true
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
            this.showStartButton = true
            this.showStopButton = false
            this.title = 'Score'
            this.time = 13 * this.countTime
            this.countTime = 0
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