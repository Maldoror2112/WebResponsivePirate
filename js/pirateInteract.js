// JavaScript Document
window.onload = initLinks;

function initLinks(){

	
$(function(){
	
	$("#lepidoptera").on('click', function(){
		
	$('#titleArticle1').text('Lepidoptera the Novel on Amazon now!');
	
	$('#a1InsideText').html("<div ><a href='http://www.amazon.com/Lepidoptera-Doug-Hauger/dp/1606938959/ref=sr_1_5?s=books&ie=UTF8&qid=1392338573&sr=1-5&keywords=lepidoptera' target='_blank'><img src='images/pic2.jpg' id='ledidoptera_pic' style='display:inline-block'/ ></a><p id='article1Lepidoptera'>Lepidoptera is my first book that was completed in the winter of 2003. I spent eight years writing it and I still consider it one of my greatest accomplishments. It can be found on Amazon currently and is published by Eloquent books. I hope to have an e-book version up and running soon, or having a free download that anyone can print up if they want. I have a sequel in progress, but very little time to work on it at present. </p></div>");
	
	$('#authorArticle1').text("written by Doug Hauger");
		
	//var articleText1="<div ><img src='images/pic2.jpg' id='ledidoptera_pic' style='display:inline-block'/> <p id='article1Lepidoptera'>Lepidoptera is my first book that was completed in the winter of 2003. I spent eight years writing it and I still consider it one of my greatest accomplishments.It can be found on Amazon currently and is published by Eloquent books. I hope to have an e-book version up and running soon, or having a free download that anyone can print up if they want. I have a sequel in progress, but since this one took me 8 years to complete, who knows how long that one will take. </p></div>";
//	
	$('#titleArticle2').text("There is more than Flesh and Bone");

	$("#a2InsideText").html("<div> </br></br><strong> There is chaos and order...war and peace...love and hate...life and death...and a Realm that exists between it all. A Realm called the Void. A place of honor, loyalty, duty, and redemption. A world where an immortal race called the Procuri is sworn to uphold the laws where the 'Realm of Four' exist. </br></br> And two of its most esteemed Guardians are Maya and Hieronymous. Through conflicts with the Polymorph Maldoror, a member of the Children of Non, and the siren like Abdiel, one of the ethereal beings known as the Maginites, they have been to heaven...and hell...and survived both. But in the end they are torn apart by that which could ultimately save them.</br></br> Their journey takes them beyond the human condition of the battlefeilds of Rome, the fall of Christ, a Chinese famine and the ship warfare ofthe Napoleonic wars. It shows them the gift of life and the significance of death. It reminds about what is forgotten and what is remembered. It is about the inevitability of change...and it all begins with a choice...</br></br> That is the LEPIDOPTERA. </br></br> </strong></div>"); 

  });
});

	$("#unity").click(function(){
		
		$('#titleArticle1').text('Whats So Great About Unity?');
	
	$('#a1InsideText').html("<div > <p id='unity'>Unity is a cross-platform game engine with a built-in IDE developed by Unity Technologies. It is used to develop video games for web plugins, desktop platforms, consoles and mobile devices. It grew from an OS X supported game development tool in 2005 to a multi-platform game engine. The latest update, Unity 4.2.2, was released October 2013. </p></div>");
	
	$('#authorArticle1').text("");
	
	$('#titleArticle2').text("The Specs and other Wonders of the Gaming Seas!");
	
	$('#a2InsideText').html("<div><strong> Unity currently supports development for iOS, Android, Windows, BlackBerry 10, OS X, Linux, web browsers, Flash, PlayStation 3, Xbox 360, Windows Phone 8, and Wii U. Two versions of the game engine are available for download, Unity and Unity Pro.   </br> </br>  <strong>Renderer:</strong></br>The graphics engine uses Direct3D (Windows, Xbox 360), OpenGL (Mac, Windows, Linux, PS3), OpenGL ES (Android, iOS), and proprietary APIs (Wii). There is support for bump mapping, reflection mapping, parallax mapping, screen space ambient occlusion (SSAO), dynamic shadows using shadow maps, render-to-texture and full-screen post-processing effects. Unity supports art assets and file formats from 3ds Max, Maya, Softimage, Blender, modo, ZBrush, Cinema 4D, Cheetah3D, Adobe Photoshop, Adobe Fireworks and Allegorithmic Substance. </br> These assets can be added to the game project, and managed through Unity's graphical user interface. The ShaderLab language is used for shaders, supporting both declarative 'programming' of the fixed-function pipeline and shader programs written in GLSL or Cg. A shader can include multiple variants and a declarative fallback specification, allowing Unity to detect the best variant for the current video card, and if none are compatible, fall back to an alternative shader that may sacrifice features for performance. </br> </br>As of August 3rd, 2013, with the release of 4.2, Unity allows Indie developers to use Realtime shadows only for Directional lights, also the support of DirectX11 is added, which gives shadows a more pixel perfect resolution, textures to create 3d objects from grayscale, more facial graphics, smoother animations and a boost to the FPS.</br> </br><strong>Scripting:</strong></br> The game engine's scripting is built on Mono 2.6, the open-source implementation of the .NET Framework. Programmers can use UnityScript (a custom language with ECMAScript-inspired syntax, referred to as JavaScript by the software), C#, or Boo (which has a Python-inspired syntax). Starting with the 3.0 release, Unity ships with a customized version of MonoDevelop for debugging scripts.</br><strong>Asset Tracking:</strong></br> Unity also includes the Unity Asset Server - a version control solution for the developer's game assets and scripts. It uses PostgreSQL as a backend, an audio system built on the FMOD library (with ability to playback Ogg Vorbis compressed audio), video playback using the Theora codec, a terrain and vegetation engine (which supports tree billboarding, Occlusion Culling with Umbra), built-in lightmapping and global illumination with Beast, multiplayer networking using RakNet, and built-in pathfinding navigation meshes.</strong></div>");

});
	
$("#flashDead").click(function(){
	
	$('#titleArticle1').text('How Dead is Flash?');
	
	$('#a1InsideText').html("Lots of good articles about the lessons and evolution of this scenario. One of the best I have seen is <a href='http://mobileopportunity.blogspot.com/2011/11/lessons-from-failure-of-flash-greed.html' target='blank'>Micheal Mace's</a> assessment of the whole deal. Below is a portion of the article. Click on his name to read the full version.");
	
	$('#authorArticle1').text("written by Micheal Mace");
	
	$('#titleArticle2').text("A quick, oversimplified history of Flash");
	
	$('#a2InsideText').html("<div> <strong>In the software world, there is an inherent conflict between setting a broad standard and making money.  If you have good software technology and you're willing to give it away, you can get people to adopt it very broadly, but you will go broke in the process.  On the other hand, if you charge money for your technology, you can stay in business, but it's very hard to get it broadly adopted as a standard because people don't want to lock themselves into paying you.<br/><br/>Clever software companies have long realized that you can work around this conflict by giving away one technology to make it a standard, and then charging for something else related to it.  For example, many open source software companies give away their core product, but charge for hosting and support and other services.  Android is another example -- it's a free operating system for mobile phone manufacturers, but if you use it in your phone Google also tries to coerce you into bundling its services, which extract revenue from your customers.<br/><br/>In the case of Flash, the player software was given away for free on the web, and Macromedia (the owner of Flash at the time) made its money by selling Flash content development tools.  The free Flash player eventually took on two roles on the web: it was the preferred way to create artistically-sophisticated web content, including an active subculture of online gaming, and it became one of the most popular ways to play video.  Flash reached a point of critical mass where most people felt they just had to have the player installed in their browser.  It became a de facto standard on the web.<br/><br/>Enter Japan Inc., carrying cash.  The rise of mobile devices changed the situation for Flash.  Long before today's smartphones, with their sophisticated web browsers, Japan was the center of mobile phone innovation, and the dominant player there was NTT DoCoMo, with its proprietary iMode phone platform.  The folks at DoCoMo wanted to create more compelling multimedia experiences for their iMode phones, and so in early 2003 they licensed Macromedia's Flash Lite, the mobile version of Flash, for inclusion in iMode phones (link).<br/><br/>The deal was a breakthrough for Macromedia.  Instead of giving away the flash client, the way it had on the PC, Macromedia could charge for the client, have it forced into the hands of every user, and continue to also make money selling development tools.  The company had found a way to have its cake and eat it too!  In late 2004, the iMode deal was extended worldwide (link), and I'm sure Macromedia had visions of global domination.<br/><br/>Unfortunately for Flash, Japan is a unique phone market, and DoCoMo is a unique operator.  The DoCoMo deal could not be duplicated on most phone platforms other than iMode.  Macromedia, and later Adobe, was now trapped by its own success.  To make Flash Lite a standard in mobile, it would have needed to give away the player, undercutting its lucrative DoCoMo deal.  When you have a whole business unit focused on making money from licensing the player, giving it away would mean missing revenue projections and laying off a lot of people.  Macromedia chose the revenue, and Flash Lite never became a mobile standard.<br/><br/>Without fully realizing it, Macromedia had undermined the business model for Flash itself. The more popular mobile became, the weaker Flash would be.<br/><br/>Enter the modern smartphone.  Jump forward to 2007, when the iPhone and other modern smartphones made full mobile web browsing practical.  Adobe, by now the owner of Flash, was completely unprepared to respond.  Even if it started giving away Flash Lite, the player had been designed for limited-function feature phones and could not duplicate the full PC Flash experience.  Meanwhile, the full Flash player had been designed for PCs; it was too fat to run well on a smartphone.  So the full web had moved to a place where Adobe could not follow.  The ubiquity of the Flash standard was broken by Adobe itself.<br/><br/>To make things worse, Adobe was by then in the midst of a strategy to upgrade Flash into a full programming layer for mobile devices, a project called Apollo (later renamed AIR).  The promise of AIR was to make all operating systems irrelevant by separating them from their applications.  At the time, I thought Adobe's strategy was very clever (link), but the implementation turned out to be woefully slow.<br/><br/>So here's what Adobe did to itself:<br/><br/>By mismanaging the move to full mobile browsing, it demonstrated that customers were willing to live with a mobile browser that could not display Flash.  Then, by declaring its intent to take over the mobile platform world, Adobe alarmed the other platform companies, especially Apple.  This gave them both the opportunity and the incentive to crush mobile Flash.<br/><br/>Which is exactly what they did.<br/><br/></strong></div>");
	
});	

$("#tutorialReference").click(function(){
	
	$('#titleArticle1').text('Awesome Tutorial Reference');
	
	$('#a1InsideText').html("Under Construction! I hope to compile a pretty exhaustive list of tutorials ranging from 2D Illustrator/Photoshop, 3D, to coding in Javascript/Jquery. There is definitely lots of good stuff out there!");
	
	$('#authorArticle1').text("");
	
	$('#a2InsideText').html("<div>Brooklyn salvia voluptate food truck, Vice sunt vegan wolf. Keytar freegan squid, Blue Bottle gluten-free mustache VHS Intelligentsia nisi. Shabby chic Wes Anderson do, Tonx XOXO et forage. Bitters blog farm-to-table officia kale chips duis. Nesciunt banjo locavore Banksy nisi. Next level ugh eu, post-ironic beard chia artisan yr fanny pack messenger bag kitsch wolf proident magna aliquip. Eiusmod bicycle rights aesthetic trust fund forage hoodie, quinoa consequat.</br></br> Laboris sed do, Carles ea literally swag seitan locavore. Labore ethnic sapiente ea. Tofu nisi vegan, brunch swag enim Godard shabby chic fixie pickled aesthetic skateboard bitters et ennui. Adipisicing Wes Anderson messenger bag, selfies lomo placeat semiotics readymade. Officia flannel Schlitz, aliquip literally Austin 3 wolf moon farm-to-table Vice Brooklyn. Shabby chic readymade letterpress sunt tattooed velit. Cliche ethnic pickled Williamsburg, art party biodiesel Thundercats nulla.</br></br> Culpa tempor slow-carb, typewriter next level gentrify Odd Future et XOXO cliche sriracha sint cornhole sunt. Kale chips nesciunt plaid, sed gentrify asymmetrical aute dolor food truck scenester sustainable craft beer put a bird on it ea mixtape. Cupidatat actually typewriter meh artisan. Banksy cornhole cardigan deep v food truck, proident PBR&B iPhone tofu elit put a bird on it delectus Odd Future. Yr Odd Future ethical 3 wolf moon, id fixie scenester labore et mollit Intelligentsia odio craft beer gentrify. Brunch kogi chillwave, try-hard ethical plaid master cleanse ugh cupidatat farm-to-table officia messenger bag elit Banksy church-key. Cornhole dolor Pitchfork culpa, drinking vinegar cray PBR irure flexitarian farm-to-table.<div/>");
	
	
})

//	function makeTutorialReference(){
//	var articleText1= "This is where I rant about all the cool tutorial sites I have found. Occupy Pinterest culpa, reprehenderit fugiat Tumblr Banksy cillum. Beard Williamsburg before they sold out consectetur, banh mi try-hard ullamco put a bird on it church-key elit. Street art locavore Williamsburg Vice quis.";
//	
//	var articleText2 = "Brooklyn salvia voluptate food truck, Vice sunt vegan wolf. Keytar freegan squid, Blue Bottle gluten-free mustache VHS Intelligentsia nisi. Shabby chic Wes Anderson do, Tonx XOXO et forage. Bitters blog farm-to-table officia kale chips duis. Nesciunt banjo locavore Banksy nisi. Next level ugh eu, post-ironic beard chia artisan yr fanny pack messenger bag kitsch wolf proident magna aliquip. Eiusmod bicycle rights aesthetic trust fund forage hoodie, quinoa consequat.</br></br> Laboris sed do, Carles ea literally swag seitan locavore. Labore ethnic sapiente ea. Tofu nisi vegan, brunch swag enim Godard shabby chic fixie pickled aesthetic skateboard bitters et ennui. Adipisicing Wes Anderson messenger bag, selfies lomo placeat semiotics readymade. Officia flannel Schlitz, aliquip literally Austin 3 wolf moon farm-to-table Vice Brooklyn. Shabby chic readymade letterpress sunt tattooed velit. Cliche ethnic pickled Williamsburg, art party biodiesel Thundercats nulla.</br></br> Culpa tempor slow-carb, typewriter next level gentrify Odd Future et XOXO cliche sriracha sint cornhole sunt. Kale chips nesciunt plaid, sed gentrify asymmetrical aute dolor food truck scenester sustainable craft beer put a bird on it ea mixtape. Cupidatat actually typewriter meh artisan. Banksy cornhole cardigan deep v food truck, proident PBR&B iPhone tofu elit put a bird on it delectus Odd Future. Yr Odd Future ethical 3 wolf moon, id fixie scenester labore et mollit Intelligentsia odio craft beer gentrify. Brunch kogi chillwave, try-hard ethical plaid master cleanse ugh cupidatat farm-to-table officia messenger bag elit Banksy church-key. Cornhole dolor Pitchfork culpa, drinking vinegar cray PBR irure flexitarian farm-to-table.";
//	
//	var title1 = "Awesome Tutorial Reference";
//	var title2 = "";
//	var authorName1 = "";
//			
//	var articleElement1 = document.getElementById("a1InsideText");
//	articleElement1.innerHTML = articleText1;
//	var title = document.getElementById("titleArticle1");
//	title.innerHTML = title1;
//	var author1 = document.getElementById("authorArticle1");
//	author1.innerHTML = authorName1;
//	var articleElement2 = document.getElementById("a2InsideText");
//	articleElement2.innerHTML = articleText2;
//	var titleWrite2 = document.getElementById("titleArticle2");
//	titleWrite2.innerHTML = title2;	
//}
	
}

