const welcome = document.getElementById("welcome");
const music = document.getElementById("music");
const memory = document.getElementById("memory");
const letter = document.getElementById("letter");
const cake = document.getElementById("cake");


const photo = document.getElementById("photo");
const caption = document.getElementById("caption");



function show(section){

    document.querySelectorAll(".page")
    .forEach(page => {

        page.classList.add("hidden");

    });


    section.classList.remove("hidden");

}




// Opening button

function startSurprise(){

    show(music);


}





// Continue to memories

function startMemory(){

    show(memory);

    startSlideshow();

}





// Photos

const memories = [

    {
        img:"images/cafe.jpg",
        text:"A beautiful memory ☕✨"
    },

    {
        img:"images/holi.jpg",
        text:"A colorful memory 🌈"
    },

    {
        img:"images/group.jpg",
        text:"A special moment 💗"
    },

    {
        img:"images/college.jpg",
        text:"Memories worth keeping 🎓✨"
    }

];



let index = 0;



function startSlideshow(){


index = 0;

changePhoto();

let timer = setInterval(() => {



        index++;


if(index >= memories.length){

    clearInterval(timer);


show(letter);

setTimeout(() => {
    typeMessage();
}, 500);

    return;

}


        changePhoto();


    },5000);


}




function changePhoto(){


    photo.style.opacity = 0;


    setTimeout(()=>{


        photo.src = memories[index].img;

        caption.innerHTML =
        memories[index].text;


        photo.style.opacity = 1;


    },800);



}





// Celebration

function celebrate(){

    show(cake);


    document.body.style.background =
    "linear-gradient(135deg,#ff69b4,#ffd1e8)";

}
const message = `I don't say this enough, but having you in my life means a lot

You are so special and a wonderful person.

You are soooo kind, generous, altruistic, charming, genuine girl I have ever seen and yeah also incredibly precious hehe and soo on..

iam not good at english or else I would have written some paragraphs about how amazing you are..

On your birthday. I just want you to know that you are irreplaceable

I hope this year brings you everything you deserve
and dont forget that you deserve the best always

May every day bring you a reason to smile

I hope you are always as happy as you make the people around you`;


let typingTimer;
function typeMessage(){

    clearInterval(typingTimer);

    let i = 0;

    const box = document.getElementById("typingText");

    box.innerHTML = "";

    typingTimer = setInterval(() => {

        box.innerHTML += message.charAt(i);

        i++;

if(i >= message.length){

    clearInterval(typingTimer);

    setTimeout(() => {

        document.getElementById("surpriseBtn")
        .classList.remove("hidden");

    },1000);

}

    }, 50);

}
function blowCandles(){

    document.getElementById("cakeBox").textContent = "🎂";

    document.getElementById("candleBtn").style.display = "none";

    document.getElementById("finalMessage")
    .classList.remove("hidden");

    for(let i=0;i<60;i++){

        let c=document.createElement("div");

        c.className="confetti";

        c.style.left=Math.random()*100+"vw";

        c.style.backgroundColor=
        ["#ff4fa3","#ffd700","#00e5ff","#7cff6b","#ffffff"][Math.floor(Math.random()*5)];

        c.style.animationDelay=Math.random()+"s";

        document.body.appendChild(c);

        setTimeout(()=>{
            c.remove();
        },4000);

    }

}

function showCake(){

    show(cake);

}