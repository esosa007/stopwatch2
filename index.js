class StopWatch{
    constructor(startBtn, stopBtn, resetBtn, timerInput) {
        this.startBtn = startBtn,
        this.stopBtn = stopBtn,
        this.resetBtn = resetBtn,
        this.timerInput = timerInput

        startBtn.addEventListener('click', this.startTimer);
        stopBtn.addEventListener('click', this.stopTimer);
        resetBtn.addEventListener('click', this.resetTimer);
        timerInput.addEventListener('change', () => {
            return timerInput.value;
        })
    }

    startTimer = () => {
        console.log('Starting Timer!');
        this.intervalId = setInterval(() => {
            this.timerInput.value++
        }, 1000)
    };

    stopTimer = () => {
        console.log('Stopping Timer!');
        clearInterval(this.intervalId);
    };

    resetTimer = () => {
        console.log('Resetting Timer!');
        this.stopTimer();
        this.timerInput.value = '0';
    }

}

const inputTimer = document.querySelector('#timerInput');
const startBtn = document.querySelector('#startButton');
const stopBtn = document.querySelector('#stopButton');
const resetBtn = document.querySelector('#resetButton');

const timer =  new StopWatch(startBtn, stopBtn, resetBtn, inputTimer);