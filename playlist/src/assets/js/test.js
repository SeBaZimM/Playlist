import $ from 'jquery';

var rawItems = [
	{ name: 1, type: 0 }, 
	{ name: 2, type: 2 }, 
	{ name: 3, type: 2 }, 
	{ name: 4, type: 1 },
	{ name: 5, type: 1 }, 
	{ name: 6, type: 3 },
	{ name: 7, type: 1 }, 
	{ name: 8, type: 1 }, 
	{ name: 9, type: 2 }, 
];

var obj = { 0: [] };
var playList = [];

function setObjectContent(items) {
	
	$.each(items, function(key,value) {
		if (value.type < 2) {
			obj[0].push(items[key])
		} else if (typeof obj[key] === 'undefined' && 
				   typeof obj[value.type] == 'undefined') 
		{
			obj[value.type] = [];
			obj[value.type].push(value);
		} else {
			obj[value.type].push(value);
		}
	});
}
setObjectContent(rawItems);

console.log('___________________________________________________________');
console.log('Object',obj);
console.log('___________________________________________________________');

function generatePlayList(list) {
	
	
	$.each(obj, function(key,value) {
		
		console.log('obj:',key, value)
		if (list != 0 && typeof list[key] === 'undefined') list[key] = new Array();
		
		$.each(obj[key], function(k,val) {
			
			console.log('item:',k, val)

			console.log(val.type, key,val.type % key  )
			if (val.type % key ==  0) {
				if (list == 0) list[key] = new Array();
				list[key][k] = val;
			}
			
		});
		console.log('___________________________________________________________');
	});
}
generatePlayList(playList);
console.log('___________________________________________________________');
console.log('Playlist:',playList);
console.log('___________________________________________________________');
