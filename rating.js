let results = JSON.parse(localStorage.getItem("reactionResults")) || [];
results.sort((a, b) => a.time - b.time);

let tableBody = document.getElementById("resultsTable");
results.forEach(result => {
    let row = `<tr><td>${result.name}</td><td>${result.time}</td></tr>`;
    tableBody.innerHTML += row;
});
