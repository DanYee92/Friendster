
//define a table array with the same fields in the survey form

var friends = [
  {
  name: "Dan",
  photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
  scores: [
  "4",
  "2",
  "5",
  "8",
  "3",
  "2",
  "2",
  "1",
  "3",
  "2"
  ]
  },
{
name: "Jacob Deming",
photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
scores: [
"4",
"2",
"5",
"1",
"3",
"2",
"2",
"1",
"3",
"2"
]
},
{
name: "Jeremiah Scanlon",
photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
scores: [
"5",
"2",
"2",
"2",
"4",
"1",
"3",
"2",
"5",
"5"
]
}
];

// module exports of the table array where I can require this module in other JS files and use the data inside here similar to when we require in a node module.
module.exports = friends;
