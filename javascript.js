document.addEventListener('DOMContentLoaded', function() {
document.getElementById('ButtonHitbox').addEventListener('click', function() {
    // Get the text from the textarea
    const message = document.querySelector('.Textbox').value.trim();
    
    if (!message) {
        // alert('Please enter a message before sending.');
        return;
    }
    
    // Define the payload
    const payload = {
        "content": "**Contact Message Report:**",
        "embeds": [
            {
                "title": "Report:",
                "description": message,
                "color": 37375
            }
        ],
        "attachments": []
    };
    
    // Send the HTTP request to the webhook URL
    fetch("https://discord.com/api/webhooks/1335924050123292685/PiNWumXyCrbf26ccbVhmtTilNuz65_dDwuYeLQAvk-0ekUHAiEWcqMDsmm0ZneqO-NBv", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            // alert('Message sent successfully!');
        } else {
            // alert('Failed to send message. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error sending message:', error);
        alert('An error occurred while sending the message.');
    });
}); });
