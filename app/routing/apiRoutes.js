var friends=require("../data/friends.js");


module.exports=function(app){
// A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
app.get("/api/friends", function(req, res){
  res.json(friends);
});

// This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post("/api/friends", function(req, res){

var bestMatch={
  name: "",
  photo: "",
  //track how closely related they are
  friendDifference: 1000
};
console.log(req.body);

//assign the results to a variable
var userData=req.body;
var userScores=userData.scores;

console.log(userScores);
//assign the difference between the users scores with eachother
 var totalDifference=0;

//compare the scores with the rest of the users userScores
for(var i=0;i<friends.length;i++){

console.log(friends[i]);
totalDifference=0;

for(var j=0;j<friends[i].scores[j];j++){

  totalDifference+=Math.abs(parseInt(userScores[j])-parseInt(friends[i].scores[j]));

//if the sum of differences is less than the differences of the current best match
  if(totalDifference < bestMatch.friendDifference){
    //reset the bestMatch to be the new best friend
    bestMatch.name=friends[i].name;
    bestMatch.photo=friends[i].photo;
    bestMatch.friendDifference=totalDifference;

  }
}
}

//add the userDatato the friends array
friends.push(userData);

//return a JSON with the user's bestMatch. this will be used by the html in the next page
res.json(bestMatch);

});
}
