import $ from 'jquery';

var rawItems = [
	{ name:  'bild1', type: 5 },
	{ name:  'bild2', type: 5 },
	{ name:  'bild3', type: 5 },
	{ name:  'bild4', type: 5 },
	{ name:  'bild5', type: 5 },
	{ name:  'bild6', type: 4 },
	{ name:  'bild7', type: 4 },
	{ name:  'bild8', type: 4 },
	{ name:  'bild9', type: 4 },
	{ name: 'bild10', type: 3 },
	{ name: 'bild11', type: 3 },
	{ name: 'bild12', type: 3 },
	{ name: 'bild13', type: 2 },
	{ name: 'bild14', type: 2 },
	{ name: 'bild15', type: 1 },
	{ name: 'bild16', type: 0 },
];

var playList = generatePlayList(rawItems);
console.log(playList);

function init() {
	
	try {
//		var playInterval = setInterval(play_playList, 2000);
		
	} catch (err) {
		clearInterval(playInterval);
		console.log(err);
	}
}

//adding the non priority propertys in the obj{ 0:[] } by the values type;
function setObjectContent(items) {
	
	var obj = new Object();
	$.each(items, function(key, value) {
		
		if (typeof value.type !== 'number') { return; }
		if (Object.keys(obj).length === 0) 	{ obj[0] = new Array(); console.log('create obj[0]')}
		
		if (value.type < 2 || value.type % 4 === 0) {
			obj[0].push(value);
			console.log('push', value ,'into obj[0]')

		} else if (typeof obj[key] === 'undefined' || typeof obj[value.type] === 'undefined') {
			
			if (typeof obj[value.type] !== 'undefined') {
				obj[value.type].push(value);
				console.log('push', value ,'into obj['+ value.type + ']');
			} else {
				obj[value.type] = new Array(value);
				console.log('create new Array on obj['+value.type+']')
				console.log('push', value ,'into obj['+ value.type + ']');
			}
			
		} else if (obj[value.type] === 'undefined' || Object.keys(obj[value.type].length === 0)) {
			obj[value.type].push(value);
			console.log('push', value ,'into obj['+ value.type + ']');
		} else {
			obj[value.type].push(value);
			console.log('push', value ,'into obj['+ value.type + ']');
		}
	});
	console.log(obj);
	return obj;
}
//Fills the playlist with the values that exist on the vouchenen propertys
function generatePlayList(items) {
	
	var obj = setObjectContent(items);
	var list = [];
	var index;
	
	$.each(obj[0], function(key, value) {
		index = 0;
		$.each(obj[index], function(k, val) {	
			if (key % k === 0 && typeof obj[index] !== 'undefined') {
				list.push(obj[index]);
			}
			index++;
		});
		list.push(value)
	});
	return list;
}

// OPTIONAL _ JUST FOR OUTPUT
var element = 0,
	count = 0;
function play_playList() {
	
	var screen = document.getElementById('playList_1');
	screen.removeAttribute('class');
	screen.innerHTML = '';
	
	if (playList[element].length != undefined) {
		if (count < playList[element].length) {
			screen.classList.add(playList[element][count].name);
			screen.innerHTML = playList[element][count].name;
			console.log(playList[element][count]);
			count++;
			
		} else {
			count = 0;
			element++;
			
			if (playList[element].length == undefined) {
				screen.classList.add(playList[element].name);
				screen.innerHTML = playList[element].name;
				console.log(playList[element]);
				element++;
				
			} else {
				screen.classList.add(playList[element][count].name);
				screen.innerHTML = playList[element][count].name;
				console.log(playList[element][count]);
				count++;
			}
		}
		
	} else {
		screen.classList.add(playList[element].name);
		screen.innerHTML = playList[element].name;
		console.log(playList[element]);
		element++;
		count = 0;
	}
	
	if (element == playList.length) {
		element = 0;
		count = 0;
	}
}

init();

// CONSOLE OUTPUT
/*
create obj[0]  app.js:22398:25
create new Array on obj[5]  app.js:22411:5
push Object { name: "bild1", type: 5 } into obj[5]  app.js:22412:5
push Object { name: "bild2", type: 5 } into obj[5]  app.js:22408:5
push Object { name: "bild3", type: 5 } into obj[5]  app.js:22408:5
push Object { name: "bild4", type: 5 } into obj[5]  app.js:22408:5
push Object { name: "bild5", type: 5 } into obj[5]  app.js:22408:5
push Object { name: "bild6", type: 4 } into obj[0]  app.js:22403:4
push Object { name: "bild7", type: 4 } into obj[0]  app.js:22403:4
push Object { name: "bild8", type: 4 } into obj[0]  app.js:22403:4
push Object { name: "bild9", type: 4 } into obj[0]  app.js:22403:4
create new Array on obj[3]  app.js:22411:5
push Object { name: "bild10", type: 3 } into obj[3]  app.js:22412:5
push Object { name: "bild11", type: 3 } into obj[3]  app.js:22408:5
push Object { name: "bild12", type: 3 } into obj[3]  app.js:22408:5
create new Array on obj[2]  app.js:22411:5
push Object { name: "bild13", type: 2 } into obj[2]  app.js:22412:5
push Object { name: "bild14", type: 2 } into obj[2]  app.js:22408:5
push Object { name: "bild15", type: 1 } into obj[0]  app.js:22403:4
push Object { name: "bild16", type: 0 } into obj[0]  app.js:22403:4
Object [ Array[6], <1 freie Position>, Array[2], Array[3], <1 freie Position>, Array[5] ]  app.js:22422:2
Array [ Array[2], Array[3], Array[5], Object, Object, Array[2], Object, Array[3], Object, Array[2], 3 weitere… ]
*/