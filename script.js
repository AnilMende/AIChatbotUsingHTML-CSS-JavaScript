const messageInput = document.querySelector(".message-input")
const chatBody = document.querySelector(".chat-body");
const sendMessageButton = document.querySelector("#send-message");


const userData = {
    message:null
}



// create a message element with dynamic classes and return it
const createMessageElement = (content,classes) => {
    const div = document.createElement("div");

    div.classList.add("message", classes);
    div.innerHTML = content;
    return div;
}

const handleOutgoingMessage = (e) => {
    e.preventDefault();
    userData.message = messageInput.value.trim()

    // clearing the textarea after the message is sent
    messageInput.value = ""

    
    // create and display user image
    const messageContent = `<div class="message-text"></div>`;
    const outgoingMessageDiv = createMessageElement(messageContent,"user-message");

    // making element as textcontent
    outgoingMessageDiv.querySelector(".message-text").textContent = userData.message;
    chatBody.appendChild(outgoingMessageDiv);
}

// Handling the Enter Key press for sending messages

messageInput.addEventListener("keydown", (e) => {
    const userMessage = e.target.value.trim();

    if(e.key === "Enter" && userMessage){
        // handleOutgoingMessage(userMessage);
        handleOutgoingMessage(e)
    }
});


sendMessageButton.addEventListener("click",(e) => handleOutgoingMessage(e))