const codingChallengesList = document.getElementById('algorithms_session_coding_challenge_id').options;

const codingChallengesArray = [];

for (let i = 0; i < codingChallengesList.length; i+=1) {
  codingChallengesArray.push(codingChallengesList[i].innerText);
}

function searchChallenges (query) {
  for (var j = 0; j < codingChallengesArray.length; j+=1) {
    if (codingChallengesArray[j].match(query)) return j;
  }
  return -1;
}

console.log(searchChallenges(/Picking Numbers \(HackerRank\)/));
