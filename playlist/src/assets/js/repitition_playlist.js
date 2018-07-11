import $ from 'jquery';

var rawItems = [
	{ name: "bild1", type: 0 }, 
	{ name: "bild2", type: 2 }, 
	{ name: "bild3", type: 2 }, 
	{ name: "bild4", type: 3 },
	{ name: "bild5", type: 3 }, 
	{ name: "bild6", type: 3 },
	{ name: "bild1", type: 0 }, 
	{ name: "bild2", type: 2 }, 
	{ name: "bild3", type: 2 }, 
	{ name: "bild4", type: 3 },
	{ name: "bild5", type: 3 }, 
	{ name: "bild6", type: 3 },
];

var obj = { 0: [] };
var playList = [];
var element = 0,
	count = 0;

function init() {
	
	try {
		sortByType(rawItems);
		createObjContent(rawItems);
		setObjectContent(rawItems, obj);
		
		try {
			generatePlayList(playList);
			
			try {
				var playInterval = setInterval(play_playList, 2000);
				
			} catch (err) {
				clearInterval(playInterval);
				console.log(err);
			}
			
		} catch (err) {
			console.log(err);
		}
		
	} catch (err) {
		console.log(err);
	}	
}

//sorted by type ascending so that the order in the new object is correct
function sortByType(items) {
	
	for (var x = 0; x < items.length; x++) {
		for (var y = 0; y < items.length; y++) {
			if (items[x].type < items[y].type) {
				var tmp = items[x];
				items[x] = items[y];
				items[y] = tmp;
			}
		}
	}
}
//creates, based on the data, the content for the object
function createObjContent(items) {
	
	for (var item of items) 
		for (var _type in item) 
			for (var i = 0; i < items.length; i++) 
				if (item.type === i && _type == 'type') 
					obj[_type + '_' + item.type] = new Array();
}
//fills the array with the objects and their given types in the right order
function setObjectContent(items, object) {
	
	for (var item of items) 
		for (var _type in item) 
			for (var i = 0; i < items.length; i++) 
				if (item.type === i && _type == 'type') 
					object[_type + '_' + i].push(item);	
}

// generates the playlist
function generatePlayList(list) {
	
	var obj_size = Object.keys(obj).length;
	var obj_type_0_size = 0;
	var onlyType_0 = false, hasType_2 = false;
	var count_type_0 = 0, count_type_3 = 0, index = 0;
	var tmpType_2 = null, tmpType_3 = null;
		
	for (var item in obj) {
		if (item == 'type_0') 
			obj_type_0_size++;
		
		for (var element of rawItems) 
			for (var _type in element) 
				item != _type + '_0' ? 
					onlyType_0 = false : onlyType_0 = true;
	}
		
	
	OUTER_LOOP: for (var i = 0; i < rawItems.length; i++) {
		
		INNER_LOOP: for (var item in obj) {
			
			if (list == 0) {
				
				switch (item) {
					case 'type_0':
						if (onlyType_0) {
							list[index] = obj[item][count_type_0];
							count_type_0++;
						} else 
							continue;
						
						break;
						
					case 'type_2':
						tmpType_2 = obj[item];
						list[index] = obj[item];
						hasType_2 = true;
						
						break;
						
					case 'type_3':
						tmpType_3 = obj[item];
						list[index] = obj[item];
						count_type_3++;
						break;
					
					default:
						list[index] = obj[item];
						count_type_0++;
						continue;
						
				}
				index++;
				
			} else {
				if (!onlyType_0) {
					
					switch (item) {
						case 'type_0':
							if (count_type_3 >= obj_size) {
								count_type_3 = 0;
								list.push(tmpType_3);
								count_type_3++;
								index++;
								if (hasType_2 == true) {
									list.push(tmpType_2);
									index++;
								}
							} else 
								count_type_3++;
							
							list[index] = obj[item][count_type_0];
							count_type_0++;
							count_type_3++;

							if (count_type_0 >= obj_type_0_size) 
								break OUTER_LOOP;
							
							break;
							
						case 'type_2':
							if (i != rawItems.length) {
								list[index] = obj[item];
								count_type_3++
							} else 
								break;
							
							break;
							
						case 'type_3':
							if (count_type_3 >= obj_size * 2) 
								count_type_3 = 0;
								
							if (count_type_3 == 0) {
								tmpType_3 = obj[item];
								list[index] = obj[item];
								count_type_3++;
								
								if (hasType_2 == true) {
									list.push(tmpType_2);
									index++;
								}
							} else 
								count_type_3++;
							break
							
						default:
							list[index] = obj[item];
							break;	
					}
					
					if (list[index] === undefined) 
						break INNER_LOOP;
					
					if (count_type_0 >= obj_size)  
						break OUTER_LOOP;
					
				} else {
					list[index] = obj[item][count_type_0];
					count_type_0++;
				}
				index++;
			}
		}
	}
	console.log(list)
	return list;
}

// Play the playlist
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
