function calculate_time_to_walk(steps, length, speed) {
    // steps, length, speed = Number(steps), Number(length), Number(speed)
    let distanceInMeters = length * steps;
    let speedMetersInSeconds = speed / 3.6;
    let time = distanceInMeters / speedMetersInSeconds;
    let delay_time = Math.floor(distanceInMeters / 500);

    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time - (minutes * 60));
    let hours = Math.floor(time / 3600);

    let outputSeconds = seconds.toString().padStart(2, '0');
    let outputMinutes = (minutes + delay_time).toString().padStart(2, '0');
    let outputHours = hours.toString().padStart(2, '0');

    console.log(`${outputHours}:${outputMinutes}:${outputSeconds}`)
}


calculate_time_to_walk(4000, 0.60, 5)

calculate_time_to_walk(2564, 0.70, 5.5)