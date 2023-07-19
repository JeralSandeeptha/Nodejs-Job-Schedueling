const schedule = require('node-schedule');

// At a particular date and time
const someDate = new Date('2020-09-28T20:30:00.000+5.30');
schedule.scheduleJob(someDate, () => {
    console.log('I ran.....');
});

// At recurrent intervals
//we can find intervals at crontab guru
schedule.scheduleJob('*/5 * * * *', () => {
    console.log('I ran.....');
});

// canceling jobs
//first method
schedule.scheduleJob('my-job', () => {
    console.log('I ran.....');
    schedule.cancelJob('my-job');
});

//second method
const myJob = schedule.scheduleJob('', () => {
    console.log('I ran....');
    myJob.cancel();
});