const mp_votes = [
{"mp_id":25449,"voted_yea":true,"voted_nay":false,"vote_paired":false,"motion_id":1, party_name: "Liberal"},
{"mp_id":14171,"voted_yea":true,"voted_nay":false,"vote_paired":false,"motion_id":1, party_name: "Conservative"},
{"mp_id":58841,"voted_yea":false,"voted_nay":true,"vote_paired":false,"motion_id":1, party_name: "Liberal"},
{"mp_id":88961,"voted_yea":true,"voted_nay":false,"vote_paired":false,"motion_id":1, party_name: "Liberal"},
{"mp_id":105802,"voted_yea":false,"voted_nay":true,"vote_paired":false,"motion_id":1, party_name: "Bloc Quebecois"},
{"mp_id":25524,"voted_yea":false,"voted_nay":true,"vote_paired":false,"motion_id":1, party_name: "Liberal"},
{"mp_id":105511,"voted_yea":false,"voted_nay":true,"vote_paired":false,"motion_id":1, party_name: "Liberal"},
{"mp_id":88530,"voted_yea":true,"voted_nay":false,"vote_paired":false,"motion_id":1, party_name: "Green"},
{"mp_id":71588,"voted_yea":false,"voted_nay":true,"vote_paired":false,"motion_id":1, party_name: "Liberal"},
{"mp_id":9486,"voted_yea":true,"voted_nay":false,"vote_paired":false,"motion_id":1, party_name: "Liberal"},
{"mp_id":58858,"voted_yea":true,"voted_nay":false,"vote_paired":false,"motion_id":1, party_name: "Conservative"},
{"mp_id":59265,"voted_yea":false,"voted_nay":true,"vote_paired":false,"motion_id":1, party_name: "Conservative"},
 {"mp_id":104544,"voted_yea":true,"voted_nay":false,"vote_paired":false,"motion_id":1, party_name: "Liberal"},
 {"mp_id":105210,"voted_yea":false,"voted_nay":true,"vote_paired":false,"motion_id":1, party_name: "NDP"},
 {"mp_id":58621,"voted_yea":true,"voted_nay":false,"vote_paired":false,"motion_id":1, party_name: "NDP"},
 {"mp_id":88333,"voted_yea":true,"voted_nay":false,"vote_paired":false,"motion_id":1, party_name: "Liberal"},
 {"mp_id":3306,"voted_yea":false,"voted_nay":true,"vote_paired":false,"motion_id":1, party_name: "Conservative"},
 {"mp_id":58878,"voted_yea":false,"voted_nay":true,"vote_paired":false,"motion_id":1, party_name: "Conservative"},
 {"mp_id":107097,"voted_yea":true,"voted_nay":false,"vote_paired":false,"motion_id":1, party_name: "NDP"},
{"mp_id":88860,"voted_yea":true,"voted_nay":false,"vote_paired":false,"motion_id":1, party_name: "Bloc Quebecois"}
];

const mps = [
  {id: 25449, party_name: "Liberal", first_name: "John", last_name: "Smith"},
  {id: 14171, party_name: "Conservative", first_name: "John", last_name: "Smith"},
  {id: 58841, party_name: "Liberal", first_name: "John", last_name: "Smith"},
  {id: 88961, party_name: "Conservative", first_name: "John", last_name: "Smith"},
  {id: 105802, party_name: "Liberal", first_name: "John", last_name: "Smith"},
  {id: 25524, party_name: "Conservative", first_name: "John", last_name: "Smith"},
  {id: 105511, party_name: "Liberal", first_name: "John", last_name: "Smith"},
  {id: 88530, party_name: "Conservative", first_name: "John", last_name: "Smith"},
  {id: 71588, party_name: "Green", first_name: "John", last_name: "Smith"},
  {id: 9486, party_name: "Liberal", first_name: "John", last_name: "Smith"},
  {id: 58858, party_name: "Conservative", first_name: "John", last_name: "Smith"},
  {id: 104544, party_name: "Liberal", first_name: "John", last_name: "Smith"},
  {id: 105210, party_name: "Bloc Quebecois", first_name: "John", last_name: "Smith"},
  {id: 58621, party_name: "Liberal", first_name: "John", last_name: "Smith"},
  {id: 88333, party_name: "Liberal", first_name: "John", last_name: "Smith"},
  {id: 3306, party_name: "Bloc Quebecois", first_name: "John", last_name: "Smith"},
  {id: 58878, party_name: "Liberal", first_name: "John", last_name: "Smith"},
  {id: 3306, party_name: "NDP", first_name: "John", last_name: "Smith"},
  {id: 58878, party_name: "NDP", first_name: "John", last_name: "Smith"},
  {id: 107097, party_name: "Conservative", first_name: "John", last_name: "Smith"},
  {id: 88860, party_name: "NDP", first_name: "John", last_name: "Smith"}
];

const liberal_yeas = mp_votes.filter(vote => vote.voted_yea === true && vote.party_name ==="Liberal").length;
const conservative_yeas = mp_votes.filter(vote => vote.voted_yea === true && vote.party_name ==="Conservative").length;
const green_yeas = mp_votes.filter(vote => vote.voted_yea === true && vote.party_name ==="Green").length;
const ndp_yeas = mp_votes.filter(vote => vote.voted_yea === true && vote.party_name ==="NDP").length;
const bloc_yeas = mp_votes.filter(vote => vote.voted_yea === true && vote.party_name ==="Bloc Quebecois").length;

console.log(liberal_yeas, conservative_yeas, ndp_yeas, green_yeas, bloc_yeas);
module.exports = { mp_votes, mps }