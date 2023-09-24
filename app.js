var questions = [
    {
        "question": "Inside which HTML element do we put the JavaScript?",
        "answers": [
            "<script>",
            "<scripting>",
            "<js>",
            "<javascript>"
        ],
        "correctAnswer": "<script>"
    },
    {
        "question": "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
        "answers": [
            'document.getElementById("demo").innerHTML = "Hello World!";',
            'document.getElement("p").innerHTML = "Hello World!";',
            'document.getElementByName("p").innerHTML = "Hello World!";',
            '#demo.innerHTML = "Hello World!";'
        ],
        "correctAnswer": 'document.getElementById("demo").innerHTML = "Hello World!";'
    },
    {
        "question": "Where is the correct place to insert a JavaScript?",
        "answers": [
            "Both the <head> section and the <body> section are correct",
            "The <head> section",
            "The <body> section"
        ],
        "correctAnswer": "Both the <head> section and the <body> section are correct"
    },
    {
        "question": 'What is the correct syntax for referring to an external script called "xxx.js"?',
        "answers": [
            '<script src="xxx.js">',
            '<script href="xxx.js">',
            '<script name="xxx.js">'
        ],
        "correctAnswer": '<script src="xxx.js">'
    },
    {
        "question": 'The external JavaScript file must contain the <script> tag.',
        "answers": [
            'True',
            'False',
        ],
        "correctAnswer": 'False'
    },
    {
        "question": 'How do you write "Hello World" in an alert box?',
        "answers": [
            'alert("Hello World");',
            'msg("Hello World");',
            'alertBox("Hello World");',
            'msgBox("Hello World");'
        ],
        "correctAnswer": 'alert("Hello World");'
    },
    {
        "question": 'How do you create a function in JavaScript?',
        "answers": [
            'function myFunction()',
            'function = myFunction()',
            'function:myFunction()'
        ],
        "correctAnswer": 'function myFunction()'
    },
    {
        "question": 'How do you call a function named "myFunction"?',
        "answers": [
            'myFunction()',
            'call myFunction()',
            'call function myFunction()'
        ],
        "correctAnswer": 'myFunction()'
    },
    {
        "question": 'How to write an IF statement in JavaScript?',
        "answers": [
            'if i == 5 then',
            'if i = 5',
            'if (i == 5)',
            'if i = 5 then'
        ],
        "correctAnswer": 'if (i == 5)'
    },
    {
        "question": 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        "answers": [
            'if i =! 5 then',
            'if (i <> 5)',
            'if (i != 5)',
            'if i <> 5'
        ],
        "correctAnswer": 'if (i != 5)'
    },
    {
        "question": 'How does a WHILE loop start?',
        "answers": [
            'while i = 1 to 10',
            'while (i <= 10; i++)',
            'while (i <= 10)',
        ],
        "correctAnswer": 'while (i <= 10)'
    },
    {
        "question": 'How does a FOR loop start?',
        "answers": [
            'for (i = 0; i <= 5)',
            'for (i = 0; i <= 5; i++)',
            'for (i <= 5; i++)',
            'for i = 1 to 5'
        ],
        "correctAnswer": 'for (i = 0; i <= 5; i++)'
    },
    {
        "question": 'How can you add a comment in a JavaScript?',
        "answers": [
            "'This is a comment",
            '<!--This is a comment-->',
            '//This is a comment'
        ],
        "correctAnswer": '//This is a comment'
    },
    {
        "question": 'How to insert a comment that has more than one line?',
        "answers": [
            '<!--This comment has more than one line-->',
            '/*This comment has more than one line*/',
            '//This comment has more than one line//'
        ],
        "correctAnswer": '/*This comment has more than one line*/'
    },
    {
        "question": 'What is the correct way to write a JavaScript array?',
        "answers": [
            'var colors = (1:"red", 2:"green", 3:"blue")',
            'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
            'var colors = "red", "green", "blue"',
            'var colors = ["red", "green", "blue"]'
        ],
        "correctAnswer": 'var colors = ["red", "green", "blue"]'
    },
    {
        "question": 'How do you round the number 7.25, to the nearest integer?',
        "answers": [
            'round(7.25)',
            'Math.round(7.25)',
            'rnd(7.25)',
            'Math.rnd(7.25)'
        ],
        "correctAnswer": 'Math.round(7.25)'
    },
    {
        "question": 'How do you find the number with the highest value of x and y?',
        "answers": [
            'Math.ceil(x, y)',
            'Math.max(x, y)',
            'ceil(x, y)',
            'top(x, y)'
        ],
        "correctAnswer": 'Math.max(x, y)'
    },
    {
        "question": 'What is the correct JavaScript syntax for opening a new window called "w2" ?',
        "answers": [
            'w2 = window.new("http://www.w3schools.com");',
            'w2 = window.open("http://www.w3schools.com");'
        ],
        "correctAnswer": 'w2 = window.open("http://www.w3schools.com");'
    },
    {
        "question": 'JavaScript is the same as Java.',
        "answers": [
            'False',
            'True'
        ],
        "correctAnswer": 'False'
    },
    {
        "question": "How can you detect the client's browser name?",
        "answers": [
            'client.navName',
            'navigator.appName',
            'browser.name'
        ],
        "correctAnswer": 'navigator.appName'
    },
    {
        "question": 'Which event occurs when the user clicks on an HTML element?',
        "answers": [
            'onmouseclick',
            'onchange',
            'onmouseover',
            'onclick'
        ],
        "correctAnswer": 'onclick'
    },
    {
        "question": 'How do you declare a JavaScript variable?',
        "answers": [
            'v carName;',
            'variable carName;',
            'var carName;'
        ],
        "correctAnswer": 'var carName;'
    },
    {
        "question": 'Which operator is used to assign a value to a variable?',
        "answers": [
            '-',
            'x',
            '*',
            '='
        ],
        "correctAnswer": '='
    },
    {
        "question": 'What will the following code return: Boolean(10 > 9)',
        "answers": [
            'false',
            'true',
            'NaN'
        ],
        "correctAnswer": 'true'
    },
    {
        "question": 'Is JavaScript case-sensitive?',
        "answers": [
            'Yes',
            'No',
            '!= No'
        ],
        "correctAnswer": 'Yes'
    }
];



var contentDiv = document.querySelector(".content");
var optionsDiv = document.querySelector(".optionsDiv");
var index = 0;
var marks = 0;
var percentage = 0;
var currentQuestion = questions[index];
var question = document.querySelector("#question");
var nextBtn = document.getElementById("nextBtn");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var radio0 = document.querySelector(".radio0");
var radio1 = document.querySelector(".radio1");
var radio2 = document.querySelector(".radio2");
var radio3 = document.querySelector(".radio3");
var optDiv0 = document.querySelector(".optDiv0");
var optDiv1 = document.querySelector(".optDiv1");
var optDiv2 = document.querySelector(".optDiv2");
var optDiv3 = document.querySelector(".optDiv3");


var timer = document.getElementById("timer");
var interval

function startTimer() {
    var min = questions.length;
    var sec = 59;

    timer.innerHTML = "";
    interval = setInterval(() => {
        timer.innerHTML = `${min} : ${sec}`;
        sec--;
        if (sec < 0) {
            min--;
            sec = 59;
            if (min < 0) {
                sec = 59;
                showResult()
            }
        }
    }, 1000);
}

startTimer();

function nextQuestion() {

    var getOptions = document.getElementsByName("option");

    for (var i = 0; i < getOptions.length; i++) {
        if (getOptions[i].checked) {
            var selectedValue = getOptions[i].value;
            var slectedOption = questions[index - 1]["answers"][selectedValue];
            var correctAnswer = questions[index - 1]["correctAnswer"]
            checkAnswer(slectedOption, correctAnswer);
        }
        getOptions[i].checked = false;
    }

    nextBtn.disabled = true;

    if (index == questions.length - 1) {
        nextBtn.innerHTML = "Submit";
    }

    if (index >= questions.length) {
        showResult()

    } else {
        optDiv0.style.border = "none"
        optDiv1.style.border = "none"
        optDiv2.style.border = "none"
        optDiv3.style.border = "none"
        optDiv2.style.display = "block";
        optDiv3.style.display = "block";

        var currentQuestion = questions[index];

        question.innerText = `Q ${index + 1}) ${currentQuestion["question"]}`;
        opt1.innerText = currentQuestion["answers"][0];
        opt2.innerText = currentQuestion["answers"][1];
        if (currentQuestion["answers"][2] === undefined) {
            optDiv2.style.display = "none";
        } else {
            opt3.innerText = currentQuestion["answers"][2];
        }
        if (currentQuestion["answers"][3] === undefined) {
            optDiv3.style.display = "none";
        } else {
            opt4.innerText = currentQuestion["answers"][3];
        }

        index++
    }
}


nextQuestion();


function clicked() {
    nextBtn.disabled = false;
};

function checkAnswer(slectedOption, correctAnswer) {
    if (slectedOption == correctAnswer) {
        marks++
        percentage = Math.ceil((marks / questions.length) * 100);
    }
}

function showResult() {
    clearInterval(interval);
    timer.innerHTML = "";
    contentDiv.innerHTML = "";
    var resultDiv = document.querySelector(".resultDiv");
    resultDiv.style.display = "flex";
    document.querySelector("#totalQues").innerHTML = questions.length;
    document.querySelector("#correctAns").innerHTML = marks;

    if (percentage >= 70) {
        resultDiv.style.color = "green"
        document.querySelector("#feedback").innerHTML = `Congratulations, `;
        document.querySelector("#feedback2").innerHTML = "you passed";
        document.querySelector("#percen").innerHTML = `${percentage}%`;
    } else {
        resultDiv.style.color = "red";
        document.querySelector("#feedback").innerHTML = `Sorry, `;
        document.querySelector("#feedback2").innerHTML = "you failed";
        document.querySelector("#percen").innerHTML = `${percentage}%`;
    }
};


function clickedDiv(divNo) {
    if (divNo == 0) {
        radio0.checked = true;
        optDiv0.style.border = "2px solid black";
        optDiv1.style.border = "none";
        optDiv2.style.border = "none";
        optDiv3.style.border = "none";
    } else if (divNo == 1) {
        radio1.checked = true;
        optDiv1.style.border = "2px solid black";
        optDiv0.style.border = "none";
        optDiv2.style.border = "none";
        optDiv3.style.border = "none";
    } else if (divNo == 2) {
        radio2.checked = true;
        optDiv2.style.border = "2px solid black";
        optDiv0.style.border = "none";
        optDiv1.style.border = "none";
        optDiv3.style.border = "none";
    } else if (divNo == 3) {
        radio3.checked = true;
        optDiv3.style.border = "2px solid black";
        optDiv0.style.border = "none";
        optDiv1.style.border = "none";
        optDiv2.style.border = "none";
    }

    nextBtn.disabled = false;
    // nextBtn.addEventListener("click", nextQuestion);
}