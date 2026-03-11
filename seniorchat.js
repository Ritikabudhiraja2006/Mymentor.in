document.addEventListener("DOMContentLoaded", loadMessages);

function loadMessages() {

    const chatBox = document.getElementById("chatBox");
    chatBox.innerHTML = "";

    let chats = JSON.parse(localStorage.getItem("seniorChat")) || [];

    chats.forEach(chat => {

        const div = document.createElement("div");
        div.classList.add("message");

        if (chat.sender === "Junior") {
            div.classList.add("junior");
        } else {
            div.classList.add("senior");
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

    let chats = JSON.parse(localStorage.getItem("seniorChat")) || [];

    chats.push({
        sender: "Junior",
        message: text
    });

    localStorage.setItem("seniorChat", JSON.stringify(chats));

    input.value = "";
    loadMessages();

    // Senior auto reply (normal conversation style)
    setTimeout(() => {

        let chats = JSON.parse(localStorage.getItem("seniorChat")) || [];

        chats.push({
            sender: "Senior",
            message: "I understand your concern. Let's solve this step by step."
        });

        localStorage.setItem("seniorChat", JSON.stringify(chats));
        loadMessages();

    }, 1000);
}