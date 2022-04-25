let menuActivate = document.getElementById('menu-open');
let menuDeactivate = document.getElementById('menu-close');
let menu = document.getElementById('menu');
let popup = document.getElementById('popup');
let close = document.querySelector('close');

menuActivate.addEventListener('click', function(){
    menu.classList.toggle('activate');
    document.querySelector('html').style.overflowY = 'hidden';
});

menuDeactivate.addEventListener('click', function(){
    menu.classList.toggle('activate');
    document.querySelector('html').style.overflowY = 'scroll';
});

document.onclick = function(e){
    if (menu.classList.contains('activate')) {
        console.log(e);
        if (e.target.id !== menu &&
            !e.path.includes(menuActivate) && !e.path.includes(menu)) {
            menu.classList.remove('activate');
            document.querySelector('html').style.overflowY = 'scroll';
        }
    } else if (popup.style.display === "flex") {
        console.log(e);
        if (e.target.id !== popup_window &&
            !e.path.includes(document.getElementById('card-area')) &&
            !e.path.includes(document.getElementById('popup_window'))) {
            popup.style.display = "none";
            document.querySelector('html').style.overflowY = 'scroll';
        }
    }
}


let arrow_left = document.getElementById("arrow-left");
let arrow_right = document.getElementById("arrow-right");
let card_area = document.getElementById("card-area");
let pets = [
    {
        "name": "Katrine",
        "img": "../../assets/images/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Jennifer",
        "img": "../../assets/images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/pets-scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
]

let card = [0,1,2];
arrow_right.onclick = function(){
    card_area.style.transform = 'translateX(-5%)';
    card_area.style.transition = 'transform 0.5s'
    setTimeout(newCards, 500);
};

arrow_left.onclick = function(){
    card_area.style.transform = 'translateX(5%)';
    card_area.style.transition = 'transform 0.5s'
    setTimeout(newCards, 500);
};

function newCards(){
    while (card_area.firstChild) {
        card_area.removeChild(card_area.firstChild);
    }

    var temp = [];
    while (temp.length !== 3){
        let number = getRandomInt(pets.length);
        if(!card.includes(number) && !temp.includes(number)){
            temp.push(number);
        }
    }
    card = temp;
    for (let i = 0; i < 3; i++){
        let card = document.createElement("div");
        card.classList.add('card');
        card.id = pets[temp[i]].name;
        let img = document.createElement('img');
        img.src = pets[temp[i]].img;
        card.append(img)
        let p  = document.createElement('p');
        p.textContent = pets[temp[i]].name;
        card.append(p);
        let button = document.createElement('button');
        button.textContent = 'Learn more';

        button.onclick = function(){
            document.querySelector('html').style.overflowY = 'hidden';
            popup.style.display = "flex";
            popup.children[0].onclick = function(){
                document.querySelector('html').style.overflowY = 'scroll';
                popup.style.display = "none";
            }
            popup.children[1].children[0].src =  pets[temp[i]].img;
            popup.children[1].children[1].children[0].textContent = pets[temp[i]].name;
            popup.children[1].children[1].children[1].textContent = pets[temp[i]].type + " - " + pets[temp[i]].breed;
            popup.children[1].children[1].children[2].textContent = pets[temp[i]].description;
            popup.children[1].children[1].children[3].children[0].children[1].textContent = pets[temp[i]].age;
            popup.children[1].children[1].children[3].children[1].children[1].textContent = pets[temp[i]].inoculations;
            popup.children[1].children[1].children[3].children[2].children[1].textContent = pets[temp[i]].diseases;
            popup.children[1].children[1].children[3].children[3].children[1].textContent = pets[temp[i]].parasites;
        }
        card.append(button);
        card_area.append(card);
    }
    card_area.style.transition = 'transform 0.2s'
    card_area.style.transform = 'none';
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

(function(){
    newCards();
 })();