* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ffafbd, #ffc3a0);
  transition: background 0.8s ease;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  width: 90%;
  max-width: 420px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.dino {
  font-size: 60px;
  margin-bottom: 10px;
  animation: bounce 1.5s infinite;
}

@keyframes bounce {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

h1 {
  margin-bottom: 15px;
}

p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 25px;
}

button {
  padding: 12px 22px;
  border: none;
  border-radius: 12px;
  background: #ff5e78;
  color: white;
  font-size: 15px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

button:hover {
  transform: scale(1.08);
}

