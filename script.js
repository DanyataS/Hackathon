function updateDateTime() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
    };

    const formattedDate = now.toLocaleDateString(undefined, options);
    const formattedTime = now.toLocaleTimeString(undefined, options);

    dateElement.querySelector('span').textContent = formattedDate;
    timeElement.querySelector('span').textContent = formattedTime;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();
