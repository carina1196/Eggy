window.onload = function() {
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();  // Show the modal
    };

const eggTiming = {"runny": 300, "soft": 480, "hard":600}

function setTimer(img) {
    let duration;
    const timerElement = document.getElementById("timer");
    const x = img.id;

    if (timerElement.innerText != '00:00'){
        try {
            clearInterval(countdown)
        } catch (e) {
        } finally {
            document.getElementById('stopBtn').innerText = 'Stop'
        }
    }
    duration = eggTiming[x]
    const minutes = Math.floor(duration/60)
    
    timerElement.textContent = `${ minutes < 10 ? "0" : ""}${minutes}:00`;
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
}

function updateTimer(durationLeft) {
    const timerElement = document.getElementById("timer");
    let minutes = Math.floor(durationLeft/60)
    let seconds = durationLeft%60
    timerElement.textContent = `${ minutes < 10 ? "0" : ""}${minutes}:${ seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
    const time = document.getElementById("timer").innerText;
    document.getElementById('startBtn').disabled = true;
    document.getElementById('stopBtn').disabled = false;
    let timeLeft;

    switch (time){
        case "05:00":
            timeLeft = 300;
            break
        case "08:00":
            timeLeft = 480;
            break
        case "10:00":
            timeLeft = 600;
            break
        default:
            timeLeft = 0
    }
    
    countdown = 
        setInterval(() => {
            if (timeLeft == 0) {
                document.getElementById("timer").textContent = 'Time\'s up!'
            } else {
                timeLeft--;
                updateTimer(timeLeft)
            }
        },1000)
    
}

function stopTimer () {
    const btn = document.getElementById('stopBtn');
    if (btn.textContent == 'Stop'){
        clearInterval(countdown);
        btn.innerText = 'Reset'
    } else if (btn.textContent == 'Reset') {
        document.getElementById("timer").textContent = '00:00';
        document.getElementById('stopBtn').disabled = true;
        btn.innerText = 'Stop'
    }
}