import React, { Component } from 'react';
import QuotesItem 			from "./parts/QuotesItem";
import $ from 'jquery';

class Quotes extends Component{

// Start Content 
constructor (){
		super();
		this.state = {
			quotes: []
		}
	}

	componentWillMount(){
		this.setState({quotes:[
			{ title: "They may take our lives, but they'll never take our freedom!" },
			{ title: "What's in the Box?" },
			{ title: "Jayne, your mouth is talking. You might wanna look to that" },
			{ title: "Get your stinking paws off me, you damned dirty ape!" },
			{ title: "Chewie, we're home." },
			{ title: "My precious." },
			{ title: "Go ahead, make my day." },
			{ title: "I mean, funny like I'm a clown? I amuse you?" },
			{ title: "Well, my time of not taking you seriously is coming to a middle." },
			{ title: "I'll get you, my pretty, and your little dog, too!" },
			{ title: "Hasta la vista, baby." },
			{ title: "I'm having an old friend for dinner." },
			{ title: "Just keep swimming." },
			{ title: "Mama says, 'Stupid is as stupid does." },
			{ title: "Shaken, not stirred." },
			{ title: "What we've got here is a failure to communicate." },
			{ title: "The greatest trick the devil ever pulled was convincing the world he didn't exist." },
			{ title: "I swear by my pretty floral bonnet, I will end you." },
			{ title: "I love the smell of napalm in the morning." },
			{ title: "Say hello to my little friend!" },
			{ title: "Here's Johnny!" },
			{ title: "Someone ever tries to kill you, you try to kill 'em right back!" },
			{ title: "Houston, we have a problem." },
			{ title: "To infinity and beyond!" },
			{ title: "Yippie-ki-yay, motherfucker!" },
			{ title: "You can't handle the truth!" },
			{ title: "Why so serious?" },
			{ title: "I am your father." },
			{ title: "The first rule of Fight Club is: You do not talk about Fight Club." },
			{ title: "You talkin' to me?" },
			{ title: "I'm going to make him an offer he can't refuse." },
			{ title: "May the Force be with you." },
			{ title: "You're gonna need a bigger boat." },
			{ title: "You can't take the sky from me." },
			{ title: "Now you're being rude, and I hate rude people." },
			{ title: "Bowels in or bowels out?" },
			{ title: "I should tell you...I've given serious thought...to eating your wife" },
			{ title: "If you can't keep up with the conversation, better not try to join in at all." },
			{ title: "Memory, Agent Starling, is what I have instead of a view." },
			{ title: "Oh and senator just one more thing…love your suit." },
			{ title: "Good evening, Clarice! Just like old times." },
			{ title: "A census taker once tried to test me. I ate his liver with some fava beans and a nice chianti." },
			{ title: "Lambs. The lambs were screaming." },
			{ title: "I imagine your little brother must smell almost as bad as you do by now." },
			{ title: "This is from the Guinness Book of World Records, congratulating me on being the female FBI agent who has shot and killed the most people." },
			{ title: "I wasn't speaking to you, Mr. Krendler. When I speak to you, you'll know it because I'll look at you." },
			{ title: "People don't always tell you what they are thinking. They just see to it that you don't advance in life." },
			{ title: "Remarkable boy. I do admire your courage. I think I'll eat your heart." },
			{ title: "Have you seen blood in the moonlight? It appears quite black." },
			{ title: "Rudeness is an epidemic." },
			{ title: "Toughened your nipples, didn't it?" },
			{ title: "Well, Clarice - have the lambs stopped screaming?" },
			{ title: "That is very slippery of you, Agent Starling." },
			{ title: "Then we are both suspects. I could say you were fishing with me if you like." },
			{ title: "Okie dokie, let's drag these down. They must be as heavy as bodies." },
			{ title: "You still wake up sometimes, don't you? You wake up in the dark and hear the screaming of the lambs." }
		]});
	}
// End Content
  render(){
  	// JS
	$(document).ready(function(){

		var divs = $('#js-Quotes').children('li'), 
			len = divs.length,
			randomDiv,
			speed = 10000;

		function HideShowQuotes() {
			randomDiv = Math.floor(Math.random() * len);
			divs.fadeOut(1000);
			divs.eq(randomDiv).fadeIn(1000);
		}

		$(function() {
			HideShowQuotes();
		});
		
		setInterval(function() { HideShowQuotes(); }, speed);
	});

	// Use QuotesItem to make conent/list 
	let quotesItem;
	if(this.state.quotes){
		quotesItem = this.state.quotes.map(project =>{
			return(
				<QuotesItem key={project.title} project={project} />
			);
		});
	};

    return(
		<ul className="Quotes" id="js-Quotes">
			<li>Hey, big guy. Sun's getting real low</li>
			{quotesItem}
		</ul>
     );
  }
}

export default Quotes;