
var collection = [];

function item(name, category, description, image){
	this.name = name;
	this.category = category;
	this.description = description;
	this.image = image;
	}


var addNewItem = function(name, category, description, image){
	var newItem = new item(name, category, description, image);
	collection.push(newItem);
};

addNewItem('Ancient Forces', 'ring', 'This delicate ring was created from thin electrical wire and a single bead. The plastic coating was stripped from the wire, and then the wire was hammered to flatten it out. Next it was heated with a gas torch to discolor the metal. After the metal was quenched in water, it was shaped into the ring you see here. The intent of this piece was to resemble an ancient artifact, and like a historical treasure, it needs to be handled with care. The thin copper is very maliable and could easily be crushed if not handled gently.', 'images/ancientring.jpg');
addNewItem('Charming Hairsticks', 'other', 'hairsticks made from unused bbq skewers, mismatched earings, and paperclips - the tips are sanded smooth (so nobody stabs their scalp) and coated in enamel to make them slide into the hair easier.', 'images/beadsticks.jpg');
addNewItem('Coin Rings', 'ring', 'These rings were created out of coins. A hole was drilled in the center of each quarter, then the coin was heated with a gas torch. Heating the metal (also called anealing) softens it, making it easier to work with. At this point the ring is formed by hammering against it on a mandrel. \n These rings make great souvenirs if special coins are used, such as state or national park quarters, or international currency.', 'images/coinrings.jpg');
addNewItem('Green Pendant','necklace', 'This handmade pendant is made from a stone that previously lived at the bottom of my fishtank. It was wrapped in electrical wire that had been stripped and heated. Then strung on a ribbon necklace.', 'images/greenpendant.jpg');
addNewItem('Round Leaf Pendant', 'necklace', 'This handmade wire wrapped pendant is made from a large bead from a broken necklace, a paperclip, and short pieces of electrical wire.', 'images/leafbead.jpg');
addNewItem('Painted Hair Sticks', 'other', 'A collection of hand painted hair sticks, made from unused barbeque skewers', 'images/paintsticks.jpg' );
addNewItem('Penny Anklet', 'bracelet', 'A crocheted bracelet made from cotton string and pennies.', 'images/pennybracelet.jpg');
addNewItem('Paperclip Bead Pendants', 'necklace', 'Wire wrapped bead pendants made from ordinary paperclips', 'images/ppclipbeads.jpg');
addNewItem('Paperclip Ring', 'ring', 'A handmade ring made from 4 paperclips and short pieces electrical wire that had been hammered flat.', 'images/ppclipring.jpg');
addNewItem('Weathered Copper Bracelet', 'bracelet', 'This bracelet was formed from heavy copper electrical wire. After it was formed the bracelet was then thrown in the wood stove as an experiment. The result was this hardened weathered rusty looking piece. The bracelet is coated in clear enamel to prolong its life and avoid staining the wearers skin and clothing', 'images/rustybracelet.jpg');
addNewItem('Bottle Cap Bracelet', 'bracelet', 'This bracelet was made as a souvenir from a trip to Mexico. Sol was my local choice of beverage for relaxing in the grass under the sunshine. This bottlecap made its way into my suitcase, so I flattened it and made it into a conversation piece. The denim is of course from a pair of cutoff jeans.', 'images/solbracelet.jpg');
addNewItem('Copper Swirl Ring', 'ring', 'This ring is made from copper electrical wire. It was formed my hammering the wire flat then shaping it on a mandrel.', 'images/swirlring.jpg');
addNewItem('Azure Wings Choker', 'necklace', 'This necklace was made from a sea shell, copper wire and polimer clay. The clay was tinted using blue eye shadow. The copper wire is held in place by smaller guage electrical wire, which still sports the blue plastic coating.', 'images/wingschoker.jpg');
addNewItem('A Nest of Wire', 'ring', 'This ring was formed with electrical wire. The wire was first stripped, then hammered flat. Then the wire was woven into the ring you see here. After it was finished, it was heated with a torch to alter the color. Some strands of the wire even reflect a blueish color in certain light.', 'images/wirenestring.jpg');
addNewItem('Woven Wire Bracelet', 'bracelet', 'For this bracelet the wire was not stripped, but the plastic covering was left in tact. It was made with a very basic weave pattern, and red beads are sprinkled thoughout for a splash of color.', 'images/wireweave.jpg');
addNewItem('Frankenbag', 'other', 'My backpack is custom made for the purpose of hauling my flutes, sheetmusic, and everything I need for a rehearsal. The side pocket, made from an old pair of jeans, is intended to hold a wire music stand. The front pocket, made from an old broken handbag, has pockets inside for all my musical accessories (metronome, pencils, windclips..aka clothspins...) The rest is made from an old jacket, a curtain, and a broken belt.', 'images/backpack.jpg');
var listThumbnails = function () {
	for (var i = 0; i<collection.length; i++){
		var newThumbnail = document.createElement("img");
		newThumbnail.setAttribute('class', 'thumbnail');
		newThumbnail.setAttribute('src', collection[i].image);
		newThumbnail.setAttribute('alt', "handmade " + collection[i].category);
		newThumbnail.setAttribute('name', collection[i].name);
		document.getElementById("thumbnailsDiv").appendChild(newThumbnail);
	}
}

listThumbnails();
var filterImages = function(){
	switch (this.id){
	case 'aboutbutton':
		console.log("I clicked About")
		break;case 'ringbutton':
		console.log("I clicked Rings")
		break;
	case 'necklacebutton':
		console.log("I clicked Necklaces")
		break;
	case 'braceletbutton':
		console.log("I clicked Bracelets")
		break;
	case 'otherbutton':
		console.log("I clicked Other")
		break;
	case 'allbutton':
		console.log("I clicked Show All")
		break;
	default:
		console.log("I don't know what just happened")
		break;
	}
};
var showDetail = function (){
	var pieceName = this.name;
	console.log("I clicked on " + pieceName)
	document.getElementById('itemName').textContent = pieceName;
	document.getElementById('itemImage').setAttribute("src", this.src);
	for (var i = 0; i < collection.length; i++){
		if (collection[i].name == pieceName){
			document.getElementById('itemDescription').textContent = collection[i].description;
		}
	}
};
var eventListeners = function (){
	var navlinks = document.getElementsByClassName('navlink');
	for (var i = 0; i < navlinks.length; i++) {
		navlinks[i].addEventListener('click', filterImages);
	}
		var thumbnaillinks = document.getElementsByClassName('thumbnail');
	for (var i = 0; i < thumbnaillinks.length; i++) {
		thumbnaillinks[i].addEventListener('click', showDetail);
	}
};

eventListeners();
