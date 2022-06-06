const quizData=[

  {  question:'Who won the Orange cap in IPL 2022 ?',
     a :'Jos Butler',
     b:'MS Dhoni',
     c:'Virat Kohli',
     d:'David Warner',
     correct:'a'
    
},{
    question :'What is the most used programminhg language in 2022?',
    a:'jawaScript',
    b: 'C',
    c: 'C++',
    d:'python',
    correct:'a'


},{  question :'Who won the champions league in 2022?',
    a:'PSG',
    b: 'Manchester United',
    c: 'Liverpool',
    d:'Real Madrid',
    correct:'d'

},{
    question :'Who won the IPL in 2022?',
    a:'CSK',
    b: 'GT',
    c: 'RCB',
    d:'LSG',
    correct:'b'
},{
    question :'Who won the EPL in 2022?',
    a:'PSG',
    b: 'Manchester United',
    c: 'Liverpool',
    d:'Real Madrid',
    correct:'c'

},{
    question :'Who won the finallisma in 2022?',
    a:'Brazil',
    b: 'Argentina',
    c: 'Italy',
    d:'USA',
    correct:'b'

},

];
const questionE1 = document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData= quizData[currentQuiz];

    questionE1.innerHTML = currentQuizData.question;

    
    a_text.innerText =currentQuizData.a;
    b_text.innerText =currentQuizData.b;
    c_text.innerText =currentQuizData.c;
    d_text.innerText =currentQuizData.d;
}

function getSelected(){
    const answersEls = document.querySelectorAll(".answer");
    let answer = undefined;
    
    answersEls.forEach((answersEl)=>{
        if(answersEl.checked){
            return answersEl.id;
        }
    });
    
    
    return answer;
    
    }

submitBtn.addEventListner("click",()=>{

    const answer= getSelected();
    console.log(answer);

    if(answer){

        if(answer===quizData[currentQuiz])

        currentQuiz++;
        
         if(currentQuiz < quizData.length){
         loadQuiz();
    }else{
        alert("You are finished");
    }

    }

});

