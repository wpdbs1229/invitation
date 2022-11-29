// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  // document.getElementById("countdown").innerHTML = days + "Day " + hours + "Hour "
  //+ minutes + "Min " + seconds + "Sec ";

  document.getElementById("days").innerText = days,
  document.getElementById("hours").innerText = hours,
  document.getElementById("minutes").innerText = minutes,
  document.getElementById("seconds").innerText = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("#countdown").innerHTML = "EXPIRED";
  }
}, 1000);




// my Song
var mySong = document.getElementById("mySong");
var icon =document.getElementById("icon");

icon.onclick =function(){

  if(mySong.paused){
    mySong.play();
    icon.src ="imgs/pause.png";
  }else{
    mySong.pause();
    icon.src ="imgs/play.png";
  }
}
