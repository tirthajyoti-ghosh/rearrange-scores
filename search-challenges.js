const searchChallenges = () => {
  const codingChallenges = document.getElementById('algorithms_session_coding_challenge_id');

  if (!codingChallenges) {
    return;
  }

  const codingChallengesList = codingChallenges.options;

  const codingChallengesArray = [];

  for (let i = 0; i < codingChallengesList.length; i += 1) {
    codingChallengesArray.push(codingChallengesList[i].innerText);
  }

  function searchChallenges(query) {
    for (let j = 0; j < codingChallengesArray.length; j += 1) {
      if (codingChallengesArray[j].match(query)) return j;
    }
    return -1;
  }

  function sanitizeQuery(string) {
    return new RegExp(string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  }

  function selectCodingChallenge(query) {
    codingChallengesList[searchChallenges(sanitizeQuery(query))].setAttribute('selected', '');
  }

  function inputHandler(e) {
    selectCodingChallenge(e.target.value);
  }

  function createInput() {
    const input = document.createElement('input');

    input.setAttribute('type', 'text');

    input.setAttribute('class', 'form-control mb-3');

    input.setAttribute('placeholder', '[CASE SENSITIVE] Start typing the name of the coding challenge...');

    return input;
  }

  const container = document.querySelector('#new_algorithms_session > div.bg-white.pt-3.pb-3.without-button > div:nth-child(10)');

  const queryInput = createInput();

  queryInput.addEventListener('input', inputHandler);

  container.insertBefore(queryInput, codingChallenges);
};

searchChallenges();
