  app.service('movieService', function(){
    var myMovies = 
    [{rank: 4, name:"AnchorMan", year:1994, desc:'funny ass movie, are you a man? do you think a woman should be in the kitchen all day? Watch this',img:'https://upload.wikimedia.org/wikipedia/en/6/64/Movie_poster_Anchorman_The_Legend_of_Ron_Burgundy.jpg' , cost:10},
     {rank: 6, name:"AnchorMan-2", year:2013, desc:'liked AnchorMan??? Than you will probably be dissapointed from this movie!',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJfHF5oy0OLAU2vROfKaaD0d1wc0Qi9dLAEk1gJuzpgl0CHgL' , cost:10},
     {rank: 3, name:"SuperBad", year:2007, desc:'The marvolos tale of mcLoven the gentle lover and his fat friend that played in the wolf of wallstreet',img:'https://upload.wikimedia.org/wikipedia/en/8/8b/Superbad_Poster.png' , cost:10},
     {rank: 2, name:"Borat", year:2006, desc:'Lets make fun of the Kazakstaniens fuck i cant write that shit. ',img:'https://upload.wikimedia.org/wikipedia/en/3/39/Borat_ver2.jpg' , cost:10},
     {rank: 5, name:"Zoolander", year:2001, desc:'The tale of the most hansome ugly male fashion model with the creepy stare',img:'https://upload.wikimedia.org/wikipedia/en/7/7c/Movie_poster_zoolander.jpg' , cost:10},
     {rank: 1, name:"Hangover", year:2009, desc:'Four stupid friends are going to a bachlor party in vegas and almost kills their own friend that almost didnt get married because of a small chinese man',img:'https://upload.wikimedia.org/wikipedia/en/b/b9/Hangoverposter09.jpg' , cost:10}];
    return {movieList: myMovies};

    var movieYear = 
    [{year: 1994},{year: 1995},{year: 1996},{year: 1997},{year: 1998},{year: 1999},{year: 2000},{year: 2001},{year: 2002},
    {year: 2003},{year: 2004},{year: 2005},{year: 2006},{year: 2007},{year: 2008},{year: 2009},{year: 2010},{year: 2011},
    {year: 2012},{year: 2013},{year: 2014},{year: 2015},{year: 2016}
    ];
    return {yearList: movieYear}
  });
