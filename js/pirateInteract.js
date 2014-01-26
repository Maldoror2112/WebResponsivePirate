// JavaScript Document
window.onload= initLinks;

function initLinks(){

	
		var lepidopteraButton = document.getElementById("lepidoptera");
	lepidopteraButton.onclick = makeLepidoptera;
	
	var unityButton = document.getElementById("unity");
	unityButton.onclick = makeUnity;
	
	var flashDeadButton = document.getElementById("flashDead?");
	flashDeadButton.onclick = makeFlashDead;
	
	var tabletsVsConsoleButton = document.getElementById("tabletsVsConsole");
	tabletsVsConsoleButton.onclick = makeTabletsVsConsole;
	
	var tutorialReferenceButton = document.getElementById("tutorialReference");
	tutorialReferenceButton.onclick = makeTutorialReference;


	function makeLepidoptera(){
	//var pic1 = document.createElement("img");
	//pic1.setAttribute("src", "images/LepidopteraBook.jpg");
		
	var articleText1="<div>Lepidoptera is my first book that was completed in the winter of 2003. I spent eight years writing it and I still consider it one of my greatest accomplishments. </div>";
	
	var articleText2 = "<div>It can be found on Amazon currently and is published by Eloquent books. I hope to have an e-book version up and running soon, or having a free download that anyone can print up if they want. I have a sequel in progress, but since this one took me 8 years to complete, who knows how long that one will take.</br></br><strong> Lepidoptera, by Douglas Hauger, is an epic and surreal masterpiece that spans 2,000 years of human history. What is good and evil but the choices that we make? Beside an immortal purgatory, the delicate equilibrium that is war, peace, love, hate, life and death is overseen by an entire dimension called the Lepidoptera. </br></br> A dimension where Hieronymous and Maya exist. Hieronymous was once a centurion in the Roman Armies of Caesar. Fighting bloody battles with barbarian hordes was his mission to protect his beloved Rome. But Hieronymous meets his fate when he dies in battle against the Celts and crosses over to the Void (purgatory), where he’ll face his biggest battle of all.</br></br> Maya, his guide and maker, teaches him about why they are in this seemingly empty existence; she also holds a secret that can destroy everything she has ever known or cherished. Can Hieronymous resolve his past sins? Can he escape the fate that damned him to the Void? Hieronymous will face the most horrific battle of his life/afterlife—overcoming his own self-doubts and facing the horrors that could ultimately condemn him to hell.</br></br> Hauger takes the reader on a historical and surreal journey—from the Roman battlegrounds of 54 BC, to the crucifixion of Christ, 16th century China and numerous historical events in the 20th century. </br></br> Brilliantly written and seen through the eyes of those existing in purgatory, Lepidoptera is a spellbinding narration that explores how our choices can make the difference between heaven or hell.</strong></div>";
	
	var title1 = "Lepidoptera the Novel on Amazon now!";
	var title2 = "";
	var authorName1 = "";
	document.pic1.src="images/pic2.jpg";
	//document.getElementById("image1").appendChild(pic1); 
	var articleElement1 = document.getElementById("a1InsideText");
	articleElement1.innerHTML = articleText1;
	var title = document.getElementById("titleArticle1");
	title.innerHTML = title1;
	var author1 = document.getElementById("authorArticle1");
	author1.innerHTML = authorName1;
	var articleElement2 = document.getElementById("a2InsideText");
	articleElement2.innerHTML = articleText2;
	var titleWrite2 = document.getElementById("titleArticle2");
	titleWrite2.innerHTML = title2;
	}

	function makeUnity(){
	var articleText1 = "Unity is a cross-platform game engine with a built-in IDE developed by Unity Technologies. It is used to develop video games for web plugins, desktop platforms, consoles and mobile devices. It grew from an OS X supported game development tool in 2005 to a multi-platform game engine. The latest update, Unity 4.2.2, was released October 2013.";
	
	var articleText2 = "<div><strong>It currently supports development for iOS, Android, Windows, BlackBerry 10, OS X, Linux, web browsers, Flash, PlayStation 3, Xbox 360, Windows Phone 8, and Wii U. Two versions of the game engine are available for download, Unity and Unity Pro.   </br> </br>  <strong>Renderer:</strong></br>The graphics engine uses Direct3D (Windows, Xbox 360), OpenGL (Mac, Windows, Linux, PS3), OpenGL ES (Android, iOS), and proprietary APIs (Wii). There is support for bump mapping, reflection mapping, parallax mapping, screen space ambient occlusion (SSAO), dynamic shadows using shadow maps, render-to-texture and full-screen post-processing effects. Unity supports art assets and file formats from 3ds Max, Maya, Softimage, Blender, modo, ZBrush, Cinema 4D, Cheetah3D, Adobe Photoshop, Adobe Fireworks and Allegorithmic Substance.</br> These assets can be added to the game project, and managed through Unity's graphical user interface. The ShaderLab language is used for shaders, supporting both declarative 'programming' of the fixed-function pipeline and shader programs written in GLSL or Cg. A shader can include multiple variants and a declarative fallback specification, allowing Unity to detect the best variant for the current video card, and if none are compatible, fall back to an alternative shader that may sacrifice features for performance. </br> </br>As of August 3rd, 2013, with the release of 4.2, Unity allows Indie developers to use Realtime shadows only for Directional lights, also the support of DirectX11 is added, which gives shadows a more pixel perfect resolution, textures to create 3d objects from grayscale, more facial graphics, smoother animations and a boost to the FPS.</br> </br><strong>Scripting:</strong></br> The game engine's scripting is built on Mono 2.6, the open-source implementation of the .NET Framework. Programmers can use UnityScript (a custom language with ECMAScript-inspired syntax, referred to as JavaScript by the software), C#, or Boo (which has a Python-inspired syntax). Starting with the 3.0 release, Unity ships with a customized version of MonoDevelop for debugging scripts.</br><strong>Asset Tracking:</strong></br> Unity also includes the Unity Asset Server - a version control solution for the developer's game assets and scripts. It uses PostgreSQL as a backend, an audio system built on the FMOD library (with ability to playback Ogg Vorbis compressed audio), video playback using the Theora codec, a terrain and vegetation engine (which supports tree billboarding, Occlusion Culling with Umbra), built-in lightmapping and global illumination with Beast, multiplayer networking using RakNet, and built-in pathfinding navigation meshes.</strong></div>";
	
	var title1 = "Whats so amazing about Unity anyway?";
	var title2 = "";
	var authorName1 = "";
	document.pic1.src="images/default.png";
		
	var articleElement1 = document.getElementById("a1InsideText");
	articleElement1.innerHTML = articleText1;
	var title = document.getElementById("titleArticle1");
	title.innerHTML = title1;
	var author1 = document.getElementById("authorArticle1");
	author1.innerHTML = authorName1;
	var articleElement2 = document.getElementById("a2InsideText");
	articleElement2.innerHTML = articleText2;
	var titleWrite2 = document.getElementById("titleArticle2");
	titleWrite2.innerHTML = title2;
	}

	function makeFlashDead(){
	var articleText1 = "Although Microsoft has been proselytising the 'plugin-free Web' for the last couple of years, it doesn't think Flash is dead yet, either.</br></br> ";
	
	var articleText2 = "<div> <strong>  That's why Internet Explorer 10 on Windows RT ended up including Flash built into the browser (and updated along with the rest of Windows, to avoid the security problems as hackers turn their attention away from the better-secured Windows operating system and onto common applications like Flash and Acrobat).    </br> </br>    Initially, Flash was locked down on Windows RT and in the 'modern' version of IE 10 even on Windows 8, so that it would only run if sites were on a Microsoft approved whitelist. </br> </br>Microsoft is also pushing the touchable web, so sites that use Flash behaviours that need a mouse hovering in the right place to trigger them were blocked. </br> </br> Blocking Flash was a way to protect battery life, but recent improvements to the Flash player - like Stage3D hardware acceleration (along with better coding on many websites using Flash) - led to Microsoft switching from a whitelist to a blacklist. And the blacklist has a mere handful of sites on it as well. </br> </br> Why is there still a blacklist at all? A Microsoft spokesperson told us: 'Inclusion on the Compatibility View list occurs when we have reports from users or when we find through our own testing that an experience is severely degraded or non-functional' </br> </br> When the experience is fixed, the site owner can contact Microsoft for removal from the Compatibility View list. </br> </br> I also wondered why the blacklist blocks Flash on sites that need other ActiveX plug-ins (which don't work on Windows RT); would that just make an already bad experience just a little bit worse for the user? </br> </br> The problem is that on those sites, Flash only works if, say, Java, is also available - so even if Flash was turned on, it wouldn't work. The browser can't detect on its own that Flash needs Java, so it would load Flash even though it wouldn't work. </br> </br> Realistically, Flash isn't going away for a while. Yes, there are other Web video options, although continuing disagreements mean HTML5 video is still split between WebM and the popular H.264. </br> </br> And the recent bitter philosophical arguments within the W3C about adding Encrypted Media Extensions to HTML5 for playing back encrypted content — even though this is intended not as a new DRM system but a standards-based way to interact with DRM systems — mean there isn't going to be a way to do everything you can do in Flash without a plugin any time soon. So Adobe should have a market for its next generation of developer tools. </br> </br> Much of Adobe's recent public focus has been on its HTML5 development tools. But despite a shift of emphasis Flash hasn't been left behind, and a new generation of Flash design and programming tooling isn't far away. </br> </br> Over the Easter holiday weekend the company posted a new video on its Flash Professional Team blog, demonstrating a handful of features from the next release of the Flash tooling. </br> </br> Currently codenamed Hellcat (a change from the sandwich codenames of the last batch of Flash development tools), the new version of Flash Professional is being designed to take advantage of the current generation of computer hardware. </br></br> If you've got a high DPI screen, on a Surface Pro or a Retina MacBook (or even a Chromebook Pixel), you'll get a UI that takes advantage of all those pixels – and based on the video, it appears also lets you build Flash apps that work on those new screens. The new UI can also switch between light and dark themes, much like other components of Adobe's Creative Suite. </br> </br> Developers need tools that are fast and flexible, and the new Flash Professional will be available as a 64-bit application, and as native Cocoa on Mac OS. That means it'll load large files quickly, and Adobe's video demo shows Hellcat launching around 10x faster than Flash Professional CS6. It’s also a lot faster for common interactions, like scrubbing through timelines.</br> </br> There's a lot still to learn about Hellcat. For one thing Adobe hasn't talked about new features in Flash, or shown anything of the ActionScript code development experience. With Flash still a common tool for developing casual games, and for complex web user interfaces, it's important for developers to understand the roadmap for the player, as well as for the development tooling. If Flash is to remain relevant, Adobe will need to show a lot more at its upcoming MAX event.</strong></div>";
	
	var title1 = "How dead is Flash?";
	var title2 = "";
	var authorName1 = "";
	document.pic1.src="images/default.png";
		
	var articleElement1 = document.getElementById("a1InsideText");
	articleElement1.innerHTML = articleText1;
	var title = document.getElementById("titleArticle1");
	title.innerHTML = title1;
	var author1 = document.getElementById("authorArticle1");
	author1.innerHTML = authorName1;
	var articleElement2 = document.getElementById("a2InsideText");
	articleElement2.innerHTML = articleText2;
	var titleWrite2 = document.getElementById("titleArticle2");
	titleWrite2.innerHTML = title2;
	}

	function makeTabletsVsConsole(){
	var articleText1 = "This is where my tablets overcoming consoles unless consoles become more like tablets. Synth delectus YOLO banh mi voluptate, gluten-free Blue Bottle art party Godard sunt ennui PBR&B butcher locavore. Literally laborum hella tousled elit fap.";
	
	var articleText2 = "Bitters butcher Neutra distillery, pickled messenger bag drinking vinegar mumblecore duis dolor post-ironic gentrify officia craft beer. </br></br> Pariatur fixie tofu biodiesel, PBR&B McSweeney's velit actually non salvia Pinterest. Voluptate blog aute VHS, distillery shabby chic labore. XOXO sustainable PBR&B laboris kale chips et ut, hoodie do. Reprehenderit Thundercats distillery, twee deserunt banh mi ullamco.Cillum McSweeney's post-ironic, ethical try-hard gentrify Echo Park messenger bag Shoreditch roof party retro. Meggings ea deserunt Tonx DIY dolor fugiat, PBR&B skateboard assumenda. Et you probably haven't heard of them ugh, swag plaid master cleanse fanny pack. Ennui viral gluten-free non. Messenger bag est ethnic, tempor selvage ex Tonx swag adipisicing Wes Anderson dreamcatcher sint blog. Truffaut freegan master cleanse, pariatur vegan ethical keytar put a bird on it Marfa iPhone minim. Ad wayfarers YOLO, small batch seitan ennui photo booth fugiat consequat cornhole magna cupidatat swag flexitarian.</br></br> Synth delectus YOLO banh mi voluptate, gluten-free Blue Bottle art party Godard sunt ennui PBR&B butcher locavore. Literally laborum hella tousled elit fap. Bitters butcher Neutra distillery, pickled messenger bag drinking vinegar mumblecore duis dolor post-ironic gentrify officia craft beer. Pariatur fixie tofu biodiesel, PBR&B McSweeney's velit actually non salvia Pinterest. Voluptate blog aute VHS, distillery shabby chic labore. XOXO sustainable PBR&B laboris kale chips et ut, hoodie do. Reprehenderit Thundercats distillery, twee deserunt banh mi ullamco. </br></br> Deep v wolf keytar placeat post-ironic, disrupt eiusmod nihil leggings Marfa mixtape. Sapiente butcher ethnic irony vegan artisan, qui cred typewriter elit messenger bag XOXO sint gluten-free swag. Mixtape leggings mumblecore occupy seitan. Duis mlkshk Intelligentsia, authentic fingerstache cillum keytar Cosby sweater do butcher farm-to-table irony meggings flexitarian. Roof party minim hashtag literally Shoreditch Banksy. Swag Echo Park laborum, ennui Cosby sweater brunch assumenda fap velit gastropub literally nesciunt sunt cornhole. Adipisicing nihil artisan Schlitz, raw denim Vice bicycle rights Shoreditch sint aute minim keytar locavore.";
	
	var title1 = "Theory on Tablets vs Console";
	var title2 = "";
	var authorName1 = "";
	document.pic1.src="images/default.png";
		
	var articleElement1 = document.getElementById("a1InsideText");
	articleElement1.innerHTML = articleText1;
	var title = document.getElementById("titleArticle1");
	title.innerHTML = title1;
	var author1 = document.getElementById("authorArticle1");
	author1.innerHTML = authorName1;
	var articleElement2 = document.getElementById("a2InsideText");
	articleElement2.innerHTML = articleText2;
	var titleWrite2 = document.getElementById("titleArticle2");
	titleWrite2.innerHTML = title2;	
	}

	function makeTutorialReference(){
	var articleText1= "This is where I rant about all the cool tutorial sites I have found. Occupy Pinterest culpa, reprehenderit fugiat Tumblr Banksy cillum. Beard Williamsburg before they sold out consectetur, banh mi try-hard ullamco put a bird on it church-key elit. Street art locavore Williamsburg Vice quis.";
	
	var articleText2 = "Brooklyn salvia voluptate food truck, Vice sunt vegan wolf. Keytar freegan squid, Blue Bottle gluten-free mustache VHS Intelligentsia nisi. Shabby chic Wes Anderson do, Tonx XOXO et forage. Bitters blog farm-to-table officia kale chips duis. Nesciunt banjo locavore Banksy nisi. Next level ugh eu, post-ironic beard chia artisan yr fanny pack messenger bag kitsch wolf proident magna aliquip. Eiusmod bicycle rights aesthetic trust fund forage hoodie, quinoa consequat.</br></br> Laboris sed do, Carles ea literally swag seitan locavore. Labore ethnic sapiente ea. Tofu nisi vegan, brunch swag enim Godard shabby chic fixie pickled aesthetic skateboard bitters et ennui. Adipisicing Wes Anderson messenger bag, selfies lomo placeat semiotics readymade. Officia flannel Schlitz, aliquip literally Austin 3 wolf moon farm-to-table Vice Brooklyn. Shabby chic readymade letterpress sunt tattooed velit. Cliche ethnic pickled Williamsburg, art party biodiesel Thundercats nulla.</br></br> Culpa tempor slow-carb, typewriter next level gentrify Odd Future et XOXO cliche sriracha sint cornhole sunt. Kale chips nesciunt plaid, sed gentrify asymmetrical aute dolor food truck scenester sustainable craft beer put a bird on it ea mixtape. Cupidatat actually typewriter meh artisan. Banksy cornhole cardigan deep v food truck, proident PBR&B iPhone tofu elit put a bird on it delectus Odd Future. Yr Odd Future ethical 3 wolf moon, id fixie scenester labore et mollit Intelligentsia odio craft beer gentrify. Brunch kogi chillwave, try-hard ethical plaid master cleanse ugh cupidatat farm-to-table officia messenger bag elit Banksy church-key. Cornhole dolor Pitchfork culpa, drinking vinegar cray PBR irure flexitarian farm-to-table.";
	
	var title1 = "Awesome Tutorial Reference";
	var title2 = "";
	var authorName1 = "";
	document.pic1.src="images/default.png";
		
	var articleElement1 = document.getElementById("a1InsideText");
	articleElement1.innerHTML = articleText1;
	var title = document.getElementById("titleArticle1");
	title.innerHTML = title1;
	var author1 = document.getElementById("authorArticle1");
	author1.innerHTML = authorName1;
	var articleElement2 = document.getElementById("a2InsideText");
	articleElement2.innerHTML = articleText2;
	var titleWrite2 = document.getElementById("titleArticle2");
	titleWrite2.innerHTML = title2;	
}
	
}
	

					




