function randint(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function choice(list) {
    return list[randint(0,list.length)];
}

//put random hello on page
const hellos = ["Hello", "Hi", "Helo", "Henlo", "Yo", "Hellooo", "Helooo", "Henlooo", "Hi hello", "Hello hi", "Hellooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo", "H e j !", "Hola", "Hewwo", "Hellow"]
const hellotext = document.getElementById("hellotext");
hellotext.textContent = choice(hellos);

//put random t h i n g on page
/*const bananas = ["Professional idiot",
"A light gray cube with headphones and a crown that does stuff",
"Bananas are fantastic",
"Welcome to the blue void",
"i use arch btw",
"Absolutely proprietary sux",
"Open-source epok 😎",
"👋 🌎",
"Fun fact: This text has been written with a keyboard",
"You are seeing tons of bits and bytes that are converted to millions of very small squares with different colors and displayed on your screen",
"keofesjldoçtkfh esdoçktnbhfejls"]
const ues = document.getElementById("yourmom");
ues.textContent = choice(bananas);*/