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
  

// async function getAIResponse(message) {
//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": "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" // Replace with your actual API key
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: message }]
//       })
//     });
  
//     const data = await response.json();
//     return data.choices[0].message.content;
//   }
  