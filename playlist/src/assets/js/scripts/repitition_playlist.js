import $ from 'jquery';

function Playlist() {

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
	}

	var createWeightedPlaylist = function (playlist) {

		typeof playlist === 'string' ? playlist = JSON.parse(playlist) : playlist = playlist;
		var processedPlaylist = playlist[Object.keys(playlist)];
		var finalPlaylist = [];
		var unweightList = {},
			weightList = {};

		try {
			var separatedLists = separatePlaylistForWeightedPlay(processedPlaylist);
			unweightList = separatedLists.unweightedList;
			weightList = separatedLists.weightedList;

		} catch (err) {
			console.log("Could not create weighted playlist through separation!")
			return processedPlaylist;
		}

		$.each(unweightList, function (element_key, element_unweightList) {
			$.each(element_unweightList, function (key, element) {
				$.each(weightList, function (weight, wList) {
					if (key % weight === 0) {
						$.each(wList, function (pElementKey, presentationElement) {
							finalPlaylist.push(presentationElement);
						});
					}
				});
				finalPlaylist.push(element);
			});
		});
		return finalPlaylist;
	};

	var separatePlaylistForWeightedPlay = function (playlist) {

		var weightedList = {};
		var weightedListLength = 0;
		var unweightedList = {};
		var unweightedListLength = 0;

		$.each(playlist, function (key, element) {

			if (element.hasOwnProperty("repetitionFrequency") &&
				element.repetitionFrequency !== null &&
				element.repetitionFrequency > 1) {

				weightedList.hasOwnProperty(element.repetitionFrequency) ?
					weightedList[element.repetitionFrequency + ""].push(element) :
					weightedList[element.repetitionFrequency + ""] = [element];

				weightedListLength++;

			} else {
				unweightedList.hasOwnProperty(element.repetitionFrequency) ?
					unweightedList[element.repetitionFrequency + ""].push(element) :
					unweightedList[element.repetitionFrequency + ""] = [element];

				unweightedListLength++;
			}
		});
		return {
			weightedList: weightedList,
			weightedListLength: weightedListLength,
			unweightedList: unweightedList,
			unweightedListLength: unweightedListLength,
		}
	}

	//	 Optional just for output in console and display
	var playList = createWeightedPlaylist(jsonPlaylist);
	var htmlScreen = document.getElementById('playlist'); // test for demo
	var element = 0;

	var time = [];
	var index_time = 0;

	$.each(playList, function (key, val) {
		time.push(val.duration * 1000);
	});

	var play_playList = function () {

		playList[element].remoteUrl.endsWith('mp4') ?
			htmlScreen.innerHTML = `<video src="${playList[element].remoteUrl}" autoplay></video>` :
			htmlScreen.innerHTML = `<img src="${playList[element].remoteUrl}" alt="image">`;

		setTimeout(play_playList, time[index_time])

		element++;
		index_time++;

		if (index_time === time.length)
			index_time = 0;
		if (element == Object.keys(playList).length)
			element = 0;
	}
	play_playList();
}

var jsonPlaylist = {
	"playlist": [{
		"id": 12,
		"filename": "file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg",
		"mimeType": {
			"MIME_GROUP": "IMAGE",
			"MIME_TYPE": "image/jpeg"
		},
		"size": 578,
		"updationDate": null,
		"filehash": null,
		"x": 0,
		"y": 0,
		"width": 100,
		"height": 100,
		"duration": 10,
		"repetitionFrequency": 1,
		"name": "5b1fc99064e3e.jpg",
		"url": "5b1fc99064e3e.jpg",
		"remoteUrl": "http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg",
		"fileSize": 578,
		"typeId": {
			"MIME_GROUP": "IMAGE",
			"MIME_TYPE": "image/jpeg"
		},
		"type": {
			"MIME_GROUP": "IMAGE",
			"MIME_TYPE": "image/jpeg"
		},
		"downloadFromExternalSource": false,
		"downloadFailed": false,
		"isLocal": true,
		"assets": [],
		"ratio": 1,
		"hash": "kOkiCpXi",
		"localFileName": "file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg",
		"isDownloaded": true
	}, {
		"id": 13,
		"filename": "file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc999501b4.jpg",
		"mimeType": {
			"MIME_GROUP": "IMAGE",
			"MIME_TYPE": "image/jpeg"
		},
		"size": 1462,
		"updationDate": null,
		"filehash": null,
		"x": 0,
		"y": 0,
		"width": 100,
		"height": 100,
		"duration": 10,
		"repetitionFrequency": 1,
		"name": "5b1fc999501b4.jpg",
		"url": "5b1fc999501b4.jpg",
		"remoteUrl": "http://api.wmc2.staging.wizai.com/uploads//5b1fc999501b4.jpg",
		"fileSize": 1462,
		"typeId": {
			"MIME_GROUP": "IMAGE",
			"MIME_TYPE": "image/jpeg"
		},
		"type": {
			"MIME_GROUP": "IMAGE",
			"MIME_TYPE": "image/jpeg"
		},
		"downloadFromExternalSource": false,
		"downloadFailed": false,
		"isLocal": true,
		"assets": [],
		"ratio": 1,
		"hash": "n6VtpNa9",
		"localFileName": "file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc999501b4.jpg",
		"isDownloaded": true
	}, {
		"id": 20,
		"filename": "file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b2969c5b3d20.mp4",
		"mimeType": {
			"MIME_GROUP": "VIDEO",
			"MIME_TYPE": "video/mp4"
		},
		"size": 37879,
		"updationDate": null,
		"filehash": "5b2969c5b3d20",
		"x": 0,
		"y": 0,
		"width": 100,
		"height": 100,
		"duration": 63,
		"repetitionFrequency": 1,
		"name": "5b2969c5b3d20.mp4",
		"url": "5b2969c5b3d20.mp4",
		"remoteUrl": "http://api.wmc2.staging.wizai.com/uploads//5b2969c5b3d20.mp4",
		"fileSize": 37879,
		"typeId": {
			"MIME_GROUP": "VIDEO",
			"MIME_TYPE": "video/mp4"
		},
		"type": {
			"MIME_GROUP": "VIDEO",
			"MIME_TYPE": "video/mp4"
		},
		"downloadFromExternalSource": false,
		"downloadFailed": false,
		"isLocal": true,
		"assets": [],
		"ratio": 1,
		"hash": "5b2969c5b3d20",
		"localFileName": "file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b2969c5b3d20.mp4",
		"isDownloaded": true
	}, {
		"id": 24,
		"filename": "file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b3d03e6457a6.jpg",
		"mimeType": {
			"MIME_GROUP": "IMAGE",
			"MIME_TYPE": "image/jpeg"
		},
		"size": 2638,
		"updationDate": null,
		"filehash": "5b3d03e6457a6",
		"x": 0,
		"y": 0,
		"width": 100,
		"height": 100,
		"duration": 10,
		"repetitionFrequency": 5,
		"name": "5b3d03e6457a6.jpg",
		"url": "5b3d03e6457a6.jpg",
		"remoteUrl": "http://api.wmc2.staging.wizai.com/uploads//5b3d03e6457a6.jpg",
		"fileSize": 2638,
		"typeId": {
			"MIME_GROUP": "IMAGE",
			"MIME_TYPE": "image/jpeg"
		},
		"type": {
			"MIME_GROUP": "IMAGE",
			"MIME_TYPE": "image/jpeg"
		},
		"downloadFromExternalSource": false,
		"downloadFailed": false,
		"isLocal": true,
		"assets": [],
		"ratio": 1,
		"hash": "5b3d03e6457a6",
		"localFileName": "file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b3d03e6457a6.jpg",
		"isDownloaded": true
	}, {
		"id": 40,
		"filename": "file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44d0fd89438.jpg",
		"mimeType": {
			"MIME_GROUP": "IMAGE",
			"MIME_TYPE": "image/jpeg"
		},
		"size": 4224,
		"updationDate": null,
		"filehash": "5b44d0fd89438",
		"x": 0,
		"y": 0,
		"width": 100,
		"height": 100,
		"duration": 10,
		"repetitionFrequency": 3,
		"name": "5b44d0fd89438.jpg",
		"url": "5b44d0fd89438.jpg",
		"remoteUrl": "http://api.wmc2.staging.wizai.com/uploads//5b44d0fd89438.jpg",
		"fileSize": 4224,
		"typeId": {
			"MIME_GROUP": "IMAGE",
			"MIME_TYPE": "image/jpeg"
		},
		"type": {
			"MIME_GROUP": "IMAGE",
			"MIME_TYPE": "image/jpeg"
		},
		"downloadFromExternalSource": false,
		"downloadFailed": false,
		"isLocal": true,
		"assets": [],
		"ratio": 1,
		"hash": "5b44d0fd89438",
		"localFileName": "file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44d0fd89438.jpg",
		"isDownloaded": true
	}, {
		"id": 43,
		"filename": "file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44e87ac634e.jpg",
		"mimeType": {
			"MIME_GROUP": "IMAGE",
			"MIME_TYPE": "image/jpeg"
		},
		"size": 2542,
		"updationDate": null,
		"filehash": "5b44e87ac634e",
		"x": 0,
		"y": 0,
		"width": 100,
		"height": 100,
		"duration": 10,
		"repetitionFrequency": 2,
		"name": "5b44e87ac634e.jpg",
		"url": "5b44e87ac634e.jpg",
		"remoteUrl": "http://api.wmc2.staging.wizai.com/uploads//5b44e87ac634e.jpg",
		"fileSize": 2542,
		"typeId": {
			"MIME_GROUP": "IMAGE",
			"MIME_TYPE": "image/jpeg"
		},
		"type": {
			"MIME_GROUP": "IMAGE",
			"MIME_TYPE": "image/jpeg"
		},
		"downloadFromExternalSource": false,
		"downloadFailed": false,
		"isLocal": true,
		"assets": [],
		"ratio": 1,
		"hash": "5b44e87ac634e",
		"localFileName": "file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44e87ac634e.jpg",
		"isDownloaded": true
	}]
};

Playlist();
