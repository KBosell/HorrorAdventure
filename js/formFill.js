function init(){	
	var GET = {};
	var Dotahvibrate = 0;

	document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
		function decode(s) {
			return decodeURIComponent(s.split("+").join(" "));
		}

		GET[decode(arguments[1])] = decode(arguments[2]);
	});
	
	if(GET['choice'] == "" || GET['choice'] == null ){
		page = 1;
	}
	else{
		var setPage = GET['choice'];
		page = parseInt(setPage);
	}
	Dotahvibrate = changePage(page);
	navigator.vibrate(1000);
	Dotahvibrate=0;
}

function changePage(loadPage){ 
	var Dovibrate = 0;
	switch(loadPage){
		case 0:
			document.getElementById("buttonA").innerHTML = "ERROR - CASE 0";
			document.getElementById("buttonB").innerHTML = "ERROR - CASE 0";
			document.getElementById("title").innerHTML = "ERROR - CASE 0";
			document.getElementById("story").innerHTML = "ERROR - CASE 0";
		break;

		case 1: //Start
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(css/background_image.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML =
				"";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"2\" checked> Start?";
			document.getElementById("title").innerHTML = 
				"<div class=\"StartImg\">Can You Survive..</div>";
			document.getElementById("story").innerHTML = 
				"<div class=\"StoryName\">A Childrens Game?</div>";
		break;
		
		case 2: //1-Story Start
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/Trees.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Purr.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"3\" checked> Go inside";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"4\"> Walk away";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"''Hey! Are you coming or what?'' Mario yelled at you. Turning around you looked at him and the rest of your friends. Mario a muscular man gave a cheeky grin at his ability to get everyone there. Spenser a glasses nerd but strong in every form of fighting stood there looking at the abandoned building. Kayla a redhead beauty stood with Amanda a black haired Otaku and Kelsey a blonde girl with a weird personality and black cat ears on her head. </br></br> ''What are we even doing here Mario?'' Amanda asked. </br></br> ''We are going to see if the legend is true. We are going to stay here until 10pm.'' Mario said walking to the old school. The windows were boarded over and the vines had grown up around the cracking bricks. Mario opened the door and it creaked with use. ''Lets go.'' </br></br></br><div id=\"DoYou\">Do you:</div>";
		break;
		
		case 3: //2-Go Inside
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/School_Hallway.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"5\" checked> Keep going forward";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"6\"> Turn around to leave";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"Taking a bit of time to think it over you nod your head and head towards the door. Walking inside everyone follows in behind you. Hearing the door slam shut the girls scream and Mario starts to laugh. </br></br>''That wasn't funny Mario!'' Amanda yelled punching his arm.</br></br>''Yeah Mario. This place is creepy enough as it is.'' Kayla said holding onto Spenser.</br></br>Kelsey walked ahead of everyone then yelled, ''HELLO!!! Are there any creepies?!''</br></br>The silence echoed around them and she turned smiling brightly, ''I guess we are alone.''</br></br>Everyone looks at each other and starts to walk into the school. The hallways are dark and the only lights are the flashlights that each person holds. Plants grow in the ground and some windows have had the boards taken off to reveal the outside. A beeping sounds off and Spenser looks at his watch and looks at everyone, ''Its officially 10pm.''</br></br>Mario grins, ''Lets see what this legend really is-'' He stops as the ground begins to shake. The girls scream and fall to the ground. Spenser and Mario hang onto the wall as do you. When the shaking stops everyone looks at each other.</br></br></br><div id=\"DoYou\">Do you:</div>";
		break;
		
		case 4: //2-Walk Away
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/Safe.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML = 
				"";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"2\" checked> Try Again?";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"''Screw that!'' You yell at Mario glaring at him. ''This is stupid. Lets just go do what we planned and get out of here.'' You turn around and start walking away.</br></br>The three girls look at each other then nod and start to follow you. Spenser shrugs a bit and follows after you and the girls. Mario glares a bit and scoffs. ''Whatever man. I was just trying to take us on an adventure but you have to be a wuss about it.'' He says slamming the door and catching up with everyone.</br></br></br><div id=\"Safe\">You Survive</div> ";
		break;
		
		case 5: //3-Keep Going Forward
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/School_Hallway.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"7\" checked> Let Mario eat it";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"8\"> Eat it yourself";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"Standing up you look at everyone, ''Everyone ok?'' You ask, seeing everyone nod you look down the hallway, ''That earthquake was weird...''</br></br>Kelsey stood up and perked her head around, ''The crickets stopped...'' She walked to the window, ''The sky is black... no stars at all...''</br></br>Spenser looks out the window and nods softly. ''She's right.'' He said. You look with the others then shrug a bit, ''Well... lets keep going then... We started this....'' You say as you walk down the hallway more.</br></br>You notice that there are no more crickets making noise and you strain to listen for any sort of noise. When you hear nothing you check behind you to make sure everyone is still behind you. Thats when you notice Mario rummaging though his backpack as he walks.</br></br>''What are you looking for Mario?'' Amanda asked.</br></br>''YES!'' Mario yells pulling out a small baggie from his backpack. ''Awww man! I thought I brought all of them. Theres only one left.'' Mario said showing everyone the mushroom in the bag.</br></br>''You brought shrooms here thinking we would take them?'' Kayla said rolling her eyes.</br></br>''Hell yeah. But there is only enough for one person. If no one wants it I'll eat it.'' Mario said holding out the bag.</br></br></br><div id=\"DoYou\">Do you:</div>";
		break;

		case 6: //3-Turn Around To Leave
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/School_Hallway.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"7\" checked> Let Mario eat it";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"8\"> Eat it yourself";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"Standing up you look at everyone, ''Everyone ok?'' You ask, seeing everyone nod you look down the hallway, ''That earthquake was weird...''</br></br>Kelsey stood up and perked her head around, ''The crickets stopped...'' She walked to the window, ''The sky is black... no stars at all....''</br></br>Spenser looks out the window and nods softly. ''She's right.'' He said. You look with the others then gulp a bit, ''Lets get out of here. That earthquake could bring this building down around us.'' You say turning back the way you came and walking towards the exit.</br></br>You notice that there are no more crickets making noise and you strain to listen for any sort of noise. You also notice that the hallway is a lot longer than it should be. You check behind you to make sure everyone is still behind you and noticing the long hallway. Thats when you notice Mario rummaging though his backpack as he walks.</br></br>''What are you looking for Mario?'' Amanda asked.</br></br>''YES!'' Mario yells pulling out a small baggie from his backpack. ''Awww man! I thought I brought all of them. Theres only one left.'' Mario said showing everyone the mushroom in the bag.</br></br>''You brought shrooms here thinking we would take them?'' Kayla said rolling her eyes.</br></br>''Hell yeah. But there is only enough for one person. If no one wants it I'll eat it.'' Mario said holding out the bag.</br></br></br><div id=\"DoYou\">Do you:</div>";
		break;

		case 7: //4-Let Mario Eat The Mushroom
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/School_Hallway.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML = 
				"";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"9\" checked> Continue";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"Everyone shook their head and even you shook your head. ''You eat it man. I don't do that shit anymore.'' You say arching your brow at him.</br></br>Mario grinned and pulled the mushroom from the bag, ''All the more for me.'' he said tossing it into his mouth and swallowing it greedily. ''Its not a strong mushroom so it will give me a light buz...'' He slowed his talking as his pupils dilated.</br></br>Kelsey waved her hand in front of Mario, ''Mario? You in there?''</br></br>Mario started to look around the room, ''Who is that? What do you want?!'' he covered his ears, ''Stop laughing at me! Leave me alone! Get away from me!'' he screamed as Kayla and Kelsey tried to calm him down. All of sudden Mario screamed and turned and ran away. He opened the first door he came to and vanished.</br></br>You run over to the door and stop in the door frame just in time to see that there was no floor. Mario had fallen down and landed on the tip of the tree, the top of the tree impaling Mario in the stomach. He gasped and gaged a bit before he went limp.</br></br>The girls started to scream seeing Mario and covered their eyes.</br></br>''We need to get out of here.'' You say moving back and shutting the door sadly.";
		break;

		case 8: //4-You Eat The Mushroom (Death)
			Dovibrate=2000;
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/Trip.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML = 
				"";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"5\" checked> Try Again?";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"You look at everyone then sigh, ''Yeah, sure I'll take it.'' You say as Mario dumps the mushroom into your hand. </br></br>''Its not a strong mushroom so it will give you just a light buzz in about 10 minutes.'' Mario said grinning at you.</br></br>You pop the mushroom into your mouth. The taste wasn't very good but you swallow it and shrug a bit. All of a sudden the lights in the hallway shift and you begin to hear children laughing and giggling. Some of them sing and some whisper in your ear. You begin to jerk around trying to find the source of the voices. All you see is the girls and then they melt away to small puddles on the ground screaming. </br></br>You grab your hair and yell shaking your head. Running away from the puddles you open the closest door to you and the ground leaves you as you run in. Thinking its just an illusion you throw your arms out trying to find the floor. The only thing you feel is a sharp pressure in your stomach and you feel the copper tinge of blood comes up your throat and out your mouth. Using the last of your strength you lift your head to see the doorway with everyone looking at you in shock and then the world goes black.</br></br></br><div id=\"TheEnd\">YOU DIED</div>";
		break;

		case 9: //5-Continue(After Mario)
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/School_Hallway.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML =
				"<input type=\"radio\" name=\"choice\" value=\"10\" checked> Keep Going";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"11\"> Look in Bathroom";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"You turn away from the door and look at everyone else.</br></br>Kayla was freaking, ''He said it was a weak mushroom! I've seen him take mushrooms before. What the hell is this?!'' She shrieked.</br></br>You hold up your hands, ''Hey....Lets calm down a bit...'' You stop as you start to hear faint giggling. Everyone goes silent as the giggling continues. ''What is that?'' You ask looking around.</br></br>''I don't know but we need to get out of here.'' Spenser says. Everyone nods and they start jogging down the hallway. The giggling got louder as they kept running but they tried to ignore it all. </br></br>All of a sudden there was a gasp and everyone stopped and looked around. Kelsey had vanished. </br></br>''Kelsey? Where are you?'' Amanda said looking around. ''Come out! This ins't funny!'' Hearing nothing but the giggles you realize that she was really gone. </br></br></br><div id=\"DoYou\">Do you:</div>";
		break;	

		case 10: //6-Keep Going
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/School_Hallway.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML =
				"<input type=\"radio\" name=\"choice\" value=\"12\" checked> Look Inside";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"13\"> Keep Going";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"Looking around the hall you sigh a bit, ''She's probably playing a joke.'' You say not even believing yourself.</br></br>Kayla and Amanda look at each other. ''I don't know... She may be a little crazy but she wouldn't do this..'' Kayla said and Amanda nodded a bit, ''I don't like this...''</br></br>Spenser looked around and sighed, ''She may have gone down the hallway.'' He said pointing down another hallway. ''Lets go search for her alright?''</br></br>You and the girls nod and start down the hallway. The giggling never stops and Kayla starts to hold onto your arm. Amanda clenches her fists and Spenser kept looking at his phone but his hand was shaking just a touch. You come to a large door with the sign that reads 'Cafeteria'. You look at everyone, ''Should we check in here?'' Kayla asks looking up at you.</br></br></br><div id=\"DoYou\">Do you:</div>";
		break;	

		case 11: //6-Look in Bathroom (Death)
			Dovibrate=2000;
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/Death2.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML =
				"";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"9\" checked> Try Again?";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"You look around the hall and say, ''Hey...lets just take a moment. There is a bathroom right there. Maybe she went inside?''</br></br>Kayla and Amanda look at each other and shiver. ''She would be the one to pee while we are scared for our lives.'' Kayla says as Amanda nods. ''Can you go see if she is in there?'' Amanda asks you. ''We're scared.''</br></br>You look at Spenser but he was watching the girls and searching around the hallway with his eyes. He wouldn't be any help. Sighing you nod and walk to the bathroom. Opening the door you check to make sure there is a floor then walk inside. The door slams behind you and you jump.</br></br>Chuckling at your jump you turn and look around inside. Not seeing Kelsey or anything you head for the door. Water appears on the ground and you slip and slam your head onto the sink. Blood fills the floor as your vision leaves you just as you see a child laughing at you.</br></br></br><div id=\"TheEnd\">YOU DIED</div>";
		break;

		case 12: //7-Look Inside
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/Cafeteria.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML =
				"<input type=\"radio\" name=\"choice\" value=\"14\" checked> Open it";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"15\"> Ignore it";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"Nodding you open the large doors and look around. The tables were rotting and breaking. Spenser walked past you looking around a bit, ''Kelsey? Are you in here?'' He calls. Hearing nothing you walk in after Spenser, Kayla still on your arm.</br></br>''Where could she have gone?'' You ask started to get frustrated. Kelsey had wandered off when you were all together before but she had never gone too far before. The fact she had wandered off in this place had made you upset and worried.</br></br>All of a sudden the screeching of wheels moved towards you. It was a service tray and on the top was a platter with a lid. The tray was old and rusted but the platter and lid were sparkling silver. </br></br>''Where... where did that come from?'' Amanda asked her voice shaking. Kayla was shaking as well clenching your arm so tight you thought she might cut off the blood supply.</br></br>''Should we open it?'' Spenser asked.</br></br></br><div id=\"DoYou\">Do you:</div>";
		break;

		case 13: //7-Keep Going
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/School_Hallway.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML =
				"<input type=\"radio\" name=\"choice\" value=\"14\" checked> Open it";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"15\"> Ignore it";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"Taking a deep breath you shake your head, ''No...lets keep looking.'' You say walking with Kayla on your arm down the hallway. ''Where could she have gone?'' You ask started to get frustrated. Kelsey had wandered off when you were all together before but she had never gone too far before. The fact she had wandered off in this place had made you upset and worried.</br></br>Still going down the hallway you all stop as you come up to the large doors labeled, 'Cafeteria' again. ''How is that possible? We were just here...'' Spenser said looking back the way you had come. ''Lets... just keep going...'' You say walking down the hallway again. When the same door appears again you look at everyone, ''I think we have to go in here...'' You say. When everyone nods you open the large doors and step inside. Looking around you try and see Kelsey's blonde hair but you couldn't see anything but darkness.</br></br>All of a sudden the screeching of wheels moved towards you. It was a service tray and on the top was a platter with a lid. The tray was old and rusted but the platter and lid were sparkling silver. </br></br>''Where... where did that come from?'' Amanda asked her voice shaking. Kayla was shaking as well clenching your arm so tight you thought she might cut off the blood supply.</br></br>''Should we open it?'' Spenser asked.</br></br></br><div id=\"DoYou\">Do you:</div>";
		break;

		case 14: //8-Open It
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/KDeath.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML =
				"<input type=\"radio\" name=\"choice\" value=\"16\" checked> Go upstairs";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"17\"> Go downstairs";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"Gulping down your fear you walk forward your hand outstretched to the platter. Your fingers clench around the handle and you lift the lid in one swift movement. The lid clatters to the ground as you see Kelsey's head on the platter. Her blonde hair had splatters of blood and her eyes started up at you unseeing. </br></br>Spenser heaved seeing Kelsey. Amanda started to cry and Kayla screamed. ''Kelsey! No! Who did this?!'' She screamed.</br></br>Backing away you watch as your three friends run from the room. Not thinking you run after the only one you can see. You chase after Kayla trying so hard to catch up to her. She went inside a closet and you hear a pop, a scream, and a crash. Fearing the worst you wrench open the door and shine your flashlight inside.</br></br>Kayla lay on the ground, there was lightbulb glass in her eyes and her head was resting on a rake. Blood flowed from behind her head and you fell to your knees. ''Why is this happening?'' You ask yourself. Knowing you had to find the others you pick up the mop next to Kayla and shut the door silently. You run down the hallway and come to some stairs. </br></br></br><div id=\"DoYou\">Do you:</div>";
		break;	

		case 15: //8-Ignore It
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/Stairs.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML =
				"<input type=\"radio\" name=\"choice\" value=\"16\" checked> Go upstairs";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"17\"> Go downstairs";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"You start to go for the platter but Amanda grabs your hand, ''No... Please... no...'' She said her voice shaking. Amanda started getting a bit freaked along with Spenser just staring at the platter. A few spots of blood started to come from underneath the lid.</br></br>Spenser backed up a bit, Amanda covered her mouth tearing up and Kayla seemed to snap. She screamed and ran. You watch as Spenser and Amanda run as well. Not thinking you run after the only one you can see. You chase after Kayla trying so hard to catch up to her. She goes inside a closet and you hear a pop, a scream, and a crash. Fearing the worst you wrench open the door and shine your flashlight inside.</br></br>Kayla lay on the ground, there was lightbulb glass in her eyes and her head was resting on a rake. Blood flowed from behind her head and you fell to your knees. ''Why is this happening?'' You ask yourself. Knowing you had to find the others you pick up the mop next to Kayla and shut the door silently. You run down the hallway and come to some stairs. </br></br></br><div id=\"DoYou\">Do you:</div>";
		break;	

		case 16: //9-Go Upstairs
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/Hallway2.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML =
				"<input type=\"radio\" name=\"choice\" value=\"18\" checked> Face it";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"19\"> Cower Away";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"Thinking that Spenser and Amanda had gone higher since the ground level hadn't done much good for them all you go upstairs. The hallway was a little different. The windows were not boarded and there seemed to be less doors. As you kept walking holding onto the mop you begin to remember that on the outside you hadn't seen a second floor of the building. Unless you had not noticed the upper floor before going inside this proved that the legend Mario had spoke of was true. </br></br>You shook your head angry that you had even gone along with this. If you had just turned around and not come inside maybe everyone would still be alive. But you couldn't spend all your time thinking of the past. The whispers and laughter around you was making you jerk at every corner. Finally you heard a different noise. It was like thunder. Like, something coming straight for you.</br></br></br><div id=\"DoYou\">Do you:</div>";
		break;

		case 17: //9-Go Downstairs (Death)
			Dovibrate=2000;
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/Death2.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML =
				"";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"15\" checked> Try Again?";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"Something inside of you said to go downstairs. You start to walk down and the giggles and laughs around you start growing louder. All of a sudden you feel hands on your back and they push you off the stairs. Your feet loose their ground and you fall. Each step hits you and then you hear a crack before your worlds goes black.</br></br></br><div id=\"TheEnd2\">YOU DIED</div>";
		break;

		case 18: //10-Face it
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/Hallway2.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML =
				"<input type=\"radio\" name=\"choice\" value=\"20\" checked> Go out Window";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"21\"> Stay in Hallway";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"Steeling yourself down you hold the mop in front of you ready to face whatever was running toward you. Your hands shook a bit in fear but you held the mop firm as you could. </br></br>Spenser ran into your vision a second too late as you lunged with the mop. You didn't realize it was him until you had already stabbed Spenser in the throat with the mop. He gasped and gurgled looking at you with shock and fear. You drop the mop gasping, ''Spenser, oh shit...Spenser, I'm sorry...I..I didn't know it was you...'' You say helping him to lay down, ''Oh no....'' You watch as the light fades from his eyes. Taking a few moments to mourn you finally stand up.</br></br>You start to walk down the hall the whispers starting to become voices. You being to realize they are children. A window comes into your vision and you see a makeshift rope going out of it. Looking from the window to the hallway you try to decide what to do.</br></br></br><div id=\"DoYou\">Do you:</div>";
		break;	

		case 19: //10-Cower Away
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/Hallway2.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML =
				"<input type=\"radio\" name=\"choice\" value=\"20\" checked> Go out Window";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"21\"> Stay in Hallway";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"Feeling more fear than bravery you fall to your knees holding the mop in front of you. Sticking up in the air the mop held stiff your hands. ''Go away...go away...'' The noise got louder and louder until you felt a pressure and the noise stopped. The pressure kept getting larger until you felt something wet hit your head. You look up and yell in shock seeing Spenser hunched over you with the mop handle in his neck.</br></br>He gasped and gurgled looking at you with shock and fear. You drop the mop gasping, ''Spenser, oh shit.. Spenser, I'm sorry..I...I was just trying to hide....'' You say helping him to lay down, ''Oh no...'' You watch as the light fades from his eyes. Taking a few moments to mourn you finally stand up.</br></br>You start to walk down the hall the whispers starting to become voices. You being to realize they are children. A window comes into your vision and you see a makeshift rope going out of it. Looking from the window to the hallway you try to decide what to do.</br></br></br><div id=\"DoYou\">Do you:</div>";
		break;	

		case 20: //11-Go out Window(Death)
			Dovibrate=2000;
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/WoodChipper.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML =
				"";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"19\" checked> Try Again?";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"Thinking it was your only way out you went to the window and climbed out. Going down the rope you touched ground and felt a surge of hope. You were out. You were free. You started to run through the woods trying to find the car. You didn't have the keys, Mario did, but you could alway hot wire it if you had to. </br></br>As you were thinking of this you heard a scream. Thinking it was Amanda you jerked a bit and tripped on a tree branch and fell into something hard and metal. Confused you tried to move out of it and felt blades at the bottom of you. Realization hit you as you smelled wood pine. You had fallen into a wood chipper. </br></br>Adrenaline pumped through you as you struggled to get out but as your hand caught the top lip the wood chipper turned on. The blades screamed and spun catching your shoes. Screaming you felt each part of your body be ripped to shreds. When it got to your chest you finally lost consciousness.</br></br></br><div id=\"TheEnd\">YOU DIED</div>";
		break;	

		case 21: //11-Stay in Hallway
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/Hallway2.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML =
				"<input type=\"radio\" name=\"choice\" value=\"22\" checked> Yell";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"23\"> Ignore";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"You looked out the window and you were very tempted. But you had to find Amanda. You had to see if you could save at least one of your friends. The children began to whisper louder. You could understand them, ''You won't survive this night....'' ''No one ever does...'' </br></br>One little girl comes into view. Half of her face was smashed and she grinned, ''Teacher is going to kill you. Like she killed your friends.''</br></br>A boy came, his legs gone but still standing. ''No one ever escapes Teacher. She loves us and she will love you.'' He held out his arms, ''Come with us. Come on!''</br></br>You watch them as more children appear out of the shadows. Clenching your hands you close your eyes trying to think of what to do.</br></br></br><div id=\"DoYou\">Do you:</div>";
		break;	

		case 22: //12-Yell
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/Hallway2.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML =
				"<input type=\"radio\" name=\"choice\" value=\"24\" checked> Try to Attack";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"25\"> Run Away";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"''Leave me the hell alone!'' You scream throwing your arms around at them. ''We didn't do anything to you and you are killing us off!'' </br></br>The smiling faces on the children vanish as they glare at you, ''You aren't a nice person.'' ''We don't like you! We don't like you!'' They all scream making you grab your ears in pain.</br></br>''We wan't new play things but you are mean!'' One screams. ''Teacher doesn't want you!'' Another yells. They push you down screaming and laughing in your ears.</br></br></br><div id=\"DoYou\">Do you:</div>";
		break;	

		case 23: //12-Ignore
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/Hallway2.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML =
				"<input type=\"radio\" name=\"choice\" value=\"22\" checked> Confront them";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"25\"> Run Away";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"You ignore them and try to walk past but they step into your way. ''Don't you wanna know about Teacher?'' A girl asks. Not hearing a response from you they continue anyway. ''Teacher was with us when we were alive. Teacher loved us. She was nice. She taught us so many things.'' One says.</br></br>''Teacher couldn't have kids. That made Teacher sad at times. She looked at us like we were her kids.'' A boy said.</br></br>''One day an earthquake happened and Teacher tried to protect us and locked the door so we wouldn't go into any danger zones.'' Said a girl.</br></br>''But the roof came down on us and we all died. Teacher was so sad. She kept out spirits here so we could always be together.'' Two girls say at the same time.</br></br>''Anytime someone stays we send an earthquake to test them. If they survive Teacher has us play with them until they join us on this side.''</br></br>''Come and join us.'' They start chanting.</br></br></br><div id=\"DoYou\">Do you:</div>";
		break;	

		case 24: //13-Try to Attack(Death)
			Dovibrate=2000;
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/Death2.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML =
				"";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"22\" checked> Try Again?";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"Throwing yourself up you lunge to attack them. Falling through the children they laugh and cackle. ''You can't hurt us.'' They yell and begin to push you back and forworth . They yell, cackle, giggle and screech. Finally they push you into the wall and you stop unable to move. Water spread on your chest. Looking down you realize its your blood and not water. They had pushed you on the coat hooks and you cough up blood. As the world goes black you see a woman smiling at you and moving into to give you a hug. But the world leaves you before she reaches you.</br></br></br><div id=\"TheEnd\">YOU DIED</div>";
		break;	

		case 25: //13-Run Away
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/Hallway2.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML =
				"<input type=\"radio\" name=\"choice\" value=\"26\" checked> Save yourself?";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"27\"> Stay with Amanda";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"Pushing yourself up and away you run down the hall. You don't know where you are going but you know that you have to get away from here. All of a sudden you collide with Amanda and you both fall over. ''Amanda? Oh thank god!'' You say helping her up and she hugs you, ''I thought I was the only one left.''</br></br>Amanda starts to say something but screams seeing the children and a woman standing behind them. ''Child...'' The woman says to you, ''You are so brave and you have lasted this long in the children's game. I offer you a choice. Stay here with your friend and us, or escape and leave.'' She says.</br></br>''Why do I have to choose? Why doesn't Amanda have the same options.'' You ask holding Amanda's arm.</br></br>''Because... the children like to play with you.. this is their final game.'' The woman said and a void opened up next to her. ''Make your choice.''</br></br></br><div id=\"DoYou\">Do you:</div>";
		break;	

		case 26: //14-End-Save Yourself
			Dovibrate=2000;
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/Death.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML =
				"";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"1\" checked> Again?";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"You look at the door and at Amanda, ''I.. I...'' You let go of Amanda, ''I'm sorry... but..I want to live..'' You say and Amanda looks at you in horror. </br></br>Amanda slaps you and runs away. In her haste she hits the railing of the stairs and falls over. Her scarf catches around the railing. Instead of falling she hangs flailing around wildly until her hands fall to her side and she stops moving. </br></br>Looking away from the scene you steel yourself down and walk into the void not looking back. Blackness envelops you and you don't know what is up or down. You are about to go mad when suddenly the night stars are above you. You are outside, by the road.</br></br>Joy wells inside you as you see the car across the street. You survived. You made it. Its over. Taking a deep breath letting yourself relax you walk into the street.</br></br>Its then that a truck strikes you, throwing you into the air and crashing onto the pavement. Gasping in pain your eyes see the woman in the tree line, ''Did you really think we would let you go?'' She asks still smiling.</br></br></br>The game is over.</br></br></br><div id=\"TheEnd\">END</div>";
		break;	

		case 27: //14-End-Stay with Amanda
			Dovibrate=2000;
			document.getElementsByTagName("body")[0].style.backgroundImage = 'url(images/Backgrounds/Death.png)';
			// document.getElementById("Sound").innerHTML =
			// 	"<source src=\"_audio/Water.mp3\" type=\"audio/mpeg\">";
			document.getElementById("buttonA").innerHTML =
				"";
			document.getElementById("buttonB").innerHTML = 
				"<input type=\"radio\" name=\"choice\" value=\"1\" checked> Again?";
			document.getElementById("title").innerHTML = 
				"";
			document.getElementById("story").innerHTML = 
				"You look at the door and at Amanda, ''I can't leave without her.'' You say. ''I'm staying with my friends.'' Amanda smiles softly as the children start to giggle and laugh.</br></br>''Oh, good choice.'' The woman says the void closing. ''Have fun children.'' And with that she vanishes. </br></br>Amanda screams as she is pushed back away from you. You try and grab her hand to pull her back but the children laugh and thrust their hands into your chest. You cough up blood as you feel their little fingers wiggle around in your chest and touch your heart.</br></br>The children push Amanda off the middle railing of the stairs. She flips over the railing and her scarf catches around. Instead of falling she hangs flailing around wildly until her hands fall to her side and she stops moving. </br></br>Tears in your eyes and tiny child hands in your chest you close your eyes finally giving up.</br></br></br>The game is over.</br></br></br><div id=\"TheEnd\">END</div>";
		break;	
	

		//case 28: //
		//	document.getElementById("buttonA").innerHTML =
		//		"<input type=\"radio\" name=\"choice\" value=\"#\" checked> Words";
		//	document.getElementById("buttonB").innerHTML = 
		//		"<input type=\"radio\" name=\"choice\" value=\"#\"> Words";
		//	document.getElementById("title").innerHTML = 
		//		"";
		//	document.getElementById("story").innerHTML = 
		//		"";
		//break;	
//
		//case 29: //
		//	document.getElementById("buttonA").innerHTML =
		//		"<input type=\"radio\" name=\"choice\" value=\"#\" checked> Words";
		//	document.getElementById("buttonB").innerHTML = 
		//		"<input type=\"radio\" name=\"choice\" value=\"#\"> Words";
		//	document.getElementById("title").innerHTML = 
		//		"";
		//	document.getElementById("story").innerHTML = 
		//		"";
		//break;	
//
		//case 30: //
		//	document.getElementById("buttonA").innerHTML =
		//		"<input type=\"radio\" name=\"choice\" value=\"#\" checked> Words";
		//	document.getElementById("buttonB").innerHTML = 
		//		"<input type=\"radio\" name=\"choice\" value=\"#\"> Words";
		//	document.getElementById("title").innerHTML = 
		//		"";
		//	document.getElementById("story").innerHTML = 
		//		"";
		//break;	

		
		
		default:
			document.getElementById("buttonA").innerHTML = "ERROR - CASE default";
			document.getElementById("buttonB").innerHTML = "ERROR - CASE default";
			document.getElementById("title").innerHTML = "ERROR - CASE default";
			document.getElementById("story").innerHTML = "ERROR - CASE default";
		break;
	}
	return Dovibrate;
}
