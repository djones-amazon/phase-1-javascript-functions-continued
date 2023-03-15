function saturdayFun (someActivity) {
    if (someActivity) {
    } else {
        someActivity = `roller-skate`;
    }
    return (`This Saturday, I want to ${someActivity}!`);
}

function mondayWork (someActivity) {
    if (someActivity) {
    } else {
        someActivity = `go to the office`;
    }
    return (`This Monday, I will ${someActivity}.`);
}

function wrapAdjective (txtWrapper) {
    return function (someAdj) {
        if (someAdj) {
        } else {
            someAdj = `Special`;
        }
        return (`You are ${txtWrapper}${someAdj}${txtWrapper}!`);
    }
}