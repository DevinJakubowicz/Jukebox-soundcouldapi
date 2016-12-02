$(document).ready(function(){
	SC.initialize ({
		client_id: "fd4e76fc67798bfa742089ed619084a6"
		})

var myJukebox = new Jukebox();

	var playButton = document.getElementById("playBtn") 

	var pauseButton = document.getElementById("pauseBtn")
	var playlist = [];
	var player = document.getElementById("player")
	i = 0;

	playButton.addEventListener("click", myJukebox.play); 

	pauseButton.addEventListener("click", myJukebox.pause);

})
	

function Jukebox () {

	}

	SC.get("/tracks/" + track.d[i]).then(function(response) {   
	  console.log(response);

	$("#playBtn").click(function(){
		i = i + 1;

	SC.stream("/tracks/" + track.id[i]).then(function(player){ 
	Jukebox.play = player.play(); 
	 	});
	});

	var pauseBtn = document.getElementById("pauseBtn");

	$("#pauseBtn").click(function(player){
	Jukebox.pause = player.pause();
		})

	var nextBtn = document.getElementById("nextBtn");

	$("#nextBtn").click(function(){
		if (i == (playlist.length - 1)){
			i = 0;
			}
			else {
				i++;
			}
		})

});
	