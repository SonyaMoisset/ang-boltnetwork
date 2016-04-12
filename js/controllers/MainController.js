app.controller('MainController', ['$scope', function($scope) {
  $scope.programs = [
    {
	  series: "The 100",
	  series_img: "img/the100.jpg",
	  genre: "SciFi",
	  season: 3,
	  episode: "Thirteen",
	  description: "Lexa tries to maintain peace within the clans; Clarke discovers an unusual and game-changing truth; flashbacks reveal a dark chapter of humanity's past.",
	  datetime: new Date(2016, 02, 03, 21, 00, 00, 00)
	  },
    {
    series: "Fear The Walking Dead",
    series_img: "img/ftwd.jpg",
    genre: "Horror",
    season: 2,
    episode: "Monster",
    description: "Travis, Madison, and their blended family set sail on Strand's boat off the coast of California in an effort to escape the apocalypse. While they're looking for safety, they only find more threats and trouble at sea.",
    datetime: new Date(2016, 03, 10, 21, 00, 00, 00)
  },
	  {
	  series: "The Flash",
	  series_img: "img/flash.jpg",
	  genre: "Super Heroes",
	  season: 2,
	  episode: "Legends of Today",
	  description: "In its Second Major Crossover Event with Arrow, Vandal Savage (Guest Star Casper Crump) arrives in Central City and sets his sights on Kendra Saunders (Guest Star Ciara Renee). After Vandal attacks Kendra and Cisco (Carlos Valdes), they turn to Barry (Grant Gustin) for help. Realizing how dangerous Vandal is, Barry takes Kendra to Star City and asks Oliver and Team to hide her until he can figure out how to stop Vandal.",
	  datetime: new Date(2015, 11, 01, 21, 00, 00, 00)
  },
  {
  series: "Supergirl",
  series_img: "img/sg.jpg",
  genre: "Super Heroes",
  season: 1,
  episode: "Falling",
  description: "After being exposed to red kryptonite, Kara turns malicious and becomes a danger to her friends and to the people of National City; Cat discusses Supergirl on 'The Talk'.",
  datetime: new Date(2016, 02, 14, 21, 00, 00, 00)
},
{
series: "Arrow",
series_img: "img/arrow.jpg",
genre: "Super Heroes",
season: 4,
episode: "Eleven-Fifty-Nine",
description: "Oliver and Diggle find out Merlyn wants to break Darhk out of prison; Laurel gets a surprising offer; Felicity has a talk with Curtis.",
datetime: new Date(2016, 03, 06, 21, 00, 00, 00)
}
  ];
}]);
