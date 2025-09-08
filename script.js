const API_KEY = 'YOUR_API_KEY_HERE'; // PASTE YOUR GEMINI API KEY HERE
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatMessages = document.getElementById('chat-messages');

chatForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const message = userInput.value.trim();
    if (message === '') return;

    appendMessage(message, 'user');
    userInput.value = '';

    const botResponse = await getBotResponse(message);
    appendMessage(botResponse, 'bot');
});

function appendMessage(message, sender, messageId = null) {
    const messageWrapper = document.createElement('div');
    const messageElement = document.createElement('div');
    const messagePara = document.createElement('p');

    if (messageId) {
        messageWrapper.setAttribute('data-message-id', messageId);
    }
    
    messagePara.textContent = message;
    messageElement.appendChild(messagePara);
    
    if (sender === 'user') {
        messageWrapper.classList.add('flex', 'justify-end');
        messageElement.classList.add('bg-blue-500', 'text-white', 'p-3', 'rounded-lg', 'max-w-xs');
    } else {
        messageWrapper.classList.add('flex', 'justify-start');
        messageElement.classList.add('bg-gray-200', 'text-gray-800', 'p-3', 'rounded-lg', 'max-w-xs');
    }
    
    messageWrapper.appendChild(messageElement);
    chatMessages.appendChild(messageWrapper);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function getBotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('programs') && lowerCaseMessage.includes('offer')) {
        return "Iron Lady offers several leadership programs, including 'Emerging Leaders', 'Executive Presence', and 'Tech Visionaries'.";
    } 
    else if (lowerCaseMessage.includes('duration') || lowerCaseMessage.includes('long')) {
        return "Most programs run for 6-8 weeks, with one session per week.";
    } else if (lowerCaseMessage.includes('online') || lowerCaseMessage.includes('offline')) {
        return "All our programs are conducted online, offering flexibility for professionals everywhere.";
    } else if (lowerCaseMessage.includes('certificates') || lowerCaseMessage.includes('certificate')) {
        return "Yes, upon successful completion of any program, you will receive a verifiable digital certificate.";
    } else if (lowerCaseMessage.includes('mentors') || lowerCaseMessage.includes('coaches')) {
        return "Our mentors are seasoned industry leaders and certified executive coaches from top global companies.";
    }
    
    return await callGeminiAPI(message);
}

async function callGeminiAPI(message) {
    const thinkingMessageId = 'thinking-' + Date.now();
    appendMessage('Thinking...', 'bot', thinkingMessageId);

    const prompt = `You are a helpful and friendly assistant for "Iron Lady", an EdTech company focused on leadership programs. Answer the following question concisely and professionally: "${message}"`;

    const payload = {
        contents: [{
            parts: [{ text: prompt }]
        }]
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorBody = await response.json();
            console.error("API Error Response:", errorBody);
            throw new Error(`API returned an error: ${response.statusText}`);
        }

        const data = await response.json();
        
        document.querySelector(`[data-message-id="${thinkingMessageId}"]`)?.remove();
        
        const text = data.candidates[0].content.parts[0].text;
        return text.trim();

    } catch (error) {
        console.error("Gemini API Call Error:", error);
        document.querySelector(`[data-message-id="${thinkingMessageId}"]`)?.remove();
        return "I'm having a little trouble thinking right now. Please check the console for errors or try again.";
    }
}

window.addEventListener('load', () => {
    appendMessage("Hello! How can I help you with Iron Lady's leadership programs today?", 'bot');
});
