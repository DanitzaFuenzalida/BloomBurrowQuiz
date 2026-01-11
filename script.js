var colors = {White: 0, Blue: 0, Red: 0, Green: 0, Black: 0, Other: 0};


// Massive list of all questions, expand further at all times if possible.
var questions = [
	{
		question: "Do you consider yourself tech savvy?",
		answers: [
			{answer: "I can code if I want to", points: {Blue: 2}},
			{answer: "I can work my way around computers", points: {Blue: 1}},
			{answer: "Computers? What are those?", points: {Green: 2, Blue: -1}}
		]
	},
	{
		question: "Do you think hope is important?",
		answers: [
			{answer: "Sometimes hope is the only weapon we have", points: {White: 2}},
			{answer: "Hope is nothing without action", points: {White: 1, Red: 1}},
			{answer: "Hope? Realism is more important", points: {Black: 2}}
		]
	},
	{
		question: "You find yourself in love, how would you declare yourself?",
		answers: [
			{answer: "Say I love you directly, with no nonsense", points: {Blue: 1, Black: 1}},
			{answer: "Declare my love to the whole world", points: {Red: 1, White: 1}},
			{answer: "Spend time with them, slowly letting them know", points: {Blue: 1, Green: 1}},
			{answer: "I don't have to say anything: they already know", points: {Red: 1, Black: 1}}
		]
	},
	{
		question: "How do you feel about death?",
		answers: [
			{answer: "It is a horrible tragedy", points: {White: 2}},
			{answer: "Something that in the future can be cured", points: {Blue: 2}},
			{answer: "Its an inevitable part of life", points: {Green: 2}},
			{answer: "It's morbidly beautiful", points: {Black: 2}}
		]
	},
	{
		question: "Do you find yourself jumping from relationship to relationship a lot?",
		answers: [
			{answer: "Yes", points: {Black: 1, Red: 1}},
			{answer: "No", points: {White: 1, Blue: 1}}
		]
	},
	{
		question: "Do you think you're cheerful?",
		answers: [
			{answer: "Yes", points: {Red: 3}},
			{answer: "No", points: {Black: 1, Blue: 1}}
		]
	},
	{
		question: "What do you think about law and order?",
		answers: [
			{answer: "It is one of the biggest tools we have as people to create peace", points: {White: 3}},
			{answer: "It's a flawed system that needs constant fixing", points: {White: 1, Blue: 1}},
			{answer: "Its a tool of abuse for the self imposed strongest", points: {Black: 3}}
		]
	},
	{
		question: "Can you deeply focus on something you like?",
		answers: [
			{answer: "Yes", points: {Blue: 1, Green: 1}},
			{answer: "No", points: {Red: 1}}
		]
	},
	{
		question: "You find a wallet on the floor, with a few bucks. No one is watching, what would you do?",
		answers: [
			{answer: "I'd bring it over to the station, no questions asked", points: {White: 3}},
			{answer: "I'd leave it where it is, surely its owner is looking for it.", points: {Green: 2}},
			{answer: "The owner probably wouldn't miss a few bucks, right?", points: {Black: 3}}
		]
	},
	{
		question: "Do you think there is a point to life?",
		answers: [
			{answer: "Yes", points: {White: 1, Green: 1, Red: 1, Blue: 1}},
			{answer: "No", points: {Black: 4}}
		]
	},
	{
		question: "Do you tend to find yourself as an outsider to the group?",
		answers: [
			{answer: "Yes", points: {Black: 1, Red: 1}},
			{answer: "No", points: {White: 1, Green: 1}}
		]
	},
	{
		question: "Do you dream of lounging around idly without much excitement?",
		answers: [
			{answer: "Yes", points: {Green: 3}},
			{answer: "No", points: {Red: 3}}
		]
	},

	{
		question: "Would you rather live a full life with many regrets, or a life of bored contentment?",
		answers: [
			{answer: "Life is to be lived! Who cares if I have regrets?", points: {Red: 3}},
			{answer: "I would rather have everything solved before I kick the bucket.", points: {White: 2, Blue: 1}},
		]
	},

	{
		question: "Can you imagine planting a tree that will take a century to grow?",
		answers: [
			{answer: "People will plant trees for shades they will never sit upon.", points: {White: 3, Green: 3}},
			{answer: "I would rather do something that does not take a century to bear fruit.", points: {Black: 3, Red: 2}},
		]
	},

	{
		question: "Past, present, or future",
		answers: [
			{answer: "Past", points: {Green: 3}},
			{answer: "Present", points: {Red: 3}},
			{answer: "Future", points: {Blue: 3}}
		]
	},
	
	{
		question: "Do you find you're sad more days than not?",
		answers: [
			{answer: "Yes", points: {Black: 1, Red: 1}},
			{answer: "No", points: {White: 1, Green: 1}}
		]
	},

	{
		question: "Do you find yourself excited for the future?",
		answers: [
			{answer: "Yes", points: {Blue: 3}},
			{answer: "No", points: {Green: 3}}
		]
	},
];

var Bat = document.createElement("img");
var Bird = document.createElement("img");
var Frog = document.createElement("img");
var Lizard = document.createElement("img");
var Otter = document.createElement("img");
var Mouse = document.createElement("img");
var Rabbit = document.createElement("img");
var Racoon = document.createElement("img");
var Rat = document.createElement("img");
var Squirrel = document.createElement("img");

var MissingImage = document.createElement("img");

Bat.src = "Portraits/bat.jpg";
Bird.src = "Portraits/bird.jpg";
Frog.src = "Portraits/frog.jpg";
Lizard.src = "Portraits/lizard.jpg";
Mouse.src = "Portraits/mouse.jpg";
Otter.src = "Portraits/otter.jpg";
Rabbit.src = "Portraits/rabbit.jpg";
Racoon.src = "Portraits/racoon.jpg";
Rat.src = "Portraits/rat.jpg";
Squirrel.src = "Portraits/squirrel.jpg";

MissingImage.src = "Portraits/MissingImage.png";

var questionIndex = 0;

var questionsminus8 = questions.length - 10;

var question;
var questionElement;
var answersElement;
var resultElement;
var textMElement;
var portraitMElement;
var retryElement
var parent;
var endspeech;

function generateQuestion()
{

	if (questions.length === questionsminus8)
	{
		questionElement = document.getElementById("question");
		questionElement.style.display = "none";

		answersElement = document.getElementById("answers");
		answersElement.style.display = "none";

		resultElement = document.getElementById("result");
		resultElement.style.display = "block";
		
		textMElement = document.getElementById("textM");
		textMElement.style.display = "block";
			
		portraitMElement = document.getElementById("portraitM");
		portraitMElement.style.display = "block";
		
		retryElement = document.getElementById("retry");
		retryElement.style.display = "block";
		

		// Switch, holds the text information of all the possible results. 

		switch(calculateResult())
		{
			case "Azorius":
			{
				endspeech = "<p>You seem to be...</p><p>An Azorius!</p><p>Write more here</p><p>";
				break;
			}
			case "Orzhov":
			{
				endspeech = "<p>You seem to be...</p><p>An Orzhov!</p><p>Write more here</p><p>";
				break;
			}
			case "Boros":
			{
				endspeech = "<p>You seem to be...</p><p>A Boros!</p><p>Write more here</p><p>";
				break;
			}
			case "Selesnya":
			{
				endspeech = "<p>You seem to be...</p><p>A Selesnya!</p><p>Write more here</p><p>";
				break;
			}
			case "Dimir":
			{
				endspeech = "<p>You seem to be...</p><p>A Dimir!</p><p>Write more here</p><p>";
				break;
			}
			case "Izzet":
			{
				endspeech = "<p>You seem to be...</p><p>An Izzet!</p><p>Write more here</p><p>";
				break;
			}
			case "Simic":
			{
				endspeech = "<p>You seem to be...</p><p>A Simic!</p><p>Write more here</p><p>";
				break;
			}
			case "Rakdos":
			{
				endspeech = "<p>You seem to be...</p><p>A Rakdos!</p><p>Write more here</p><p>";
				break;
			}
			case "Golgari":
			{
				endspeech = "<p>You seem to be...</p><p>A Golgari!</p><p>Write more here</p><p>";
				break;
			}
			case "Gruul":
			{
				endspeech = "<p>You seem to be...</p><p>A Gruul!</p><p>Write more here</p><p>";
				break;
			}
			default:
			{
				endspeech = "<p>You seem to be...</p><p>The... uh, strange...</p><p>You must be a very... something person.</p><p>However, you are reading this, thus it means that something went wrong on my end.</p><p>But, be aware, you did nothing wrong!</p><p>So, uh... i suggest you try it again, sorry for the inconvinience, and if the problem persists, let me know on github.";
				break;
			}
		}
		
		resultElement.innerHTML = endspeech;
		
		parent = document.getElementById("portraitM");
		
		// Switch, holds pictures of all animal folk here.
		switch(calculateResult())
		{
			case "Orzhov":
			{
				parent.appendChild(Bat);
				break;
			}

			case "Azorius":
			{
				parent.appendChild(Bird);
				break;
			}

			case "Boros":
			{
				parent.appendChild(Mouse);
				break;
			}

			case "Selesnya":
			{
				parent.appendChild(Rabbit);
				break;
			}

			case "Dimir":
			{
				parent.appendChild(Rat);
				break;
			}

			case "Izzet":
			{
				parent.appendChild(Otter);
				break;
			}

			case "Simic":
			{
				parent.appendChild(Frog);
				break;
			}

			case "Rakdos":
			{
				parent.appendChild(Lizard);
				break;
			}

			case "Golgari":
			{
				parent.appendChild(Squirrel);
				break;
			}

			case "Gruul":
			{
				parent.appendChild(Racoon);
				break;
			}

			default:
			{
				parent.appendChild(MissingImage);
				break;
			}
		}		
		return;
	}
	
	textMElement = document.getElementById("textM");
	textMElement.style.display = "none";
	
	portraitMElement = document.getElementById("portraitM");
	portraitMElement.style.display = "none";
		
	resultElement = document.getElementById("result");
	resultElement.style.display = "none";
	
	retryElement = document.getElementById("retry");
	retryElement.style.display = "none";
	
	if(colors.Other == 0)
	{
		questionIndex = Math.floor(Math.random() * questions.length);
	}
	else
	{
		colors.Other = 0;
	}
	
	question = questions[questionIndex];

	questionElement = document.getElementById("question");
	questionElement.innerHTML = question.question;

	answersElement = document.getElementById("answers");
	answersElement.innerHTML = "";
	
	for (var n = 0; n < question.answers.length; n++)
	{
		
		var answer = question.answers[n];
		var button = document.createElement("button");

		
		button.innerHTML = answer.answer;
		
		button.onmouseover = function(){
			var sfxOnHover = document.getElementById("onHover");
			sfxOnHover.volume = 0.5;
			sfxOnHover.play();
		};
		
		
		button.onclick = (function(points)
		{
			return function()
			{

				// Sound effect for being clicked on 

				clickSfx();
				
				for (var category in points)
				{
					if (points.hasOwnProperty(category))
					{
						colors[category] += points[category];
					}
				}

				questions.splice(questionIndex, 1);

				generateQuestion();
			};
		})(answer.points);

		answersElement.appendChild(button);
		
	}
}


// Holds the calculation for the results. Obtains the first two highest points.
function calculateResult()
{

	// Sort of original colors object
	let sortedColors = Object.fromEntries(
    	Object.entries(colors).sort(([, a], [, b]) => b - a)
	); 

	sortedColors = Object.fromEntries(Object.entries(sortedColors).slice(0, 2));

	// List of all possible point combinations for each personality type

	if (sortedColors.White && sortedColors.Blue) {
		return "Azorius";
	}
	else if (sortedColors.Red && sortedColors.Black) {
		return "Rakdos";
	}

	else if (sortedColors.White && sortedColors.Black) {
		return "Orzhov";
	}

	else if (sortedColors.White && sortedColors.Red) {
		return "Boros";
	}

	else if (sortedColors.Blue && sortedColors.Black) {
		return "Dimir";
	}

	else if (sortedColors.Blue && sortedColors.Red) {
		return "Izzet";
	}

	else if (sortedColors.Green && sortedColors.White) {
		return "Selesnya";
	}

	else if (sortedColors.Blue && sortedColors.Green) {
		return "Simic";
	}

	else if (sortedColors.Black && sortedColors.Green) {
		return "Golgari";
	}

	else if (sortedColors.Red && sortedColors.Green) {
		return "Gruul";
	}

	else {
		return "MissingIm";
	}
}

function toggleMusic()
{
	var music = document.getElementById("music");
	
	music.volume = 0.5;
	
	if (music.paused)
	{
		music.play();
	}
	else
	{
		music.pause();
	}
}

function hoverSfx(){
	var sfxOnHover = document.getElementById("onHover");
	sfxOnHover.volume = 0.5;
	sfxOnHover.play();
}

function clickSfx(){
	var sfxOnClick = document.getElementById("sfxOnClick");
	sfxOnClick.volume = 0.5;
	sfxOnClick.play();
}