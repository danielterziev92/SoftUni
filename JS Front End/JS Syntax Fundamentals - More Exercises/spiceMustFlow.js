function spiceMustFlow(source) {
    let workedDays = 0;
    const consumes = 26;
    let totalSource = 0;

    while (true) {

        if (source < 100) {
            totalSource < consumes
                ? totalSource -= totalSource
                : totalSource -= consumes;
            break;
        }

        totalSource -= consumes;
        totalSource += source;

        source -= 10;
        workedDays += 1;
    }

    console.log(workedDays);
    console.log(totalSource);
}

spiceMustFlow(111);
spiceMustFlow(450);