import $ from 'jquery';


function Playlist(){

	var _elements = [];
	var _hash = "";
	var _areaid = 0;

	var addPlaylistElement = function(mediaFile, duration, areaid, transition ) 
	{
		var element = {
			mediaFile : mediaFile,
			duration : duration,
			areaid : areaid,
			transition: transition
		};

		_elements.push(element);
	};

    /**
	 * Creates weighted playlist by separating the playlist into a weighted part and non-weighted part.
	 * Iterates through the non weighted list and perform modulo operation on run index to check whether
	 * a block of the weighted list should be inserted into the final playlist or not.
	 *
	 * Be aware that there could be (by user fault) more weighted entries than non-weighted this method just inserts
	 * the weighted into the unweighted and not processing this special case by re-sorting the weighted list again against
	 * itself. Thus leads to appending the whole weighted list to a playlist but sorted asc. by their weight.
	 *
	 * Next thing to consider / implement : do we want to keep all elements of a presentation together or may they
	 * be separated by weighted elements from different presentation ?
	 *
     * @param playlist
     * @return {*}
     */
	var createWeightedPlaylist = function (playlist) {
		
		typeof playlist === 'string' ? 
			playlist = JSON.parse(playlist).playlist :
				playlist = playlist;
		
		var weightList = {};
		var weightedPlaylist = [];
		var processedPlaylist = playlist;

		try {
			var separatedLists = separatePlaylistForWeightedPlay(processedPlaylist);
		}
		catch (e) {
			console.log("Could not create weighted playlist through separation!")
			return processedPlaylist;
		}

		var lastPresentationId = null;
		var runIndex = 0, 
			weightIndex = 0,
			unweightIndex = 0;
		
		var test = 0;
		$.each(separatedLists.unweightedList[unweightIndex], function (key, element) {
			$.each(separatedLists.weightedList, function(weight, wList){
				if (runIndex % weight === 0) {
					$.each(wList, function(pElementKey, presentationElement) {
						weightedPlaylist.push(presentationElement);
					});
				}
				weightIndex++;
			});
			if (lastPresentationId == null) 
				lastPresentationId = element.id;
			if (runIndex === 0 || lastPresentationId === element.id) {
				weightedPlaylist.push(element);
//				processedPlaylist.push(element);
				if (runIndex === 0) runIndex++;
				
                return;
			} else {
				weightedPlaylist.push(element)
			}
				console.log('element',element.repetitionFrequency,element)
			

			//TODO: implement what should happen if weighted list is longer than unweighted playlist

			runIndex++;
			unweightIndex++;
		});
		
		console.log(weightedPlaylist)
		return processedPlaylist;
	};

	var separatePlaylistForWeightedPlay = function (playlist) {

		var weightedList = {};
		var weightedListLength = 0;

		var unweightedList = {};
		var unweightedListLength = 0;

		if (playlist.length === 0) {
			console.log("Playlist was empty. Could not create weight list!");
			return { weightedList: weightedList, unweightedList: playlist };
		}

		$.each(playlist, function (key, element){
			if (element.hasOwnProperty("repetitionFrequency") 
				&& element.repetitionFrequency !== null 
				&& element.repetitionFrequency > 1) {
				
				if (weightedList.hasOwnProperty(element.repetitionFrequency)) 
					weightedList[element.repetitionFrequency + ""].push(element);
				else 
					weightedList[element.repetitionFrequency + ""] = [element];
				
                weightedListLength++;
			} else {
				if (unweightedList.hasOwnProperty(element.repetitionFrequency)) 
					unweightedList[element.repetitionFrequency + ""].push(element);	
				else 
					unweightedList[element.repetitionFrequency + ""] = [element];
				
                unweightedListLength++;
			}
		});
		
		console.log('weightedList',weightedList,weightedListLength)
		console.log('unweightedList',unweightedList,unweightedListLength)
		
		return {
			weightedList: weightedList,
			weightedListLength: weightedListLength,
			unweightedList: unweightedList,
			unweightedListLength: unweightedListLength
		}
	}
	
	
	createWeightedPlaylist(jsonPlaylist)
}


var jsonPlaylist = '{"playlist":[{"id":1,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":0,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true},{"id":2,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc999501b4.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":1462,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":1,"name":"5b1fc999501b4.jpg","url":"5b1fc999501b4.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc999501b4.jpg","fileSize":1462,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"n6VtpNa9","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc999501b4.jpg","isDownloaded":true},{"id":3,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b2969c5b3d20.mp4","mimeType":{"MIME_GROUP":"VIDEO","MIME_TYPE":"video/mp4"},"size":37879,"updationDate":null,"filehash":"5b2969c5b3d20","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":2,"name":"5b2969c5b3d20.mp4","url":"5b2969c5b3d20.mp4","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b2969c5b3d20.mp4","fileSize":37879,"typeId":{"MIME_GROUP":"VIDEO","MIME_TYPE":"video/mp4"},"type":{"MIME_GROUP":"VIDEO","MIME_TYPE":"video/mp4"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b2969c5b3d20","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b2969c5b3d20.mp4","isDownloaded":true},{"id":4,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b3d03e6457a6.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":2638,"updationDate":null,"filehash":"5b3d03e6457a6","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":2,"name":"5b3d03e6457a6.jpg","url":"5b3d03e6457a6.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b3d03e6457a6.jpg","fileSize":2638,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b3d03e6457a6","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b3d03e6457a6.jpg","isDownloaded":true},{"id":5,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44d0fd89438.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":4224,"updationDate":null,"filehash":"5b44d0fd89438","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":3,"name":"5b44d0fd89438.jpg","url":"5b44d0fd89438.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b44d0fd89438.jpg","fileSize":4224,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b44d0fd89438","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44d0fd89438.jpg","isDownloaded":true},{"id":6,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44e87ac634e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":2542,"updationDate":null,"filehash":"5b44e87ac634e","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":3,"name":"5b44e87ac634e.jpg","url":"5b44e87ac634e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b44e87ac634e.jpg","fileSize":2542,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b44e87ac634e","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44e87ac634e.jpg","isDownloaded":true},{"id":7,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":3,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true},{"id":8,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc999501b4.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":1462,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":5,"name":"5b1fc999501b4.jpg","url":"5b1fc999501b4.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc999501b4.jpg","fileSize":1462,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"n6VtpNa9","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc999501b4.jpg","isDownloaded":true},{"id":9,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b2969c5b3d20.mp4","mimeType":{"MIME_GROUP":"VIDEO","MIME_TYPE":"video/mp4"},"size":37879,"updationDate":null,"filehash":"5b2969c5b3d20","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":5,"name":"5b2969c5b3d20.mp4","url":"5b2969c5b3d20.mp4","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b2969c5b3d20.mp4","fileSize":37879,"typeId":{"MIME_GROUP":"VIDEO","MIME_TYPE":"video/mp4"},"type":{"MIME_GROUP":"VIDEO","MIME_TYPE":"video/mp4"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b2969c5b3d20","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b2969c5b3d20.mp4","isDownloaded":true},{"id":10,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b3d03e6457a6.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":2638,"updationDate":null,"filehash":"5b3d03e6457a6","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":5,"name":"5b3d03e6457a6.jpg","url":"5b3d03e6457a6.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b3d03e6457a6.jpg","fileSize":2638,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b3d03e6457a6","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b3d03e6457a6.jpg","isDownloaded":true},{"id":11,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44d0fd89438.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":4224,"updationDate":null,"filehash":"5b44d0fd89438","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":5,"name":"5b44d0fd89438.jpg","url":"5b44d0fd89438.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b44d0fd89438.jpg","fileSize":4224,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b44d0fd89438","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44d0fd89438.jpg","isDownloaded":true},{"id":12,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44e87ac634e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":2542,"updationDate":null,"filehash":"5b44e87ac634e","x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":5,"name":"5b44e87ac634e.jpg","url":"5b44e87ac634e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b44e87ac634e.jpg","fileSize":2542,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"5b44e87ac634e","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b44e87ac634e.jpg","isDownloaded":true},{"id":13,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":0,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true},{"id":14,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":0,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true},{"id":15,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":0,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true},{"id":16,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":0,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true},{"id":17,"filename":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","mimeType":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"size":578,"updationDate":null,"filehash":null,"x":0,"y":0,"width":100,"height":100,"duration":10,"repetitionFrequency":0,"name":"5b1fc99064e3e.jpg","url":"5b1fc99064e3e.jpg","remoteUrl":"http://api.wmc2.staging.wizai.com/uploads//5b1fc99064e3e.jpg","fileSize":578,"typeId":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"type":{"MIME_GROUP":"IMAGE","MIME_TYPE":"image/jpeg"},"downloadFromExternalSource":false,"downloadFailed":false,"isLocal":true,"assets":[],"ratio":1,"hash":"kOkiCpXi","localFileName":"file:///opt/usr/home/owner/apps_rw/5pr6vCGXHr/data/media/5b1fc99064e3e.jpg","isDownloaded":true}]}';

Playlist();
