"use strict";

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Creating items and thumbs
const items = document.querySelector(".items");
const thumbs = document.querySelector(".thumbs");

generateElement("item", items);
generateElement("thumb", thumbs);

function generateElement(className, parentElement){
    images.forEach((element, index) => {
        const currentObject = element
    
        const div = document.createElement("div");
        div.classList.add(className);
        div.dataset.index = index   // creo data-index per ogni item e thumb
    
        if (currentObject["image"] == "img/01.webp"){
            div.classList.add("active");
        }
    
        const img = document.createElement("img");
        img.src = currentObject["image"];
    
        div.append(img);

        parentElement.append(div);

        if (parentElement == items){
            const content = document.createElement("div");
            content.classList.add("content");
    
            div.append(content);

            const title = document.createElement("h2");
            title.innerText = currentObject["title"];
        
            const text = document.createElement("p");
            text.innerText = currentObject["text"];

            content.append(title);
            content.append(text);
        }

    })
}

let listThumbs = document.querySelectorAll(".thumb");
let listItems = document.querySelectorAll(".item");

thumbs.addEventListener("click", function(event){
    const clickTarget = event.target

    function currentImage(items){
        for (let element of items) {
            if (element.classList.contains("active")) {
                return element.dataset.index;
            }
        }
    }

    let index = currentImage(listItems);

    if (clickTarget.classList.contains("prev")){
        arrowScrollingUp(index, listThumbs, listItems);
    } else if (clickTarget.classList.contains("next")){
        arrowScrollingDown(index, listThumbs, listItems);
    } else {
        pointScrolling(clickTarget, listThumbs, listItems, index);
    }
})

// Click on the arrows
function arrowScrollingUp(index, items, thumbs){
    
    items[index].classList.remove("active");
    thumbs[index].classList.remove("active");

    if (index != 0){
        index--;
    } else {
        index = 4;
    }
        
    items[index].classList.add("active");
    thumbs[index].classList.add("active");
}

function arrowScrollingDown(index, items, thumbs){

    items[index].classList.remove("active");
    thumbs[index].classList.remove("active");

    if (index != 4){
        index++;
    } else {
        index = 0;
    }
        
    items[index].classList.add("active");
    thumbs[index].classList.add("active");
}

// Click on the specific thumb
function pointScrolling(point, thumbs, items, index){

    items[index].classList.remove("active");
    thumbs[index].classList.remove("active");

    let target = point.parentNode.dataset.index;

    items[target].classList.add("active");
    thumbs[target].classList.add("active");
}


const buttons = document.querySelector(".buttons");
let clock;
let clockReverse;

// Autoplay
buttons.addEventListener("click", function(event){
    const buttonValue = event.target;

    if (buttonValue.classList.contains("start")){
        clearInterval(clockReverse);
        clock = setInterval(repeat, 3000);
    } else if (buttonValue.classList.contains("end")){
        clearInterval(clock);
        clearInterval(clockReverse)
    } else if (buttonValue.classList.contains("reverse")){
        clearInterval(clock);
        clockReverse = setInterval(reverse, 3000);
    }
})

function repeat(){
    for (let i = 0; i < listThumbs.length; i++){

        if (listThumbs[i].classList.contains("active")){
            listThumbs[i].classList.remove("active");
            listItems[i].classList.remove("active");
            if (i !== listThumbs.length - 1){
                listThumbs[i+1].classList.add("active");
                listItems[i+1].classList.add("active");
            } else {
                listThumbs[0].classList.add("active");
                listItems[0].classList.add("active");
            }
            break;
        }
    }
}

function reverse(){
    for (let i = 0; i < listThumbs.length; i++){

        if (listThumbs[i].classList.contains("active")){
            listThumbs[i].classList.remove("active");
            listItems[i].classList.remove("active");
            if (i !== 0){
                listThumbs[i-1].classList.add("active");
                listItems[i-1].classList.add("active");
            } else {
                listThumbs[listThumbs.length - 1].classList.add("active");
                listItems[listItems.length - 1].classList.add("active");
            }
            break;
        }
    }
}