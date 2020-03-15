class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId; //не поняла из задания для чего это св-во!
    }

    clockIsExists (idFind) {
        if (this.alarmCollection.length > 0) {
            if (this.alarmCollection.find(alarm => alarm.id === idFind)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } 

    timeIsExists (timeFind) {
        if (this.alarmCollection.length > 0) {
            if (this.alarmCollection.find(alarm => alarm.time === timeFind)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }     

    addClock (time, callback, id) {
        if (typeof id === 'undefined') {
            console.error('Не передан Id звонка');
        } else if (this.clockIsExists(id)) {
            console.error('Звонок с таким id уже существует');       
        } else {
            this.alarmCollection.push ( {id: id, 
                                         time: time, 
                                         callback: callback}
            );
            console.log(`Звонок с id ${id} добавлен`);  
        }

    }

    removeClock (id) {
        if (typeof id === 'undefined') {
            console.error('Не передан Id звонка');
        } else if (!this.clockIsExists(id)) {
            console.error('Звонок с таким id не найден');       
        } else {
            this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
            console.log(`Звонок с id ${id} удален`); 
        }        
    }

    getCurrentFormattedTime () {
        const dt = new Date();
        const hh = dt.getHours();
        const mi = dt.getMinutes();
        console.log(`${hh}:${mi}`);
        return `${hh}:${mi}`;
    }

    checkClock () {
        const dt = this.getCurrentFormattedTime ();
        if (this.timeIsExists (dt)) {
            return this.alarmCollection.find(alarm => alarm.time === dt).callback();
        };
    }

    start () {
        if (!this.timerId) {
            this.timerId = setInterval(() => this.checkClock(), 2000);
        }
    }

    stop () {
        if (this.timerId) {
            clearInterval(this.timerId);
            delete this.timerId;
        }
    }    

    printAlarms () {
        this.alarmCollection.forEach(alarm => {
            const id = alarm.id;
            const time = alarm.time;
            console.log(`Будильник ${id} заведен на ${time}`);
        });
    }

    clearAlarms () {
        this.stop();
        this.alarmCollection.forEach(alarm => {
            removeClock (alarm.id);
        });        
    }
}


const timer1 = new AlarmClock();

timer1.addClock("21:00", () => console.log("Скоро спать!"), 1);
timer1.addClock("21:01", () => {console.log("Пора готовиться ко сну!"); timer1.removeClock(2);}, 2);
timer1.addClock("21:00", () => console.log("!!!")); //без id
timer1.addClock("21:02", () => {console.log("Иди спать! Завтра рано на работу!"); timer1.clearAlarms(); timer1.printAlarms();}, 3);
timer1.addClock("21:00", () => console.log("Скоро спать!"), 1);//существующий id
timer1.printAlarms();
console.log(timer1);
timer1.start();
//timer1.stop();