// Background script to handle voice recognition and command execution
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.continuous = true;
recognition.interimResults = false;

recognition.onresult = (event) => {
  const command = event.results[event.resultIndex][0].transcript.trim();
  console.log("Voice command received:", command);
  executeCommand(command);
};

recognition.onerror = (event) => {
  console.error("Recognition error:", event.error);
};

function executeCommand(command) {
  // Logic to execute commands based on the received voice input
  // Example commands can be added here
  switch (command.toLowerCase()) {
    case 'open google':
      chrome.tabs.create({ url: "https://www.google.com" });
      break;
    case 'take a note':
      // Implement note-taking functionality
      break;
    default:
      console.log("Unknown command:", command);
  }
}

// Start recognition on extension activation
chrome.action.onClicked.addListener(() => {
  recognition.start();
});
