let startTime;
let timeout;
let isWaiting = "start";

document.getElementById("button").addEventListener("click", function() {
    let playerName = document.getElementById("nameInput").value.trim();
    if (!playerName) {
        alert("Введите ваше имя перед началом теста!");
        return;
    }

    if (isWaiting == "start") {
        document.getElementById("result").textContent = "Ждите...";
        let button = document.getElementById("button");
        button.style.background = "#ff9f43";
        button.innerHTML = 'Ждите...'

        let randomTime = Math.random() * 3000 + 1000;
        isWaiting = "stop";

        timeout = setTimeout(() => {
            button.style.background = "#4cd137";
            button.innerHTML = 'Нажимайте'
            document.getElementById("result").textContent = "НАЖИМАЙТЕ!";
            startTime = Date.now();
            isWaiting = "result";
        }, randomTime);
    } else if (isWaiting == "result") {
        let reactionTime = Date.now() - startTime;
        document.getElementById("result").textContent = `Ваше время: ${reactionTime} мс`;

        let button = document.getElementById("button");
        button.style.background = "#ff4b5c";
        button.textContent = "Начать тест";
        isWaiting = "start";

        let results = JSON.parse(localStorage.getItem("reactionResults")) || [];
        results.push({ name: playerName, time: reactionTime });
        localStorage.setItem("reactionResults", JSON.stringify(results));
    }
});
