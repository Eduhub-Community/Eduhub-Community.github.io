const chatbotToggle = document.querySelector(".chatbot__button");
const sendChatBtn = document.querySelector(".chatbot__input-box span");
const chatInput = document.querySelector(".chatbot__textarea");
const chatBox = document.querySelector(".chatbot__box");
const chatbotCloseBtn = document.querySelector(".chatbot__header span");
const clearChatBtn = document.querySelector(".clear-chat");

let userMessage;
const inputInitHeight = chatInput.scrollHeight;
const API_KEY = "Enter API key here";

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chatbot__chat", className);
  chatLi.innerHTML = `<p>${message}</p>`;
  return chatLi;
};

const generateResponse = (incomingChatLi) => {
  // Remaining code for generating the chatbot response
};

const handleChat = () => {
  // Remaining code for handling user input and generating chat messages
};

const clearChat = () => {
  chatBox.innerHTML = ""; // Clear all chat messages in the chatbox
};

// Event listeners
chatInput.addEventListener("input", () => {
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

chatbotToggle.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot"),
);

chatbotCloseBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot"),
);

sendChatBtn.addEventListener("click", handleChat);

clearChatBtn.addEventListener("click", clearChat); // Event listener for the "Clear Chat" button
