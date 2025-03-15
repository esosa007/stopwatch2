class StopWatch {
    constructor(startBtn, stopBtn, resetBtn, intervalLength, intervalNum, displayOutput, body) {
        this.startBtn = startBtn,
            this.stopBtn = stopBtn,
            this.resetBtn = resetBtn,
            this.intervalLength = intervalLength,
            this.intervalNum = intervalNum,
            this.displayOutput = displayOutput

        startBtn.addEventListener('click', this.startTimer);
        stopBtn.addEventListener('click', this.stopTimer);
        resetBtn.addEventListener('click', this.resetTimer);
        intervalLength.addEventListener('change', () => {
            return intervalLength.value;
        })
        intervalNum.addEventListener('change', () => {
            return intervalNum.value;
        })
    }

    startTimer = () => {
        this.tick();
        console.log('Starting Timer!');
        this.displayOutput.value = 0;
    };

    tick = () => {
        const displayOutputValue = displayOutput.value;
        const intervalLengthValue = intervalLength.value;
        this.intervalId = setInterval(() => {
            let counter = this.displayOutput.value++
            if (displayOutputValue > intervalLengthValue - 10) {
                console.log(`${displayOutputValue} & ${intervalLengthValue}`)
                body.style.backgroundColor = 'yellow';
            } else if (displayOutputValue > intervalLengthValue) {
                body.style.backgroundColor = 'red'
            } else {
                body.style.backgroundColor = 'green'
            }
        }, 1000);
    };

    stopTimer = () => {
        console.log('Stopping Timer!');
        clearInterval(this.intervalId);
    };

    resetTimer = () => {
        console.log('Resetting Timer!');
        this.stopTimer();
        this.displayOutput.value = '00:00';
        this.intervalNum.value = 1;
        body.style.backgroundColor = 'white';
    }

}

const startBtn = document.querySelector('#startButton');
const stopBtn = document.querySelector('#stopButton');
const resetBtn = document.querySelector('#resetButton');
const intervalLength = document.querySelector('#intervalLength');
const intervalNum = document.querySelector('#intervalNum');
const displayOutput = document.querySelector('#timerDisplay');
const body = document.querySelector('body');

const timer = new StopWatch(startBtn, stopBtn, resetBtn, intervalLength, intervalNum, displayOutput, body);

