let menuActivate = document.getElementById('menu-open');
let menuDeactivate = document.getElementById('menu-close');
let menu = document.getElementById('menu');

menuActivate.addEventListener('click', function(){
    menu.classList.toggle('activate');
});

menuDeactivate.addEventListener('click', function(){
    menu.classList.toggle('activate');
});

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

let array = [0,1,2,3,4,5,6,7];
let pages = 1;
let shuffle = [];
let arrow_left_double = document.getElementById('arrow-left-double');
let arrow_left = document.getElementById('arrow-left');
let arrow_right_double = document.getElementById('arrow-right-double');
let arrow_right = document.getElementById('arrow-right');
let counter = document.getElementById('counter');
let card_area = document.getElementById('card-area');
let max_pages = 0;

(function(){
    if (window.screen.width >= 1280){
        max_pages = 6;
    } else if (window.screen.width >= 768 && window.screen.width < 1280){
        max_pages = 8;
    } else {
        max_pages = 16;
    }
    for (let i = 0; i < 6; ++i){
        array = array.sort((a, b) => 0.5 - Math.random());
        for (var j of array) {
            shuffle.push(j);
        }
    }
    addNewCards();
})();

arrow_right.onclick = function(){
    if(this.classList.contains('disabled')){
        return;
    }
    pages++;
    counter.textContent = pages;
    if (pages !== 1){
        arrow_left_double.classList.remove('disabled');
        arrow_left_double.classList.add('active');
        arrow_left.classList.remove('disabled');
        arrow_left.classList.add('active');
    }
    if (pages === max_pages){
        this.classList.remove('active');
        this.classList.add('disabled');
        arrow_right_double.classList.remove('active');
        arrow_right_double.classList.add('disabled');
    }
    addNewCards();
}

arrow_right_double.onclick = function () {
    if (this.classList.contains('disabled')) {
        return;
    }
    pages = max_pages;
    counter.textContent = pages;

    arrow_left_double.classList.remove('disabled');
    arrow_left_double.classList.add('active');
    arrow_left.classList.remove('disabled');
    arrow_left.classList.add('active');

    this.classList.remove('active');
    this.classList.add('disabled');
    arrow_right.classList.toggle('disabled');
    arrow_right.classList.toggle('active');

    addNewCards();
}

arrow_left.onclick = function(){
    if (this.classList.contains('disabled')) {
        return;
    }
    pages--;
    counter.textContent = pages;
    if (pages !== max_pages){
        arrow_right_double.classList.remove('disabled');
        arrow_right_double.classList.add('active');
        arrow_right.classList.remove('disabled');
        arrow_right.classList.add('active');
    }
    if (pages === 1){
        this.classList.remove('active');
        this.classList.add('disabled');
        arrow_left_double.classList.remove('active');
        arrow_left_double.classList.add('disabled');
    }

    addNewCards();
}

arrow_left_double.onclick = function () {
    if (this.classList.contains('disabled')) {
        return;
    }
    pages = 1;
    counter.textContent = pages;

    arrow_right_double.classList.remove('disabled');
    arrow_right_double.classList.add('active');
    arrow_right.classList.remove('disabled');
    arrow_right.classList.add('active');

    this.classList.remove('active');
    this.classList.add('disabled');
    arrow_left.classList.toggle('disabled');
    arrow_left.classList.toggle('active');

    addNewCards();
}

function addNewCards() {
    while (card_area.firstChild) {
        card_area.removeChild(card_area.firstChild);
    }

    for (let i = 0; i < 48 / max_pages; ++i){
        let card = document.createElement('div');
        card.classList.add('card');
        card.id = pets[shuffle[48/max_pages * (pages-1) + i]].name;
        let img = document.createElement('img');
        img.src = pets[shuffle[48/max_pages * (pages-1) + i]].img;
        card.append(img);
        let p  = document.createElement('p');
        p.textContent = pets[shuffle[48/max_pages * (pages-1) + i]].name;
        card.append(p);
        let button = document.createElement('button');
        button.textContent = 'Learn more';
        card.append(button);
        card_area.append(card);
    }
}