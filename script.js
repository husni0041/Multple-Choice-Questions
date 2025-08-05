// Step 1: Define quiz data
const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Transferable Markeup language",
      "Hypertext Machine Language",
      "HyperLink and text Markup Language",
    ],
    correct: 0,
  },
  {
    question: "Which CSS property is used to control spacing between elements?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    correct: 1,
  },
  {
    question: "What is the JavaScript function to select an element by ID?",
    options: ["document.query", "getElementById", "selectElement", "document.TagName"],
    correct: 1,
  },
  {
    question: "Which tag is used for an ordered list in HTML?",
    options: ["<ul>", "<ol>", "<li>", "<h1>"],
    correct: 1,
  },
  {
    question: "In React.js, which hook is used to perform side effects?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correct: 0,
  },
];

// Step 2: Select DOM elements
const questionElm = document.getElementById("question");
const option1 = document.getElementById("option_1");
const option2 = document.getElementById("option_2");
const option3 = document.getElementById("option_3");
const option4 = document.getElementById("option_4");
const answerElms = document.querySelectorAll(".answer");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

// Step 3: Load the current question
function loadQuiz() {
  deselectAnswers();
  const currentData = quizData[currentQuiz];
  questionElm.innerText = currentData.question;
  option1.innerText = currentData.options[0];
  option2.innerText = currentData.options[1];
  option3.innerText = currentData.options[2];
  option4.innerText = currentData.options[3];
}

// Step 4: Get selected answer index
function getSelected() {
  let answerIndex = undefined;
  answerElms.forEach((input, index) => {
    if (input.checked) {
      answerIndex = index;
    }
  });
  return answerIndex;
}

// Step 5: Deselect all answers
function deselectAnswers() {
  answerElms.forEach((input) => (input.checked = false));
}

// Step 6: Handle submit
submitBtn.addEventListener("click", () => {
  const selected = getSelected();
  if (selected === undefined) {
    alert("Please select an answer.");
    return;
  }

  if (selected === quizData[currentQuiz].correct) {
    score++;
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    document.querySelector(".quiz-container").innerHTML = `
      <h2>Your Score: ${score} / ${quizData.length}</h2>
      <button onclick="location.reload()">Play Again</button>
    `;
  }
});

// Initial load
loadQuiz();
