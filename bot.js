document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const botToken = "7995133876:AAGdNt9kr6B9AJSPNRUhqxXOe4TPBmGVVF0";
  const chatId = "7163129971";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const Subject = document.getElementById("Subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const text = `
📬 *New Message from Portfolio Contact Form*:

👤 *Name:* ${name}
📧 *Email:* ${email}
🏢 *Subject:* ${Subject}
📝 *Message:* ${message}
`;

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: "Markdown"
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.ok) {
      alert("✅ Message sent successfully!");
      document.getElementById("contactForm").reset();
    } else {
      alert("❌ Message failed to send.");
      console.error("Telegram error:", data);
    }
  })
  .catch(err => {
    alert("❌ Network error.");
    console.error("Fetch error:", err);
  });
});