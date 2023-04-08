const quiz = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Paris", "Rome", "Madrid"],
    answer: "Paris"
  },
  {
    question: "What is 2 + 2?",
    choices: ["2", "3", "4", "5"],
    answer: "4"
  },
  {
    question: "What is the boiling point of water in degrees Celsius?",
    choices: ["0", "50", "100", "150"],
    answer: "100"
  },
  {
    question: "What is the square root of 64?",
    choices: ["4", "6", "8", "10"],
    answer: "8"
  },
  {
    question: "What is the largest continent?",
    choices: ["Africa", "Asia", "North America", "South America"],
    answer: "Asia"
  }
  ];
  
  

  const questionEl = document.getElementById("question");
  const choicesEl = document.getElementById("choices");
  const submitBtn = document.getElementById("submit");
  const resultEl = document.getElementById("result");
  const select = document.getElementById("select");
  
  let currentQuestion = 0;
  let score = 0;
  let myChoice;
  
  function showQuestion() {
    const q = quiz[currentQuestion];
    questionEl.innerHTML = q.question;
    choicesEl.innerHTML = "";
    for (let i = 0; i < q.choices.length; i++) {
      const choice = q.choices[i];
      const btn = document.createElement("button");
      btn.innerHTML = choice;
      
      btn.addEventListener("click", function() {
        //checkAnswer(choice);
        
        myChoice=choice;
        select.innerHTML = "";
      });
      choicesEl.appendChild(btn);
    }
  }

  submitBtn.addEventListener("click", function(){
   if(myChoice==="" || myChoice == undefined){
    select.innerHTML = "please select an answer";
   }
   else{
    checkAnswer(myChoice);
    myChoice="";
    select.innerHTML = "";
   }
    
  });

    
  
  function checkAnswer(answer) {
    const q = quiz[currentQuestion];
    if (q.answer === answer) {
      score++;
    }
    currentQuestion++; 
    if (currentQuestion < quiz.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    resultEl.innerHTML = `Your score is ${score} out of ${quiz.length}.`;
    submitBtn.disabled = true;
  }
  
  showQuestion();
  