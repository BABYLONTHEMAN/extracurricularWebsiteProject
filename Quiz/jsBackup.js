const quiz = [ // object
    //quizzies
    {
        //prsyary 1
        question: "What is the capital of France?",
        choices: ["London", "Paris", "Rome", "Madrid"],
        answer: "Paris",
    },
    {
        //prsyary 2
        question: "What is 2 + 2?",
        choices: ["2", "3", "4", "5"],
        answer: "4",
    },
    {
        //prsyary 3
        question: "What is the boiling point of water in degrees Celsius?",
        choices: ["0", "50", "100", "150"],
        answer: "100",
    },
    {
        //prsyary 4
        question: "What is the square root of 64?",
        choices: ["4", "6", "8", "10"],
        answer: "8",
    },
    {
        //prsyary 5
        question: "What is the largest continent?",
        choices: ["Africa", "Asia", "North America", "South America"],
        answer: "Asia",
    },
    //quizzies
    { //prsyary 1                  
        question: "What is the capital of France?",
        choices: ["London", "Paris", "Rome", "Madrid"],
        answer: "Paris"
    },
    { //prsyary 2
        question: "What is 2 + 2?",
        choices: ["2", "3", "4", "5"],
        answer: "4",
        wallam: true
    },
    { //prsyary 3
        question: "What is the boiling point of water in degrees Celsius?",
        choices: ["0", "50", "100", "150"],
        answer: "100",
        wallam: false
    },
    { //prsyary 4
        question: "What is the square root of 64?",
        choices: ["4", "6", "8", "10"],
        answer: "8",
        wallam: false
    },
    { //prsyary 5
        question: "What is the largest continent?",
        choices: ["Africa", "Asia", "North America", "South America"],
        answer: "Asia",
        wallam: false
    },
    {
        question: " agar dw satlt pebe yakekyan 20 masy awi tr 36 orange, chan satl badastawa mawa?",
        choices: ["35", "0", "8", "2"],
        answer: "2",
    },
    {
        question: "Which of the following is the smallest particle of matter? ",
        choices: ["Atom", "Molecule", "Electron", "Neutron"],
        answer: "Electron",
    },
    {
        question: " What is the largest planet in our solar system?",
        choices: ["Saturn", "Uranus", "Neptune", "Jupiter"],
        answer: "Jupiter",
    },
    {
        question: " Who is known as the father of modern physics?",
        choices: ["Galileo Galilei", "Isaac Newton", "Johannes Kepler", "Aristotle"],
        answer: "Isaac Newton",
    },
    {
        question: " What is the smallest unit of matter?",
        choices: ["Atom", "Cell", "Molecule", "Nucleus"],
        answer: "Atom",
    },
    {
        question: "What is the scientific name for the human brain?",
        choices: ["Cerebellum", "Encephalon", "Medulla oblongata", "Cranium"],
        answer: "Encephalon",
    },
    {
        question: "ke gorany ayraqibi nwsiwa ?",
        choices: ["peramerd", "Dldary sha3ir ", "hardi salami", "HellyLuv"],
        answer: "",
    },
    {
        question: "What is the study of ancient artifacts called? ",
        choices: ["Anthropology", "Paleontology", "Archaeology", "History"],
        answer: "Archaeology",
    },
    {
        question: "Who wrote the book 'The Prince'? ",
        choices: ["niccoló machiavelli", "Saddam Hussain", "Zucerberg", " Bill Gates"],
        answer: "niccoló machiavelli",
    },
    {
        question: "What is the process by which plants convert light into energy called?",
        choices: ["Digestion", "Photosynthesis", "Fermentation", "Breathing"],
        answer: "Photosynthesis",
    },
    {
        question: " What is the theory of evolution?",
        choices: ["The theory that species of organisms are unchanging over time",
            "The theory that life arose through spontaneous generation",
            "The theory that species of organisms change over time through the process of natural selection",
            "The theory that life is guided by a divine creator"
        ],
        answer: "The theory that species of organisms change over time through the process of natural selection",
    },
    {
        question: " Who is known for proposing the heliocentric model of the solar system? (Swranaway zawy badawry xor ke wty?)",
        choices: ["Galilei", "Kepler", "Tycho Brahe", "Copernicus"],
        answer: "Copernicus",
    },
    {
        question: "What is the study of matter and energy in motion called? ",
        choices: ["Physics", "Geology", "Biology", "Chemistry"],
        answer: "Physics",
    },
    {
        question: " What is the name of the largest reef system in the world?",
        choices: ["The Great Wall Reef", "The Great Barrier Reef", "The Coral Barrier Reef", "The Oceanic Reef"],
        answer: "The Great Barrier Reef",
    },
    {
        question: " Who is known for proposing the theory of relativity?",
        choices: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Niels Bohr"],
        answer: "Albert Einstein",
    },
    {
        question: " What is the study of the origin and development of the universe called?",
        choices: ["Cosmology", "Astrophysics", "Astronomy", "Astrology"],
        answer: "Cosmology",
    },
    {
        question: "What is the name of the ancient city in Italy that was destroyed by a volcanic eruption in 79 AD?",
        choices: ["Athens", "london", "Baghdad", "Pompeii"],
        answer: "Pompeii",
    },
    {
        question: " Who is known for proposing the principle of natural selection?",
        choices: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "James Watson"],
        answer: "Charles Darwin",
    },
    {
        question: "What is the name of the smallest particle in an element that retains its chemical properties?",
        choices: ["Proton", "Neutron", "Electron", "Atom"],
        answer: "Atom",
    },
    {
        question: "What is the study of human societies and cultures called? ",
        choices: ["Sociology", "Psychology", "Political science", "Anthropology"],
        answer: "Anthropology",
    },
    {
        question: " Who is known for proposing the theory of general relativity?",
        choices: ["Isaac Newton", "Hawkinga shalal damagh", "Albert Einstein", "Niels Bohr"],
        answer: "Albert Einstein",
    },
];
//am bashy constant'ana aw div'anan ka la html ka daman nawa
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const submitBtn = document.getElementById("submit");
const resultEl = document.getElementById("result");
const select = document.getElementById("select");
const commentEl = document.getElementById("comment");
const fstEl = document.getElementById("fst");
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
var rand = getRandomInt(0, 15);
let currentQuestion = 1 * rand; //am let'a bakar yat bo call'krdnaway prsyary 1 bo 5
let score = 0; //xaly prsyarakanta bo har walameky prsyarakan ka walamt dawatawa
let myChoice; //am let'a aw walamaya ka to halyabzhery
function showQuestion() {
    const q = quiz[currentQuestion];
    questionEl.innerHTML = q.question;
    choicesEl.innerHTML = "";
    for (let i = 0; i < q.choices.length; i++) {
        const choice = q.choices[i];
        const btn = document.createElement("button");
        btn.innerHTML = choice;
        btn.addEventListener("click", function() {
            if (myChoice) {
                myChoice.style.backgroundColor = "white";
            }
            myChoice = btn;
            myChoice.style.backgroundColor = "yellow";
            select.innerHTML = "";
        });
        choicesEl.appendChild(btn);
    }
}
submitBtn.addEventListener("click", function() {
    //zyat krdny event bo button'y submit         |
    if (!myChoice) {
        //agar bakar henar hich walamek dyary nakat   v
        select.innerHTML = "Please select an answer"; //ama pshan ayat                            <--
    } else {
        //else
        checkAnswer(myChoice.textContent);
        myChoice = "";
        select.innerHTML = "";
    }
});
function checkAnswer(answer) {
    //agar prsyarka rast bet yan ghalat bet
    const q = quiz[currentQuestion]; //q = quiz[currentQuestion] wata q = (prsyary 1)            |
    if (q.answer === answer) {
        //aw walamay haly abzhery yakasany akat ba wwalama rastaka  v
        score++; //1 xal zya bka                                             <---
    }
    currentQuestion++;
    //bro bo prsyaryy duatr
    if (currentQuestion < quiz.length) {
        //agar prsyaraka < aw prsyaraya ka hatwa
        //pshandany prsyarkan
        showQuestion();
    } else {
        //else
        showResult(); //anjamakaman ayate
    }
}
function showResult() {
    //anjam
    //resultEl.innerHTML = `Your score is ${score*40} out of ${quiz.length*40}.`;
    //resultEl.innerHTML = `Your IQ is between ${(score*40)-10} to ${score*40}`;
    if (score * 20 > 0) {
        //agar iq'ka zyatr bu la 0 ama acitve abet
        resultEl.innerHTML = `Your IQ is between ${score * 20 - 10} to ${
      score * 20
    }`;
    } else {
        //agar iq'ka yaksan bu la 0 ama acitve abet
        resultEl.innerHTML = `Your IQ is ${score * 20}`;
    }
    if (score * 20 < 100) {
        //agar iq'ka kamtr bu la 100 ama acitve abet
        commentEl.innerHTML = "You need to buy a brain";
        fstEl.style.backgroundColor = "red";
    } else {
        //agar iq'ka zyatr bu la 100 ama acitve abet
        commentEl.innerHTML = "Einistein V2.0";
        fstEl.style.backgroundColor = "green";
    }
    submitBtn.disabled = true;
}
showQuestion();