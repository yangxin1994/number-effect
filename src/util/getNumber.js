import isPrime from './isPrime'
export default class getNumber {
    constructor(duration = 500) {
        this.duration = duration;
        this.number = 1;
        this.callback = null;
        this.timer = null;
    }
    start() {
        this.timer = setInterval(() => {
            this.callback && this.callback(this.number, isPrime(this.number));
            this.number++;
        }, this.duration)
    }
    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }
}