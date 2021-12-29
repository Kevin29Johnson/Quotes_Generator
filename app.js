// Div
let dp = document.querySelector('.display');
// button
let btn=document.querySelector('button');

// quotes array

var quotes=["All our dreams can come true, if we have the courage to pursue them.  – Walt Disney",

  "The secret of getting ahead is getting started.  – Mark Twain",

  "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.  – Michael Jordan",

  "Only the paranoid survive. – Andy Grove",
  "Your talent determines what you can do. Your motivation determines how much you’re willing to do. Your attitude determines how well you do it.  —Lou Holtz",

  "Your imagination is your preview of life’s coming attractions.   — Albert Einstein",

  "Hold the vision, trust the process   – Unknown",

  "Don’t be afraid to give up the good to go for the great.   – John D. Rockefeller",

 "We are what we repeatedly do. Excellence, then, is not an act, but a habit.  – Aristotle",

 "Work hard in silence, let your success be the noise.   – Frank Ocean"
];


// random number
var rand=Math.floor(Math.random()*(quotes.length));
// event listener

btn.addEventListener('click' ,function (){

     dp.innerText=quotes[rand];
});