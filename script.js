const lg = document.getElementById("lg");
const ta = document.getElementById("ta");
const pb2 = document.getElementById("pb2");
const pb3 = document.getElementById("pb3");
const pb4 = document.getElementById("pb4");
const pb5 = document.getElementById("pb5");
const pb6 = document.getElementById("pb6");
const pb7 = document.getElementById("pb7");
const pb8 = document.getElementById("pb8");
const pb9 = document.getElementById("pb9");
const pb10 = document.getElementById("pb10");
const nb1 = document.getElementById("nb1");
const nb2 = document.getElementById("nb2");
const nb3 = document.getElementById("nb3");
const nb4 = document.getElementById("nb4");
const nb5 = document.getElementById("nb5");
const nb6 = document.getElementById("nb6");
const nb7 = document.getElementById("nb7");
const nb8 = document.getElementById("nb8");
const nb9 = document.getElementById("nb9");
const nb10 = document.getElementById("nb10");
const hb = document.getElementById("hb");
let firstpage = document.getElementById("first-page");
let intropage = document.getElementById("intro-page");
let quespage = document.getElementById("ques-page");
let byepage = document.getElementById("bye-page");
let hi = document.getElementById("hi");
let ques1 = document.getElementById("ques1");
let ques2 = document.getElementById("ques2");
let ques3 = document.getElementById("ques3");
let ques4 = document.getElementById("ques4");
let ques5 = document.getElementById("ques5");
let ques6 = document.getElementById("ques6");
let ques7 = document.getElementById("ques7");
let ques8 = document.getElementById("ques8");
let ques9 = document.getElementById("ques9");
let ques10 = document.getElementById("ques10");
let input = document.querySelector('input');

lg.addEventListener("click", letGetStarted);
ta.addEventListener("click", takeAsessment);
nb1.addEventListener("click", next1);
nb2.addEventListener("click", next2);
nb3.addEventListener("click", next3);
nb4.addEventListener("click", next4);
nb5.addEventListener("click", next5);
nb6.addEventListener("click", next6);
nb7.addEventListener("click", next7);
nb8.addEventListener("click", next8);
nb9.addEventListener("click", next9);
nb10.addEventListener("click", next10);

pb2.addEventListener("click", previous2);
pb3.addEventListener("click", previous3);
pb4.addEventListener("click", previous4);
pb5.addEventListener("click", previous5);
pb6.addEventListener("click", previous6);
pb7.addEventListener("click", previous7);
pb8.addEventListener("click", previous8);
pb9.addEventListener("click", previous9);
pb10.addEventListener("click", previous10);

hb.addEventListener("click", goHome);


function letGetStarted(){
    if(input.value.length == 0){
        input.style.border = "1px solid red"
    }else{
        input.style.border = "1px solid #28a745"
        firstpage.style.display = "none";
        intropage.style.display = "flex";
        hi.innerHTML = "<h1>"+"Hi,"+input.value+"</h1>";
    }
}
function takeAsessment(){
    intropage.style.display = "none";
    quespage.style.display = "flex";
}
function next1(){
    ques1.style.display = "none";
    ques2.style.display = "flex";
}
function next2(){
    ques2.style.display = "none";
    ques3.style.display = "flex";
}
function next3(){
    ques3.style.display = "none";
    ques4.style.display = "flex";
}
function next4(){
    ques4.style.display = "none";
    ques5.style.display = "flex";
}
function next5(){
    ques5.style.display = "none";
    ques6.style.display = "flex";
}
function next6(){
    ques6.style.display = "none";
    ques7.style.display = "flex";
}
function next7(){
    ques7.style.display = "none";
    ques8.style.display = "flex";
}
function next8(){
    ques8.style.display = "none";
    ques9.style.display = "flex";
}
function next9(){
    ques9.style.display = "none";
    ques10.style.display = "flex";
}
function next10(){
    ques10.style.display = "none";
    byepage.style.display = "flex";
   
}

function previous2(){
    ques2.style.display = "none";
    ques1.style.display = "flex";
}
function previous3(){
    ques3.style.display = "none";
    ques2.style.display = "flex";
}
function previous4(){
    ques4.style.display = "none";
    ques3.style.display = "flex";
}
function previous5(){
    ques5.style.display = "none";
    ques4.style.display = "flex";
}
function previous6(){
    ques6.style.display = "none";
    ques5.style.display = "flex";
}
function previous7(){
    ques7.style.display = "none";
    ques6.style.display = "flex";
}
function previous8(){
    ques8.style.display = "none";
    ques7.style.display = "flex";
}
function previous9(){
    ques9.style.display = "none";
    ques8.style.display = "flex";
}
function previous10(){
    ques10.style.display = "none";
    ques9.style.display = "flex";
   
}
function goHome(){
    byepage.style.display = "none";
    firstpage.style.display = "flex";
}