function displayGreeting() {
    const name = document.getElementById('nameInput').value;
    const output = document.getElementById('outputMessage');
    const history = document.getElementById('greetingHistory');
  
    if (name) {
      const greeting = `Hello, ${name}! Welcome to my web page.`;
      output.textContent = greeting;
  
      const historyItem = document.createElement('div');
      historyItem.className = 'history-item';
      historyItem.textContent = greeting;
      history.appendChild(historyItem);
    } else {
      output.textContent = 'Please enter your name.';
    }
  }
  
  function changeBackgroundColor() {
    const colors = ['#ffeb3b', '#8bc34a', '#00bcd4', '#e91e63', '#3f51b5'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }
  
  function showDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleString();
    const output = document.getElementById('outputMessage');
    output.textContent = `Current date and time: ${formattedDate}`;
  }
  
  function updateCurrentTime() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    const currentTime = document.getElementById('currentTime');
    currentTime.textContent = `Current time: ${formattedTime}`;
  }
  
  function toggleTheme() {
    document.body.classList.toggle('dark-theme');
  }
  
  // Update the current time every second
  setInterval(updateCurrentTime, 1000);
  