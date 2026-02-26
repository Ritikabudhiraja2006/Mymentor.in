document.addEventListener("DOMContentLoaded", loadMessages);

function loadMessages() {

    const chatBox = document.getElementById("chatBox");
    chatBox.innerHTML = "";

    let chats = JSON.parse(localStorage.getItem("interestChat")) || [];

    chats.forEach(chat => {

        const div = document.createElement("div");
        div.classList.add("message");

        if (chat.sender === "Junior") {
            div.classList.add("junior");
        } 
        else if (chat.sender === "Senior") {
            div.classList.add("senior");
        } 
        else {
            div.style.textAlign = "center";
            div.style.background = "transparent";
        }

        div.innerText = chat.message;
        chatBox.appendChild(div);
    });

    chatBox.scrollTop = chatBox.scrollHeight;
}


function sendMessage() {

    const input = document.getElementById("messageInput");
    const text = input.value;

    if (text.trim() === "") return;

    let chats = JSON.parse(localStorage.getItem("interestChat")) || [];

    // Junior message
    chats.push({
        sender: "Junior",
        message: text
    });

    localStorage.setItem("interestChat", JSON.stringify(chats));
    input.value = "";
    loadMessages();

    // Simulated senior reply after 1 second
    setTimeout(() => {

        let chats = JSON.parse(localStorage.getItem("interestChat")) || [];

        chats.push({
            sender: "Senior",
            message: "Nice! Let's discuss more about this topic."
        });

        localStorage.setItem("interestChat", JSON.stringify(chats));
        loadMessages();

    }, 1000);
}