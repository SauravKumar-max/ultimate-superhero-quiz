var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;

var quizData = [
  {
    question: `1. The “Scarlett Speedster” is the nickname of which superhero?
   a.Flash
   b.Spider-man
   c.Wally West
   d.Zoom\n`,
    answer: "a",
    hint: " Hint: Scarlett Speedster can move really fast."
  },
  {
    question: `2. What is the name of Batman's loyal assistant?
   a.Dave Pennyworth
   b.Alfred Pennyworth
   c.Albert Pennyworth
   d.Peter Pennyworth\n`,
    answer: "b",
    hint: " Hint: He was a former British intelligence officer before becoming Batman's assistant"
  },
  {
    question: `3. Which DC superhero's real name is Arthur Curry?
   a.Martian Manhunter
   b.AquaMan
   c.The Flash
   d.Shazam\n`,
    answer: "b",
    hint: " Hint: He's the King of the lost city."
  },
  {
    question: `4. Which of following heroes has taken the title of Spider-Man?
   a.Harry Osborn
   b.Mary Jane
   c.Barry Allen
   d.Miles Morales\n`,
    answer: "d",
    hint: " Hint: He is the second Spider-Man, succeeding Peter Parker after his supposed death."
  },
  {
    question: `5.What is All-Might superpower/quirk called? 
   a.One for All
   b.All for One
   c.Engine
   d.Explosion\n`,
    answer: "a",
    hint: " Hint: It's a quirk which stockpile the powers and can be transferred from one person to another."
  },
  {
    question: `6.Thor’s Hammer Mjolnir is made of metal from the heart of a dying what? 
   a.Demon
   b.Comet
   c.Star
   d.Dragon\n`,
    answer: "c",
    hint: " Hint: Its is an astronomical object."
  },
  {
    question: `7. Who is Saitama’s disciple?
   a.King
   b.Sonic
   c.Bang
   d.Genos\n`,
    answer: "d",
    hint: " Hint: He is a cyborg with a superhero name Demon Cyborg."
  },
  {
    question: `8.What is Tony Stark's business empire called?
   a.Stark Industries
   b.Stark Corp
   c.Stark Limited
   d.Stark Empire\n`,
    answer: "a",
    hint: ` Hint: Its between these two:-
        a.Stark Industries
        b.Stark Corp`
  },
  {
    question: `9. What is Saitama’s hero name under the Hero Association?
   a.Blizzard of Hell
   b.Caped Baldy
   c.Lightning Genji
   d.Tornado of Terror\n`,
    answer: "b",
    hint: " Hint: It is associated with his looks."
  },
  {
    question: `10. What is the name of Black Bolt brother in Inhumans?
   a.Maxtern
   b.Gorgan
   c.Mordis
   d.Maximus\n`,
    answer: "d",
    hint: " Hint: The answer is in the description."
  }
];