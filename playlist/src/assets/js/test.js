import $ from 'jquery';

var rawItems = [
	{ name: 'bild1', type: 0 },
	{ name: 'bild2', type: 0 },
	{ name: 'bild3', type: 0 }, 
	{ name: 'bild4', type: 0 },
	{ name: 'bild5', type: 0 },
	{ name: 'bild6', type: 0 }, 
	{ name: 'bild1', type: 1 }, 
	{ name: 'bild2', type: 1 },
	{ name: 'bild3', type: 1 }, 
	{ name: 'bild4', type: 2 },
	{ name: 'bild5', type: 2 }, 
	{ name: 'bild6', type: 3 },
	{ name: 'bild1', type: 3 },
	{ name: 'bild2', type: 3 }, 
	{ name: 'bild3', type: 4 },
	{ name: 'bild3', type: 4 },
	{ name: 'bild4', type: 5 },
	{ name: 'bild5', type: 5 }, 
	{ name: 'bild6', type: 5 },
	{ name: 'bild1', type: 5 }, 
	{ name: 'bild4', type: 5 }, 
];

var playList = generatePlayList(setObjectContent);

function init() {
	
	try {
		var playInterval = setInterval(play_playList, 2000);

	} catch (err) {
		clearInterval(playInterval);
		console.log(err);
	}

}

//adding the non priority propertys in the obj{ 0:[] } by the values type;
function setObjectContent() {
	var obj = new Object();
	
	$.each(rawItems, function(key, value) {
		
		if (value.type < 2 || value.type % 4 === 0) {
			
			if (Object.keys(obj).length === 0) {
				obj[0] = new Array(value);	
			} else {
				obj[0].push(value);
			}
			
		} else if (typeof obj[key] === 'undefined' && typeof obj[value.type] === 'undefined') {
			obj[value.type] = new Array(value);
		} else {
			obj[value.type].push(value);
		}
		
	});
	return obj;
}
//Fills the playlist with the values that exist on the vouchenen propertys
function generatePlayList(setObj) {
	
	var obj = setObj();
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

/*
function generatePlayList(items, list) {
	
	var obj = new Object()
	var index;
	
	//adding the non priority propertys in the obj{ 0:[] } by the values type;
	$.each(items, function(key, value) {
		if (value.type < 2 || value.type % 4 === 0) {
			if (Object.keys(obj).length === 0) {
				obj[0] = new Array(value);
			} else {
				obj[0].push(value);
			}
			
		} else if (typeof obj[key] === 'undefined' && typeof obj[value.type] === 'undefined') {
			obj[value.type] = new Array(value);
		} else {
			obj[value.type].push(value);
		}
	});
	
	//Fills the playlist with the values that exist on the vouchenen propertys
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
}
*/







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
			console.log(playList[element][count]);
			count++;
			
		} else {
			count = 0;
			element++;
			
			if (playList[element].length == undefined) {
				screen.classList.add(playList[element].name);
				console.log(playList[element]);
				element++;
				
			} else {
				screen.classList.add(playList[element][count].name);
				console.log(playList[element][count]);
				count++;
			}
		}
		
	} else {
		screen.classList.add(playList[element].name);
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