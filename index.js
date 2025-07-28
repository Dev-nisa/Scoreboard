let homeScore = document.getElementById("home-score")
let homeTotal = 0
let guestScore = document.getElementById("guest-score")
let guestTotal = 0

function homeAdd1() {
    homeTotal += 1
    homeScore.innerText = homeTotal
    checkScore()
}
function homeAdd2() {
    homeTotal += 2
    homeScore.innerText = homeTotal
    checkScore()
}
function homeAdd3() {
    homeTotal += 3
    homeScore.innerText = homeTotal
    checkScore()
}

function guestAdd1() {
    guestTotal += 1
    guestScore.innerText = guestTotal
    checkScore()
}
function guestAdd2() {
    guestTotal += 2
    guestScore.innerText = guestTotal
    checkScore()
}
function guestAdd3() {
    guestTotal += 3
    guestScore.innerText = guestTotal
    checkScore()
}
function reset() {
    homeTotal = 0
    homeScore.innerText = 0
    guestTotal = 0
    guestScore.innerText = 0
    checkScore()
}

function checkScore() {
    if (homeTotal > guestTotal) {
        document.getElementById("home-score").style.color = "#66FF00";
    }
    else if (guestTotal > homeTotal) {
        document.getElementById("guest-score").style.color = "#66FF00";
    }
    else {
        document.getElementById("home-score").style.color = "#A4322F";
        document.getElementById("guest-score").style.color = "#A4322F";
    }
}