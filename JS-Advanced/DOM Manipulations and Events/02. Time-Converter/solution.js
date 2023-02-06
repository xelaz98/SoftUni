function attachEventsListeners() {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    let inputDays = document.getElementById('days')
    let inputHours = document.getElementById('hours')
    let inputMins = document.getElementById('minutes')
    let inputSecs = document.getElementById('seconds')

    document.querySelector('body').addEventListener('click', (event) => {
        if (event.target.getAttribute('value') === 'Convert') {

            let time = event.target.parentElement.textContent

            if (time.includes('Days')) {
                    days = Number(inputDays.value)
                    hours = days * 24
                    minutes = hours * 60
                    seconds = minutes * 60
            } else if (time.includes('Hours')) {
                hours = Number(inputHours.value)
                days = hours / 24;
                minutes = hours * 60
                seconds = minutes * 60
            } else if (time.includes('Minutes')) {
                minutes = Number(inputMins.value)
                hours = minutes / 60
                days = hours / 24;
                seconds = minutes * 60
            } else if (time.includes('Seconds')) {
                seconds = Number(inputSecs.value)
                days = hours / 24;
                hours = minutes / 60
                minutes = seconds / 60
            }

            inputDays.value = days
            inputHours.value = hours
            inputMins.value = minutes
            inputSecs.value = seconds
        }


        });

}