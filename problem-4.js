function gonoVote(array) {
    if (!Array.isArray(array)) {
        return "Invalid";
    }

    const haVot = 0;
    const navot = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "ha") {
            haVot++;
        } else if (array[i] === "na") {
            navot++;
        }
    }

    if (haVot > navot) {
        return true;
    } else if (haVot === navot) {
        return "equal";
    } else {
        return false;
    }
}

const output = gonoVote("ha","ha");
console.log(output);