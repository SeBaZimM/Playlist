import $ from 'jquery';

var jsonPlaylist = '{"playlist":[{"id":1,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":0,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true},{"id":2,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc999501b4.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":1462,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":1,"name":"5b1fc999501b4.jpg","url":"5b1fc999501b4.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc999501b4.jpg","fileSize":1462,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"n6VtpNa9","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc999501b4.jpg","isDownloaded":true},{"id":3,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b2969c5b3d20.mp4","mimeType":{"MIME_GROUP":"VIDEO","MIME_TYPE":"video/mp4"},"size":37879,"updationDate":null,"filehash":"5b2969c5b3d20","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":2,"name":"5b2969c5b3d20.mp4","url":"5b2969c5b3d20.mp4","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b2969c5b3d20.mp4","fileSize":37879,"typeId":{"MIME_GROUP":"VIDEO","MIME_TYPE":"video/mp4"},"type":{"MIME_GROUP":"VIDEO","MIME_TYPE":"video/mp4"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b2969c5b3d20","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b2969c5b3d20.mp4","isDownloaded":true},{"id":4,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b3d03e6457a6.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":2638,"updationDate":null,"filehash":"5b3d03e6457a6","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":2,"name":"5b3d03e6457a6.jpg","url":"5b3d03e6457a6.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b3d03e6457a6.jpg","fileSize":2638,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b3d03e6457a6","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b3d03e6457a6.jpg","isDownloaded":true},{"id":5,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44d0fd89438.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":4224,"updationDate":null,"filehash":"5b44d0fd89438","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":3,"name":"5b44d0fd89438.jpg","url":"5b44d0fd89438.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b44d0fd89438.jpg","fileSize":4224,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b44d0fd89438","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44d0fd89438.jpg","isDownloaded":true},{"id":6,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44e87ac634e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":2542,"updationDate":null,"filehash":"5b44e87ac634e","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":3,"name":"5b44e87ac634e.jpg","url":"5b44e87ac634e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b44e87ac634e.jpg","fileSize":2542,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b44e87ac634e","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44e87ac634e.jpg","isDownloaded":true},{"id":7,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":3,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true},{"id":8,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc999501b4.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":1462,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":5,"name":"5b1fc999501b4.jpg","url":"5b1fc999501b4.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc999501b4.jpg","fileSize":1462,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"n6VtpNa9","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc999501b4.jpg","isDownloaded":true},{"id":9,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b2969c5b3d20.mp4","mimeType":{"MIME_GROUP":"VIDEO","MIME_TYPE":"video/mp4"},"size":37879,"updationDate":null,"filehash":"5b2969c5b3d20","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":5,"name":"5b2969c5b3d20.mp4","url":"5b2969c5b3d20.mp4","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b2969c5b3d20.mp4","fileSize":37879,"typeId":{"MIME_GROUP":"VIDEO","MIME_TYPE":"video/mp4"},"type":{"MIME_GROUP":"VIDEO","MIME_TYPE":"video/mp4"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b2969c5b3d20","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b2969c5b3d20.mp4","isDownloaded":true},{"id":10,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b3d03e6457a6.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":2638,"updationDate":null,"filehash":"5b3d03e6457a6","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":5,"name":"5b3d03e6457a6.jpg","url":"5b3d03e6457a6.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b3d03e6457a6.jpg","fileSize":2638,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b3d03e6457a6","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b3d03e6457a6.jpg","isDownloaded":true},{"id":11,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44d0fd89438.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":4224,"updationDate":null,"filehash":"5b44d0fd89438","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":5,"name":"5b44d0fd89438.jpg","url":"5b44d0fd89438.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b44d0fd89438.jpg","fileSize":4224,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b44d0fd89438","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44d0fd89438.jpg","isDownloaded":true},{"id":12,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44e87ac634e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":2542,"updationDate":null,"filehash":"5b44e87ac634e","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":5,"name":"5b44e87ac634e.jpg","url":"5b44e87ac634e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b44e87ac634e.jpg","fileSize":2542,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b44e87ac634e","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44e87ac634e.jpg","isDownloaded":true},{"id":13,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":0,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true},{"id":14,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":0,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true},{"id":15,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":0,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true},{"id":16,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":0,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true},{"id":17,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":0,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true}]}';


//var playlistObject = JSON.parse(jsonPlaylist);
//var weightedList = createWeightedPlaylist(jsonPlaylist);

function init() {

	try {
		var playInterval = setInterval(play_playList, 2000);

	} catch (err) {
		clearInterval(playInterval);
		console.log(err);
	}
}

//adding the non priority propertys in the obj{ 0:[] } by the values type;
function generateWeightedPlaylist(playlist) {
	
	var wheightedPlaylist = JSON.parse(playlist).playlist;
	var processedPlayList = {};
	
	$.each(wheightedPlaylist, function (key, value) {
		
		if (typeof value.repetitionFrequency !== 'number') { 
			return; 
		}
		if (Object.keys(processedPlayList).length === 0) {
			processedPlayList[0] = new Array();
		}
		if (value.repetitionFrequency < 2) {
			processedPlayList[0].push(value);
			
		} else if (typeof processedPlayList[key] === 'undefined' 
				   || typeof processedPlayList[value.repetitionFrequency] === 'undefined') {
			
			if (typeof processedPlayList[value.repetitionFrequency] !== 'undefined') {
				processedPlayList[value.repetitionFrequency].push(value);
			} else {
				processedPlayList[value.repetitionFrequency] = new Array(value);
			}
			
		} else {
			processedPlayList[value.repetitionFrequency].push(value);
		}
	});
	return processedPlayList;
}
//Fills the playlist with the values that exist on the vouchenen propertys
function createWeightedPlaylist(playlist) {

	var wheightedPlaylist = generateWeightedPlaylist(playlist);
	var weightedList = [];
	var index;
	
	$.each(wheightedPlaylist[0], function (key_0, value_0) {
		index = 0;
		$.each(wheightedPlaylist, function (key, value) {
			$.each(wheightedPlaylist[key], function(k, v) {		
				if (key_0 % key === 0 && typeof wheightedPlaylist[index] !== 'undefined') {
					weightedList.push(value[k])
				}
			});
		});
		index++;
		weightedList.push(value_0);
	});
	return weightedList;
}

// OPTIONAL _ JUST FOR OUTPUT
var element = 0,
	count = 0;

function play_playList() {

	var playList = createWeightedPlaylist(jsonPlaylist);
	
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
