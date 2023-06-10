var a1 = document.getElementsByTagName('button')[0]
a1.onclick=function(){
    location.href = 'index.html'
}
var a2 = document.getElementsByTagName('button')[1]
a2.onclick=function(){
    location.href = 'todo-html.html'
}

let logo = document.getElementById('logo');
let nav = document.getElementById('navbar1');
logo.onmouseover=shadow;
function shadow(){
    logo.style.boxShadow='-10px 10px 6px white'
    logo.style.cursor='pointer'
}
logo.onmouseleave=no_translate;
function no_translate(){
    logo.style.boxShadow='none'
}
logo.onclick=function(){
    nav.style.visibility='visible';
    window.scrollTo(0, 750, {
        behavior: "smooth"
      });
}

function changenav() {
    if (window.scrollY > 750) {
        nav.style.backgroundColor = 'black';
        nav.style.boxShadow = 'none';

        a1.style.color = 'white';
        a1.style.border = '2px solid white';
        a1.style.backgroundColor = 'black';
        a1.style.fontWeight = 'normal';
        a1.style.fontSize = '20px';

        a2.style.color = 'white';
        a2.style.border = '2px solid white';
        a2.style.backgroundColor = 'black';
        a2.style.fontWeight = 'normal';
        a2.style.fontSize = '20px';
    }
    // else{
    //     nav.style.backgroundColor = 'white';
    //     nav.style.boxShadow = '0px 0px 2px black';
    //     nav.style.color = 'black';

    //     a1.style.color = 'black';
    //     a1.style.border = '2px solid black';
    //     a1.style.backgroundColor = 'white';
    //     a1.style.fontWeight = 'bold';
    //     a1.style.fontSize = '22px';
    //     a1.onmouseover=function(){
    //         a1.style.border='2px solid black'
    //     }

    //     a2.style.color = 'black';
    //     a2.style.border = '2px solid black';
    //     a2.style.backgroundColor = 'white';
    //     a2.style.fontWeight = 'bold';
    //     a2.style.fontSize = '22px';
    // }
    if (window.scrollY>700) {
        nav.style.visibility='visible';
    }
    else{
        nav.style.visibility='hidden';

    }
}


let whats = document.getElementById('whatsapp')
let insta = document.getElementById('insta')
let fb = document.getElementById('fb')
let twitter = document.getElementById('twitter')

let posturl1 = encodeURI(document.location.href);
function whatsapp() {
    window.open(`https://api.whatsapp.com/send?text=${posturl1}`, 'targetWindow', 
    `toolbar=no,
    location=no,
    status=no,
    menubar=no,
    scrollbars=yes,
    resizable=yes,
    width=SomeSize,
    height=SomeSize`)
}
// let posturl2 = encodeURI(document.location.href);
function gram() {
    window.open(`https://www.instagram.com/`, 'targetWindow', 
    `toolbar=no,
    location=no,
    status=no,
    menubar=no,
    scrollbars=yes,
    resizable=yes,
    width=SomeSize,
    height=SomeSize`)
}
let posturl3 = encodeURI(document.location.href);
function fbook() {
    window.open(`https://www.facebook.com/sharer.php?u=${posturl3}`, 'targetWindow', 
    `toolbar=no,
    location=no,
    status=no,
    menubar=no,
    scrollbars=yes,
    resizable=yes,
    width=SomeSize,
    height=SomeSize`)
}
let posturl4 = encodeURI(document.location.href);
let viaa = "@ghoat_vj"
let hash = "#ToDoList"
function tweet() {
    window.open(`https://twitter.com/share?url=Here%27s%20the%20To-Do%20List`, 'targetWindow', 
    `toolbar=no,
    location=no,
    status=no,
    menubar=no,
    scrollbars=yes,
    resizable=yes,
    width=SomeSize,
    height=SomeSize`)
}

let greater = document.getElementById('greater')
let tray = document.getElementById('share_tray')
let flag=0; 
greater.addEventListener('click',function(){
    if(flag===0){
        show();
    }
    else{
        hide();
    }
})

function show(){
    tray.style.visibility='visible';
    greater.style.transform='rotate(180deg)';
    flag=1;
}
function hide(){
    tray.style.visibility='hidden';
    greater.style.transform='rotate(0deg)';
    flag=0;
}
let lg = document.getElementById('logo1')
lg.onclick=function(){
    location.href='index.html'
}

let menu = document.getElementById('menu')
menu.addEventListener('click',dropdown)
function dropdown(){
    new_div = document.createElement('div')

    new_div.style.height='100px' ;
    new_div.style.width='50px' ;
}

let card = document.getElementById("card")
card.onclick=function(){
    card.style.visibility='visible'
    card.style.height='200px'
    card.style.width='200px'
    card.style.border='solid 2px black'
    
}