import $ from 'jquery';

function Playlist() {

	var _elements = [];
	var _hash = '';
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

	/**
	 * Creates weighted playlist by separating the playlist into a weighted part and non-weighted part.
	 * Iterates through the non weighted list and perform modulo operation on run index to check whether
	 * a block of the weighted list should be inserted into the final playlist or not.
	 *
	 * Be aware that there could be (by user fault) more weighted entries than non-weighted this method just inserts
	 * the weighted into the unweighted and not processing this special case by re-sorting the weighted list again against
	 * itself. Thus leads to appending the whole weighted list to a playlist but sorted asc. by their weight.
	 * Next thing to consider / implement : do we want to keep all elements of a presentation together or may they
	 * be separated by weighted elements from different presentation ?
	 * 
	 * @param playlist
	 * @return {*}
	 */
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
			console.log('Could not create weighted playlist through separation!')
			return processedPlaylist;
		}

		// INDEX   : 0 0 1 2 2 3 4 4 5 6 6 7 8 8 9 10 10
		// PLAYLIST: 2 0 0 2 0 0 2 0 0 2 0 0 2 0 0  2 0

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

	/**
	 * Iterates through default playlist and stores repetition frequeny in separate list.
	 * 
	 * @param playlist
	 * @return object
	 */
	var separatePlaylistForWeightedPlay = function (playlist) {

		var weightedList = {};
		var weightedListLength = 0;
		var unweightedList = {};
		var unweightedListLength = 0;

		$.each(playlist, function (key, element) {

			if (element.hasOwnProperty('repetitionFrequency') &&
				element.repetitionFrequency !== null &&
				element.repetitionFrequency > 1) {

				weightedList.hasOwnProperty(element.repetitionFrequency) ?
					weightedList[element.repetitionFrequency + ''].push(element) :
					weightedList[element.repetitionFrequency + ''] = [element];

				weightedListLength++;

			} else {
				unweightedList.hasOwnProperty(element.repetitionFrequency) ?
					unweightedList[element.repetitionFrequency + ''].push(element) :
					unweightedList[element.repetitionFrequency + ''] = [element];

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

	function setOutput() {

		//	 Optional just for output in console and display
		var playList = createWeightedPlaylist(jsonPlaylist);
		var htmlScreen = document.getElementById('playlist'); // test for demo
		var htmlTicker = document.getElementById('ticker'); // test for demo
		var element = 0;

		var time = [];
		var index_time = 0;

		$.each(playList, function (key, val) {
			time.push(val.duration * 1000);
		});

		var play_playList = function () {

			playList[element].remoteUrl.endsWith('mp4') ?
				htmlScreen.innerHTML = `<video class='cell large-12 auto' src='${playList[element].remoteUrl}' autoplay loop></video>` :
				htmlScreen.innerHTML = `<img class='cell large-12' src='${playList[element].remoteUrl}' alt='${playList[element].name}'>`;

			htmlTicker.innerHTML = `Name: ${playList[element].name}<br>RemoteUrl: ${playList[element].remoteUrl}`;

			setTimeout(play_playList, time[index_time]);

			element++;
			index_time++;

			if (index_time === time.length)
				index_time = 0;
			if (element == Object.keys(playList).length)
				element = 0;
		}
		play_playList();
	}
	setOutput()
}

var jsonPlaylist = {
	'playlist': [{
		'id': 12,
		'filename': 'file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg',
		'mimeType': {
			'MIME_GROUP': 'IMAGE',
			'MIME_TYPE': 'image/jpeg'
		},
		'size': 578,
		'updationDate': null,
		'filehash': null,
		'x': 0,
		'y': 0,
		'width': 100,
		'height': 100,
		'duration': 10,
		'repetitionFrequency': 0,
		'name': '5b1fc99064e3e.jpg',
		'url': '5b1fc99064e3e.jpg',
		'remoteUrl': 'http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg',
		'fileSize': 578,
		'typeId': {
			'MIME_GROUP': 'IMAGE',
			'MIME_TYPE': 'image/jpeg'
		},
		'type': {
			'MIME_GROUP': 'IMAGE',
			'MIME_TYPE': 'image/jpeg'
		},
		'downloadFromExternalSource': false,
		'downloadFailed': false,
		'isLocal': true,
		'assets': [],
		'ratio': 1,
		'hash': 'kOkiCpXi',
		'localFileName': 'file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg',
		'isDownloaded': true
	}, {
		'id': 13,
		'filename': 'file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc999501b4.jpg',
		'mimeType': {
			'MIME_GROUP': 'IMAGE',
			'MIME_TYPE': 'image/jpeg'
		},
		'size': 1462,
		'updationDate': null,
		'filehash': null,
		'x': 0,
		'y': 0,
		'width': 100,
		'height': 100,
		'duration': 10,
		'repetitionFrequency': 0,
		'name': '5b1fc999501b4.jpg',
		'url': '5b1fc999501b4.jpg',
		'remoteUrl': 'http://api.wmc2.staging.wizai.com/uploads//5b1fc999501b4.jpg',
		'fileSize': 1462,
		'typeId': {
			'MIME_GROUP': 'IMAGE',
			'MIME_TYPE': 'image/jpeg'
		},
		'type': {
			'MIME_GROUP': 'IMAGE',
			'MIME_TYPE': 'image/jpeg'
		},
		'downloadFromExternalSource': false,
		'downloadFailed': false,
		'isLocal': true,
		'assets': [],
		'ratio': 1,
		'hash': 'n6VtpNa9',
		'localFileName': 'file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc999501b4.jpg',
		'isDownloaded': true
	}, {
		'id': 20,
		'filename': 'file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b2969c5b3d20.mp4',
		'mimeType': {
			'MIME_GROUP': 'VIDEO',
			'MIME_TYPE': 'video/mp4'
		},
		'size': 37879,
		'updationDate': null,
		'filehash': '5b2969c5b3d20',
		'x': 0,
		'y': 0,
		'width': 100,
		'height': 100,
		'duration': 63,
		'repetitionFrequency': 0,
		'name': '5b2969c5b3d20.mp4',
		'url': '5b2969c5b3d20.mp4',
		'remoteUrl': 'http://api.wmc2.staging.wizai.com/uploads//5b2969c5b3d20.mp4',
		'fileSize': 37879,
		'typeId': {
			'MIME_GROUP': 'VIDEO',
			'MIME_TYPE': 'video/mp4'
		},
		'type': {
			'MIME_GROUP': 'VIDEO',
			'MIME_TYPE': 'video/mp4'
		},
		'downloadFromExternalSource': false,
		'downloadFailed': false,
		'isLocal': true,
		'assets': [],
		'ratio': 1,
		'hash': '5b2969c5b3d20',
		'localFileName': 'file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b2969c5b3d20.mp4',
		'isDownloaded': true
	}, {
		'id': 24,
		'filename': 'file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b3d03e6457a6.jpg',
		'mimeType': {
			'MIME_GROUP': 'IMAGE',
			'MIME_TYPE': 'image/jpeg'
		},
		'size': 2638,
		'updationDate': null,
		'filehash': '5b3d03e6457a6',
		'x': 0,
		'y': 0,
		'width': 100,
		'height': 100,
		'duration': 10,
		'repetitionFrequency': 0,
		'name': '5b3d03e6457a6.jpg',
		'url': '5b3d03e6457a6.jpg',
		'remoteUrl': 'http://api.wmc2.staging.wizai.com/uploads//5b3d03e6457a6.jpg',
		'fileSize': 2638,
		'typeId': {
			'MIME_GROUP': 'IMAGE',
			'MIME_TYPE': 'image/jpeg'
		},
		'type': {
			'MIME_GROUP': 'IMAGE',
			'MIME_TYPE': 'image/jpeg'
		},
		'downloadFromExternalSource': false,
		'downloadFailed': false,
		'isLocal': true,
		'assets': [],
		'ratio': 1,
		'hash': '5b3d03e6457a6',
		'localFileName': 'file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b3d03e6457a6.jpg',
		'isDownloaded': true
	}, {
		'id': 40,
		'filename': 'file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44d0fd89438.jpg',
		'mimeType': {
			'MIME_GROUP': 'IMAGE',
			'MIME_TYPE': 'image/jpeg'
		},
		'size': 4224,
		'updationDate': null,
		'filehash': '5b44d0fd89438',
		'x': 0,
		'y': 0,
		'width': 100,
		'height': 100,
		'duration': 10,
		'repetitionFrequency': 0,
		'name': '5b44d0fd89438.jpg',
		'url': '5b44d0fd89438.jpg',
		'remoteUrl': 'http://api.wmc2.staging.wizai.com/uploads//5b44d0fd89438.jpg',
		'fileSize': 4224,
		'typeId': {
			'MIME_GROUP': 'IMAGE',
			'MIME_TYPE': 'image/jpeg'
		},
		'type': {
			'MIME_GROUP': 'IMAGE',
			'MIME_TYPE': 'image/jpeg'
		},
		'downloadFromExternalSource': false,
		'downloadFailed': false,
		'isLocal': true,
		'assets': [],
		'ratio': 1,
		'hash': '5b44d0fd89438',
		'localFileName': 'file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44d0fd89438.jpg',
		'isDownloaded': true
	}, {
		'id': 43,
		'filename': 'file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44e87ac634e.jpg',
		'mimeType': {
			'MIME_GROUP': 'IMAGE',
			'MIME_TYPE': 'image/jpeg'
		},
		'size': 2542,
		'updationDate': null,
		'filehash': '5b44e87ac634e',
		'x': 0,
		'y': 0,
		'width': 100,
		'height': 100,
		'duration': 10,
		'repetitionFrequency': 2,
		'name': '5b44e87ac634e.jpg',
		'url': '5b44e87ac634e.jpg',
		'remoteUrl': 'http://api.wmc2.staging.wizai.com/uploads//5b44e87ac634e.jpg',
		'fileSize': 2542,
		'typeId': {
			'MIME_GROUP': 'IMAGE',
			'MIME_TYPE': 'image/jpeg'
		},
		'type': {
			'MIME_GROUP': 'IMAGE',
			'MIME_TYPE': 'image/jpeg'
		},
		'downloadFromExternalSource': false,
		'downloadFailed': false,
		'isLocal': true,
		'assets': [],
		'ratio': 1,
		'hash': '5b44e87ac634e',
		'localFileName': 'file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44e87ac634e.jpg',
		'isDownloaded': true
	}]
};

Playlist();
