const today = new Date().getDate();

const title = document.getElementById("dayTitle");
const message = document.getElementById("dayMessage");
const button = document.getElementById("nextBtn");
const body = document.body;
const dino = document.querySelector(".dino");

const days = {
  7: {
    title: "Happy Birthday 🎂❤️",
    message: "Today is special… because YOU were born 🥺💖",
    bg: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    dino: "🦖🎉"
  },
  8: {
    title: "Rose Day 🌹",
    message: "If I could, I’d give you all the roses in the world 🌹",
    bg: "linear-gradient(135deg, #f857a6, #ff5858)",
    dino: "🦖🌹"
  },
  9: {
    title: "Chocolate Day 🍫",
    message: "Life is sweeter with you. Always 🍫🤎",
    bg: "linear-gradient(135deg, #8e2de2, #4a00e0)",
    dino: "🦖🍫"
  },
  13: {
    title: "One Question… 👉👈",
    message: "Will you be my Valentine? ❤️",
    bg: "linear-gradient(135deg, #ff758c, #ff7eb3)",
    dino: "🦖😳"
  },
  14: {
    title: "Happy Valentine’s Day 💘",
    message: "You’re my favorite person. Always. ❤️",
    bg: "linear-gradient(135deg, #ff512f, #dd2476)",
    dino: "🦖💖"
  }
};

// Apply day settings
if (days[today]) {
  title.innerText = days[today].title;
  message.innerText = days[today].message;
  body.style.background = days[today].bg;
  dino.innerText = days[today].dino;
}

button.addEventListener("click", () => {
  alert("I’ll be right here tomorrow 🦖❤️");
});


button:hover {
  transform: scale(1.08);
}

