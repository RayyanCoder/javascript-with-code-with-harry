const jokes =[
"What has ears but cannot hear? A cornfield.",
"What’s a cat’s favorite dessert? A bowl full of mice-cream.",
"Where did the music teacher leave her keys? In the piano!",
"What did the policeman say to his hungry stomach? “Freeze. You’re under a vest.”",
"What did the left eye say to the right eye? Between us, something smells!",
"What do you call a guy who’s really loud? Mike.",
"What did the lava say to his girlfriend? “I lava you!”",
"What did Yoda say when he saw himself in 4k? HDMI."
];



document.getElementById('jokebtn').addEventListener('click',()=>{
    const randomJoke = Math.floor(((Math.random()*7)+1));
    console.log(randomJoke);
    const newJoke = jokes[randomJoke] == "undefined"?'This is a joke in joke':jokes[randomJoke];
    document.getElementById('joke').innerHTML = newJoke;
});