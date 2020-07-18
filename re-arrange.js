const rearrangeScores = () => {
  const weeklyProgress = document.getElementById('dashboard-weekly-progress');
  const progressScore = weeklyProgress.nextElementSibling;

  const weeklyProfessionalism = document.getElementById('dashboard-weekly-professionalism');
  const professionalismScore = weeklyProfessionalism.nextElementSibling;

  const removeElements = () => {
    weeklyProgress.remove();
    weeklyProfessionalism.remove();
    progressScore.remove();
    professionalismScore.remove();
  };

  const insertElements = () => {
    const container = document.querySelector('#app > div > main > div > div > div');

    const calender = document.getElementById('dashboard-calendar');

    container.insertBefore(weeklyProgress, calender);
    container.insertBefore(progressScore, calender);
    container.insertBefore(weeklyProfessionalism, calender);
    container.insertBefore(professionalismScore, calender);
  };

  removeElements();
  insertElements();
};

rearrangeScores();
