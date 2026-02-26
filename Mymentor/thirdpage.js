function submitQuery() {
    let queryText = document.getElementById("queryInput").value;

    if(queryText === "") {
        alert("Please write a query first!");
        return;
    }

    let queryList = document.getElementById("queryList");

    let newQuery = document.createElement("p");
    newQuery.textContent = "📝 " + queryText;

    queryList.appendChild(newQuery);

    document.getElementById("queryInput").value = "";
}

function joinInterest() {
    let interestText = document.getElementById("interestInput").value;

    if(interestText === "") {
        alert("Enter your interest first!");
        return;
    }

    let interestList = document.getElementById("interestList");

    let newInterest = document.createElement("p");
    newInterest.textContent = "👥 Joined: " + interestText;

    interestList.appendChild(newInterest);

    document.getElementById("interestInput").value = "";
}
function goToSeniorCommunity() {

    const query = document.querySelector("textarea").value;

    if (query.trim() === "") {
        alert("Please write your query.");
        return;
    }

    // 🔥 Clear old chat completely
    localStorage.removeItem("seniorChat");

    // Start fresh chat
    let chats = [];

    chats.push({
        sender: "Junior",
        message: query
    });

    localStorage.setItem("seniorChat", JSON.stringify(chats));

    window.location.href = "seniorcommunity.html";
}
function goToInterestCommunity() {

    const interest = document.getElementById("interestInput").value;

    if (interest.trim() === "") {
        alert("Please enter your interest.");
        return;
    }

    // Clear old interest chat
    localStorage.removeItem("interestChat");

    // Start fresh interest chat
    let chats = [];

    chats.push({
        sender: "System",
        message: "Welcome to the " + interest + " community!"
    });

    localStorage.setItem("interestChat", JSON.stringify(chats));

    window.location.href = "interestcommunity.html";
}