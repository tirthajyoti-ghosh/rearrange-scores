const codingChallengesList = document.getElementById('algorithms_session_coding_challenge_id').options;

for (let i = 0; i < codingChallengesList.length; i+=1) {
  const codingChallenge = codingChallengesList[i];
  console.log(codingChallenge.innerText);
}
