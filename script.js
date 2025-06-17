async function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
  
    const userMessage = input.value.trim();
    if (!userMessage) return;
  
    // Display user message
    chatBox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
  
    // Simple AI response logic (replace this with real API later)
    const aiResponse = await getAIResponse(userMessage);
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${aiResponse}</p>`;
  
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  function getAIResponse(message) {
    message = message.toLowerCase();
    if (message.includes("hello")) return "Hi there!";
    if (message.includes("your name")) return "I'm a simple AI bot.";
    if( message.includes("how are you")) return "I'm just a program, but thanks for asking!";
    if (message.includes("help")) return "Sure, I can help you with basic questions.";
    if (message.includes("weather")) return "Sorry, I don't have access to real-time data.";
    return "I don't understand that yet.";
  }
  
