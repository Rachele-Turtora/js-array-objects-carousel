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

for (let i = 0; i < images.length; i++) {

    const currentObject = images[i]

    const item = document.createElement("div");
    item.classList.add("item");

    const thumb = document.createElement("div");
    thumb.classList.add("thumb");

    if (currentObject["image"] == "img/01.webp"){
        item.classList.add("active");
        thumb.classList.add("active");
    }

    const imgItem = document.createElement("img");
    imgItem.src = currentObject["image"];

    const imgThumb = document.createElement("img");
    imgThumb.src = currentObject["image"];

    const title = document.createElement("h2");
    title.innerText = currentObject["title"];

    const text = document.createElement("p");
    text.innerText = currentObject["text"];

    item.append(imgItem);
    thumb.append(imgThumb);
    item.append(title);
    item.append(text);

    items.append(item);
    thumbs.append(thumb);
}

let listThumbs = document.querySelectorAll(".thumb");
let listItems = document.querySelectorAll(".item");

thumbs.addEventListener("click", function(event){
    const clickTarget = event.target

    if (clickTarget.classList.contains("arrow")){
        arrowScrolling(clickTarget, listThumbs, listItems);
    } else {
        pointScrolling(clickTarget, listThumbs, listItems);
    }
    
})

function arrowScrolling(arrow, thumbs, items){

    for (let i = 0; i < thumbs.length; i++){

        if (thumbs[i].classList.contains("active")){
            
            if (arrow.classList.contains("next")){
                thumbs[i].classList.remove("active");
                items[i].classList.remove("active");
                if (i !== thumbs.length - 1){
                    thumbs[i+1].classList.add("active");
                    items[i+1].classList.add("active");
                } else {
                    thumbs[0].classList.add("active");
                    items[0].classList.add("active");
                }
                return
                
            } else if (arrow.classList.contains("prev")){
                thumbs[i].classList.remove("active");
                items[i].classList.remove("active");
                if (i !== 0){
                    thumbs[i-1].classList.add("active");
                    items[i-1].classList.add("active");
                } else {
                    thumbs[thumbs.length - 1].classList.add("active");
                    items[items.length - 1].classList.add("active");
                }
                return
            } 
        }
    }
}

function pointScrolling(point, thumbs, items){

    if (!point.parentNode.classList.contains("active")){
        for (let i = 0; i < items.length; i++){
            thumbs[i].classList.remove("active");
            items[i].classList.remove("active");
        }

        point.parentNode.classList.add("active");
        for (let i = 0; i < items.length; i++){
            if (point.src === items[i].children[0].src){
                items[i].classList.add("active");
            }
        }

    }
}


setInterval(repeat, 3000)

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