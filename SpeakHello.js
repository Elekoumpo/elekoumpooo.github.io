// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
(function helloSpeaker(name){
  var helloSpeaker={namee:name,
    speak:function(){
    var speakWord = "Good Bye";
    console.log(speakWord + " " + helloSpeaker.namee);
  }};

})();
