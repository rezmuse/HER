const messages = {
  7: "Happy Birthday Saee 🎂💖 You make my world softer.",
  8: "Rose Day 🌹 Just like you — beautiful.",
  9: "Chocolate Day 🍫 Sweet days remind me of you.",
  10: "Promise Day 🤞 I’ll always try my best for us.",
  11: "Hug Day 🤍 Sending you the warmest hug.",
  12: "Kiss Day 😘 One for you.",
  13: "Will you be my Valentine? 💌",
  14: "Happy Valentine’s Day ❤️ I choose you."
};

const today = new Date().getDate();
const text = messages[today] || "Come back tomorrow 💫";

document.getElementById("dayMessage").innerText = text;

function comeBack() {
  alert("I’ll be right here waiting 🦖💗");
}
