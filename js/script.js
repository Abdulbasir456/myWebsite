function displayGreeting() {
    const fname = document.getElementById('nameInput').value;
    const surName = document.getElementById('surInput').value;
    const output = document.getElementById('outputMessage');
    const history = document.getElementById('greetingHistory');

    if (fname && surName) {
        const greeting = `Hello, ${fname} ${surName}! Welcome to my web page.`;
        output.textContent = greeting;

        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.textContent = greeting;
        history.appendChild(historyItem);
    } else {
        output.textContent = 'Please enter your name and last name.';
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

function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        const result = document.getElementById("form-result");
        result.textContent = "Form submitted successfully!";
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill all fields.");
    }
}

setInterval(updateCurrentTime, 1000);
