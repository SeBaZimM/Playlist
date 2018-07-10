var rawItems = [
	{ name: "bild1", type: 0 }, 
	{ name: "bild2", type: 2 }, 
	{ name: "bild3", type: 2 }, 
	{ name: "bild4", type: 2 },
	{ name: "bild5", type: 0 }, 
	{ name: "bild6", type: 3 },
];

var obj = new Object();
var playList = [];

function init() {
	sortByType(rawItems);
	generatePlayList(playList);
}

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
	for (var item of items) {
		for (var _type in item) {
			for (var i = 0; i < items.length; i++) {
				if (item.type === i && _type == 'type') {
					obj[_type + '_' + item.type] = new Array();
				}
			}
		}
	}
	for (var item of items) {
		for (var _type in item) {
			for (var i = 0; i < items.length; i++) {
				if (item.type === i && _type == 'type') {
					obj[_type + '_' + i].push(item);	
				}
			}
		}
	}			
}

function generatePlayList(list) {
	var obj_size = Object.keys(obj).length;
	var obj_type_0_size = Object.keys(obj.type_0).length;
	var onlyType_0 = !0,
		hasType_2 = !1;
	var count_type_0 = 0,
		count_type_3 = 0,
		index = 0;
	var tmpType_2 = null;
	var tmpType_3 = null;
	
	for (var item in obj) {
		for (var element of rawItems) {
			for (var _type in element) {
				if (item != _type + '_0') {
					onlyType_0 = !1;
				} else {
					onlyType_0 = !0;
				}
			}
		}
	}

	OUTER_LOOP: for (var i = 0; i < rawItems.length; i++) {
		INNER_LOOP: for (var item in obj) {
			if (list == 0) {
				if (item == 'type_2') {
					tmpType_2 = obj[item];
					list[index] = obj[item];
					hasType_2 = !0;
				} else if (item == 'type_3') {
					tmpType_3 = obj[item];
					list[index] = obj[item];
					count_type_3++;
				} else {
					if (onlyType_0) {
						list[index] = obj[item][count_type_0];
						count_type_0++;
					} else {
						continue;
					}
				}
				index++;
			} else {
				if (!onlyType_0) {
					if (item == 'type_3') {
						if (count_type_3 >= obj_size * 2) {
							count_type_3 = 0;
						}
						if (count_type_3 == 0) {
							tmpType_3 = obj[item];
							list[index] = obj[item];
							count_type_3++;
							if (hasType_2 == !0) {
								list.push(tmpType_2);
								index++;
							}
						} else {
							count_type_3++;
						}
					}
					if (item == 'type_0') {
						if (count_type_3 >= obj_size) {
							count_type_3 = 0;
							list.push(tmpType_3);
							count_type_3++;
							index++;
							if (hasType_2 == !0) {
								list.push(tmpType_2);
								index++;
							}
						} else {
							count_type_3++;
						}
						
						
						list[index] = obj[item][count_type_0];
						count_type_0++;
						count_type_3++;
						if (count_type_0 >= obj_type_0_size) 
							break OUTER_LOOP;
					}
					if (item == 'type_2') {
						if (i != rawItems.length) {
							list[index] = obj[item];
							count_type_3++
						} else break;
					}
					if (list[index] === undefined) { break INNER_LOOP; }
					if (count_type_0 >= obj_size)  { break OUTER_LOOP; }
					
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
init();

var element = 0;
var count = 0;

function play_playList() {
	var screen = document.querySelector('#playList_1');
	screen.removeAttribute('class');
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
var playInterval = setInterval(play_playList, 2000);

