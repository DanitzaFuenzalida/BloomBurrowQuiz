var colors = {White: 0, Blue: 0, Red: 0, Green: 0, Black: 0, Other: 0};


// Massive list of all questions, expand further at all times if possible.
var questions = [
	{
		question: "Do you consider yourself knowledgeable in technology?",
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
		// 15th Question
		question: "Past, present, or future?",
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

	{
		question: "Do you think lying is ok, as long as its to not hurt someone's feelings?",
		answers: [
			{answer: "Absolutely, the persons's feelings are more important", points: {Red: 3}},
			{answer: "I think I could only do so if it was really important", points: {White: 1, Red: 1}},
			{answer: "I don't think I can lie, even if it would hurt", points: {White: 3}}
		]
	},

	{
		question: "Do you think the end justifies the means?",
		answers: [
			{answer: "Absolutely.", points: {Black: 3}},
			{answer: "Depends on what we're talking about...", points: {White: 1, Black: 1, Blue: 1}},
			{answer: "Never.", points: {White: 3}}
		]
	},


		// 20th question.
	{
		question: "Do you think you fall in love easily?",
		answers: [
			{answer: "I fall in love hard and fast.", points: {Red: 2}},
			{answer: "It takes me a while...", points: {Blue: 2}}
		]
	},

	{
		question: "If you could only chose one, what would you choose...?",
		answers: [
			{answer: "The guarantee of growing old with my one true love.", points: {Red: 2, White: 1}},
			{answer: "The power to do anything I want to do at my command.", points: {Black: 2, Red: 1}},
			{answer: "The knowledge of humanity at my fingertips.", points: {Blue: 2, Black: 1}}
		]
	},

	{
		question: "Do you find yourself eager to get out of bed and act?",
		answers: [
			{answer: "I am always looking to do all kinds of things.", points: {Red: 2, Black: 1}},
			{answer: "I actually have a hard time acting on things, other people have to make me.", points: {Green: 2, White: 1}}
		]
	},

	{
		question: "Which one do you think is humanity's greatest asset?",
		answers: [
			{answer: "Logic.", points: {Blue: 3}},
			{answer: "Emotion.", points: {Red: 3}}
		]
	},

	{
		question: "If the truth caused you to be alone, would you still search for it?",
		answers: [
			{answer: "Yes.", points: {Black: 3}},
			{answer: "No.", points: {White: 3}}
		]
	},


	// 25th question
	{
		question: "If the truth caused you to be alone, would you still search for it?",
		answers: [
			{answer: "Yes.", points: {Black: 3}},
			{answer: "No.", points: {White: 3}}
		]
	},

	{
		question: "Do you prefer the peace of order, or the excitement of chaos?",
		answers: [
			{answer: "Order.", points: {White: 2, Green: 1, Blue: 1}},
			{answer: "Chaos.", points: {Black: 2, Red: 2, Green: 1}}
		]
	},

	{
		question: "Do you think humans are different from animals?",
		answers: [
			{answer: "Our intelligence and rationality is what separates us from simple animals.", points: {White: 2, Blue: 2}},
			{answer: "Humans are just like animals, no more, no less.", points: {Black: 2, Green: 2}}
		]
	},

	{
		question: "What do you think matters most when making decisions?",
		answers: [
			{answer: "How it affects other people.", points: {White: 2, Green: 1}},
			{answer: "How it affects me.", points: {Red: 2, Black: 1}}
		]
	},


	// 30th question
	{
		question: "Do you believe that unconditional love exists?",
		answers: [
			{answer: "Yes.", points: {Red: 3}},
			{answer: "No.", points: {Black: 2}}
		]
	},

	{
		question: "How would you act in a brand new world?",
		answers: [
			{answer: "Take a brave step forward.", points: {Red: 3}},
			{answer: "Turn right around immediately.", points: {Green: 3}}
		]
	},

	{
		question: "Would you follow the life you believe in, even if everyone was against it?",
		answers: [
			{answer: "Yes.", points: {Red: 3}},
			{answer: "No.", points: {White: 3}}
		]
	},

	{
		question: "Where would you rather live?",
		answers: [
			{answer: "Your childhood home.", points: {Green: 2, White: 2}},
			{answer: "An unknown, bustling city.", points: {Red: 3, Black: 1}}
		]
	},


	// 35th question
	{
		question: "Do you ever wish you could travel back to the past?",
		answers: [
			{answer: "Yes, things were better back then.", points: {Green: 3}},
			{answer: "Only as a curiosity.", points: {Blue: 1}},
			{answer: "Absolutely not, it was the past for a reason.", points: {Blue: 3}}
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


var quizLengthNumber = parseInt(location.hash.substring(1));

var questionIndex = 0;
var questionsTotal = questions.length - quizLengthNumber;

var question;
var questionElement;
var answersElement;
var resultElement;
var portraitMElement;
var retryElement
var parent;
var endspeech;

function generateQuestion()
{

	if (questions.length === questionsTotal)
	{
		questionElement = document.getElementById("question");
		questionElement.style.display = "none";

		answersElement = document.getElementById("answers");
		answersElement.style.display = "none";

		resultElement = document.getElementById("result");
		resultElement.style.display = "block";
			
		portraitMElement = document.getElementById("portraitM");
		portraitMElement.style.display = "block";
		
		retryElement = document.getElementById("retry");
		retryElement.style.display = "block";
		

		// Switch, holds the text information of all the possible results. 

		switch(calculateResult())
		{
			case "Azorius":
			{
				endspeech = "<p>You seem to be... An Azorius! " +
        					"<img src='CombinationSymbols/whiteBlue.png' " +
        					"style='width:40px;height:40px;vertical-align:middle;'></p>" +
        					"<p>You are dedicated to the truth. You are logical and hopeful, and you genuinely want the best for people.</p>" +
							"<p>And would go to the ends of the Earth to protect someone in need.</p>" +
							"<p>Yet, you might have difficulty thinking of yourself before others... when's the last time you did something kind for yourself?</p>" +
							"<p>Try doing something just for you every once in a while.</p>" +
							"<p>So an Azorius like you... Would be a Birdfolk!</p>";
				break;
			}

			// Rewrite Orzhov
			case "Orzhov":
			{
				endspeech = "<p>You seem to be... A Orzhov! " +
        					"<img src='CombinationSymbols/whiteBlack.png' " +
        					"style='width:40px;height:40px;vertical-align:middle;'></p>" +
							"<p>You struggle sometimes with wanting to be the best for people, and what you want for yourself.</p>" +
							"<p>You want to do great things for yourself, but also want to help the people around you.</p>" +
							"<p>But who said these needed to be mutually exclusive?</p>" +
							"<p>Everything you learn for yourself will come back to help those you love you...</p>" +
							"<p>Remember, sometimes, things are a lot more intertwined than they appear.</p>" +
							"<p>So an Orzhov like you... Would be a Batfolk!</p>";
				break;
			}
			case "Boros":
			{
				endspeech = "<p>You seem to be... A Boros! " +
        					"<img src='CombinationSymbols/redWhite.png' " +
        					"style='width:40px;height:40px;vertical-align:middle;'></p>" +
							"<p>You want to be a daring hero! Save the princess, get the treasure, slay the dragon!</p>" +
							"<p>Go forth! For bravery, for adventure!</p>" +
        					"<p>And if I'm wrong...</p>" +
        					"<p>Then work hard at it to back it up.</p>" +
							"<p>Remember, you don't have to save the entire world. In hard times, every little bit helps.</p>" +
							"<p>So a Boros like you... Would be a Mousefolk!</p>";
				break;
			}
			case "Selesnya":
			{
				endspeech = "<p>You seem to be... A Selesnya! " +
        					"<img src='CombinationSymbols/greenWhite.png' " +
        					"style='width:40px;height:40px;vertical-align:middle;'></p>" +
        					"<p>You are quite a calm individual. You go with the flow, you don't tend to bother other people too much.</p>" +
							"<p>If it was up to you, you wouldn't need to go adventuring or go save the world: you already have all you could ever want.</p>" +
							"<p>But be careful: sometimes, a little conflict is needed for things to move forwards.</p>" +
							"<p>Don't be afraid to rock the boat every so often.</p>" +
							"<p>So a Selesnya like you... Would be a Rabbitfolk!</p>";
				break;
			}
			case "Dimir":
			{
				endspeech = "<p>You seem to be... A Dimir! " +
        					"<img src='CombinationSymbols/blueBlack.png' " +
        					"style='width:40px;height:40px;vertical-align:middle;'></p>" +
							"<p>You love learning about new things, even things that most people would find distasteful.</p>" +
							"<p>And you may also have some difficulties bonding with other people. Maybe you're a bit of a recluse. Do you worry at times, over what people might say about the things you like?</p>" +
        					"<p>Well don't worry... There's a lot of people out there just like you.</p>" +
							"<p>Open up every once in a while, and you might find there's a lot of people who like the same things you do.</p>" +
							"<p>So a Dimir like you... Would be a Ratfolk!</p>";
				break;
			}

			// Potential rewrite for izzet
			case "Izzet":
			{
				endspeech = "<p>You seem to be... A Izzet! " +
        					"<img src='CombinationSymbols/blueRed.png' " +
        					"style='width:40px;height:40px;vertical-align:middle;'></p>" +
        					"<p>You are both as passionate as you are logical. You have a lot of different ideas in your head, but you don't always know how to channel that energy the best way.</p>" +
							"<p>You want to take risks, but you are scared of what the consequences of doing this might be...</p>" +
							"<p>Take a deep breath every once in a while. What has to happen has to happen, so stop overthinking all the consequences.</p>" +
							"<p>Just look at what you want, and go for it.</p>" +
							"<p>So a Izzet like you... Would be an Otterfolk!</p>";		
				break;
			}

			// Not familiar with Simic
			case "Simic":
			{
				endspeech = "<p>You seem to be... A Simic! " +
        					"<img src='CombinationSymbols/greenBlue.png' " +
        					"style='width:40px;height:40px;vertical-align:middle;'></p>" +
							"<p>You very deeply want to know the world, and all that it hides from you.</p>" +
							"<p>And you are also very laid back. You are in tune with the world and everything around it.</p>" +
							"<p>But, perhaps there is such a thing as too laid back?</p>" +
							"<p>Try using your knowledge for more things every once in a while...</p>" +
							"<p>So a Simic like you... Would be a Frogfolk!</p>";
				break;
			}
			case "Rakdos":
			{
				endspeech = "<p>You seem to be... A Rakdos! " +
        					"<img src='CombinationSymbols/redBlack.png' " +
        					"style='width:40px;height:40px;vertical-align:middle;'></p>" +
							"<p>You are fiery, with a deep desire to do the things you want, with no one to stop you.</p>" +
							"<p>And you genuinely don't care about what other people think of you!</p>" +
							"<p>However, maybe you're a little bit reckless as well... doing dangerous things without thinking of the consequences</p>" +
							"<p>Or how that affects the people around you...</p>" +
							"<p>Remember: There are people out there who love you. Think of them every once in a while.</p>" +
							"<p>So a Rakdos like you... Would be a Lizardfolk!</p>";				
				break;
			}
			case "Golgari":
			{
				endspeech = "<p>You seem to be... A Golgari! " +
        					"<img src='CombinationSymbols/blackGreen.png' " +
        					"style='width:40px;height:40px;vertical-align:middle;'></p>" +
							"<p>You are in complete comfort with everything morbid.</p>" +
							"<p>Insects, rot, death? You don't mind... you know deep down, this is the way everything has to go.</p>" +
							"<p>And while there is comfort in fatalism... don't let yourself drown in it too much.</p>" +
							"<p>This is still the only life you get, make the most out of it." +
							"<p>I mean, we'll all end six feet under all the same, you might as well enjoy the ride.</p>" +
							"<p>So a Golgari like you... Would be a Squirrelfolk!</p>";					
				break;
			}
			case "Gruul":
			{
 				endspeech =  "<p>You seem to be... A Gruul! " +
        					"<img src='CombinationSymbols/redGreen.png' " +
        					"style='width:40px;height:40px;vertical-align:middle;'></p>" +
							"<p>You are hedonistic. You love to do all the things you want with no one to stop you.</p>" +
							"<p>Sweets, toys, trashy food, you name it!</p>" +
							"<p>And you are laid back as a cucumber, you don't worry about a future that might not be.</p>" +
							"<p>But even then, not worrying at all could be a problem. After all, the future will be your present eventually</p>" +
							"<p>Work hard every once in a while... You will need to live in the future you created for yourself, after all.</p>" +
							"<p>So a Gruul like you... Would be a Racoonfolk!</p>";
				break;
			}
			default:
			{
				endspeech =  "<p>You seem to be...</p>" +
        					"<p>Uh, a very strange person...</p>" + 
							"<p>You really weren't supposed to read this. Did you break something?</p>" + 
							"<p>Or maybe you're just a cheeky hacker.</p>" + 
							"<p>Yeah, get outta here.</p>";
				
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

// Music functions

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