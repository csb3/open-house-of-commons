const parser = require('fast-xml-parser');
const fs = require('fs');

// // Votes
// fs.readFile('./xml.xml', 'utf8', (err, data) => {
//   var jsonObj = parser.parse(data);
//   console.log(jsonObj.ArrayOfVoteParticipant.VoteParticipant[0]);
// });

// Current MPs
fs.readFile('./mps.xml', 'utf8', (err, data) => {
  console.log(parser.parse(data).ArrayOfMemberOfParliament.MemberOfParliament[0]);
});


// { ArrayOfMemberOfParliament:
//   { MemberOfParliament: