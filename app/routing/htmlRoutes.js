
//include path package to deliver pages with express
var path=require("path");

//pass in parameter app which is the express
//include these paths inside the module.exports so I can include these paths in my server later.
module.exports=function(app){
  //when user hits the currentURL/survey, we deliver the file survey.html
app.get("/survey", function(req, res){
  res.sendFile(path.join(__dirname, "/../public/survey.html"))
});


app.get("*",function(req,res){
  res.sendFile(path.join(__dirname, "/../public/home.html"))
})



}
