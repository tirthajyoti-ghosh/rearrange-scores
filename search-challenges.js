const codingChallenges = document.getElementById('algorithms_session_coding_challenge_id');
const codingChallengesList = codingChallenges.options;

const codingChallengesArray = [];

for (let i = 0; i < codingChallengesList.length; i+=1) {
  codingChallengesArray.push(codingChallengesList[i].innerText);
}

function searchChallenges(query) {
  for (var j = 0; j < codingChallengesArray.length; j+=1) {
    if (codingChallengesArray[j].match(query)) return j;
  }
  return -1;
}

function sanitizeQuery(string) {
  return new RegExp(string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
}

codingChallengesList[searchChallenges(sanitizeQuery("Find"))].setAttribute('selected', '');

const createInput = () => {
  const input = document.createElement('input');

  input.setAttribute('type', 'text');

  input.setAttribute('class', 'form-control mb-3');

  input.setAttribute('placeholder', 'Start typing the name of the coding challenge...');
  
  return input;
};

const container = document.querySelector('#new_algorithms_session > div.bg-white.pt-3.pb-3.without-button > div:nth-child(10)');

container.insertBefore(createInput(), codingChallenges);
