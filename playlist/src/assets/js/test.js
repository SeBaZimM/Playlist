import $ from 'jquery';

function Playlist() {

	var self = this;

	var _elements = [];
	var _hash = "";
	var _areaid = 0;

	var addPlaylistElement = function (mediaFile, duration, areaid, transition) {

		var element = {
			mediaFile: mediaFile,
			duration: duration,
			areaid: areaid,
			transition: transition
		};

		_elements.push(element);
	};

	var generateProcessedPlaylist = function (playlist) {

		var processedPlayList = {};

		typeof playlist === 'string' ?
			playlist = JSON.parse(playlist).playlist :
				playlist = playlist.playlist;

		$.each(playlist, function (key, value) {

			if (typeof value.repetitionFrequency !== 'number')
				return;

			if (Object.keys(processedPlayList).length === 0)
				processedPlayList[0] = new Array();

			if (value.repetitionFrequency < 2)
				processedPlayList[0].push(value);

			else if (typeof processedPlayList[key] === 'undefined'
					|| typeof processedPlayList[value.repetitionFrequency] === 'undefined')

				if (typeof processedPlayList[value.repetitionFrequency] !== 'undefined')
					processedPlayList[value.repetitionFrequency].push(value);
				else
					processedPlayList[value.repetitionFrequency] = new Array(value);

			else processedPlayList[value.repetitionFrequency].push(value);
		});

		return processedPlayList;
	}

	var createWeightedPlaylist = function (playlist) {

		var processedPlayList = generateProcessedPlaylist(playlist);
		var weightedList = [];
		var isWeighted = false;
		var index;

		$.each(processedPlayList[0], function (key_0, value_0) {
			index = 0;

			$.each(processedPlayList, function (key, value) {
				$.each(processedPlayList[key], function (element_key, element) {
					if (key_0 % key === 0 &&
						typeof processedPlayList[index] !== 'undefined') {
						weightedList.push(value[element_key]);
						isWeighted = true;
					}
				});

			});
			index++;
			weightedList.push(value_0);
		});

		if (isWeighted)
			separatePlaylistForWeightedPlay(weightedList);
		else
			return processedPlayList;

		return weightedList;
	}

	var separatePlaylistForWeightedPlay = function (playlist) {

		var weightedList = {};
		var weightedListLength = 0;
		var unweightedList = {};
		var unweightedListLength = 0;

		$.each(playlist, function (key, element) {

			if (element.hasOwnProperty("repetitionFrequency") &&
				element.repetitionFrequency !== null &&
				element.repetitionFrequency > 1) {

				if (weightedList.hasOwnProperty(element.repetitionFrequency))
					weightedList[element.repetitionFrequency + ""].push(element);
				else
					weightedList[element.repetitionFrequency + ""] = [element];

				weightedListLength++;

			} else {

				if (unweightedList[element.repetitionFrequency] === 0 ||
					typeof unweightedList[element.repetitionFrequency] === 'undefined')
					unweightedList[element.repetitionFrequency + ""] = [element];
				else
					unweightedList[element.repetitionFrequency + ""].push(element);

				unweightedListLength++;
			}
		});

		return {
			weightedList: weightedList,
			weightedListLength: weightedListLength,
			unweightedList: unweightedList,
			unweightedListLength: unweightedListLength
		};
	};

	var element = 0;

	function play_playList() {

		var playList = createWeightedPlaylist(jsonPlaylist);
		var screen = document.getElementById('playList_1');
		var text = '', flow = '';
		
		$.each(playList[element], function (key, val) {
			text += `${key} : ${val} <br>`; 
		});
		for (var el of playList) flow += `[ ${el.repetitionFrequency} ] `;
		
		console.log(playList[element]);
		
		screen.innerHTML  = `${flow}<br>`;
		screen.innerHTML += `${text}`;
		
		element++;
		text = '';

		if (element == playList.length)
			element = 0;
	}

	var start_interval = setInterval(play_playList, 2500)
//	play_playList();
}

var jsonPlaylist = '{"playlist":[{"id":1,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":0,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true},{"id":2,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc999501b4.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":1462,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":1,"name":"5b1fc999501b4.jpg","url":"5b1fc999501b4.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc999501b4.jpg","fileSize":1462,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"n6VtpNa9","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc999501b4.jpg","isDownloaded":true},{"id":3,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b2969c5b3d20.mp4","mimeType":{"MIME_GROUP":"VIDEO","MIME_TYPE":"video/mp4"},"size":37879,"updationDate":null,"filehash":"5b2969c5b3d20","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":2,"name":"5b2969c5b3d20.mp4","url":"5b2969c5b3d20.mp4","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b2969c5b3d20.mp4","fileSize":37879,"typeId":{"MIME_GROUP":"VIDEO","MIME_TYPE":"video/mp4"},"type":{"MIME_GROUP":"VIDEO","MIME_TYPE":"video/mp4"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b2969c5b3d20","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b2969c5b3d20.mp4","isDownloaded":true},{"id":4,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b3d03e6457a6.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":2638,"updationDate":null,"filehash":"5b3d03e6457a6","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":2,"name":"5b3d03e6457a6.jpg","url":"5b3d03e6457a6.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b3d03e6457a6.jpg","fileSize":2638,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b3d03e6457a6","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b3d03e6457a6.jpg","isDownloaded":true},{"id":5,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44d0fd89438.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":4224,"updationDate":null,"filehash":"5b44d0fd89438","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":3,"name":"5b44d0fd89438.jpg","url":"5b44d0fd89438.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b44d0fd89438.jpg","fileSize":4224,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b44d0fd89438","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44d0fd89438.jpg","isDownloaded":true},{"id":6,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44e87ac634e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":2542,"updationDate":null,"filehash":"5b44e87ac634e","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":3,"name":"5b44e87ac634e.jpg","url":"5b44e87ac634e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b44e87ac634e.jpg","fileSize":2542,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b44e87ac634e","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44e87ac634e.jpg","isDownloaded":true},{"id":7,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":3,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true},{"id":8,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc999501b4.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":1462,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":5,"name":"5b1fc999501b4.jpg","url":"5b1fc999501b4.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc999501b4.jpg","fileSize":1462,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"n6VtpNa9","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc999501b4.jpg","isDownloaded":true},{"id":9,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b2969c5b3d20.mp4","mimeType":{"MIME_GROUP":"VIDEO","MIME_TYPE":"video/mp4"},"size":37879,"updationDate":null,"filehash":"5b2969c5b3d20","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":5,"name":"5b2969c5b3d20.mp4","url":"5b2969c5b3d20.mp4","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b2969c5b3d20.mp4","fileSize":37879,"typeId":{"MIME_GROUP":"VIDEO","MIME_TYPE":"video/mp4"},"type":{"MIME_GROUP":"VIDEO","MIME_TYPE":"video/mp4"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b2969c5b3d20","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b2969c5b3d20.mp4","isDownloaded":true},{"id":10,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b3d03e6457a6.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":2638,"updationDate":null,"filehash":"5b3d03e6457a6","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":5,"name":"5b3d03e6457a6.jpg","url":"5b3d03e6457a6.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b3d03e6457a6.jpg","fileSize":2638,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b3d03e6457a6","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b3d03e6457a6.jpg","isDownloaded":true},{"id":11,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44d0fd89438.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":4224,"updationDate":null,"filehash":"5b44d0fd89438","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":5,"name":"5b44d0fd89438.jpg","url":"5b44d0fd89438.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b44d0fd89438.jpg","fileSize":4224,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b44d0fd89438","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44d0fd89438.jpg","isDownloaded":true},{"id":12,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44e87ac634e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":2542,"updationDate":null,"filehash":"5b44e87ac634e","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":5,"name":"5b44e87ac634e.jpg","url":"5b44e87ac634e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b44e87ac634e.jpg","fileSize":2542,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b44e87ac634e","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44e87ac634e.jpg","isDownloaded":true},{"id":13,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":0,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true},{"id":14,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":0,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true},{"id":15,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":0,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true},{"id":16,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":0,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true},{"id":17,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":0,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true}]}';

Playlist();
