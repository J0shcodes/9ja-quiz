const correctAnswers = ['C', 'B', 'A', 'A', 'C']
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const button = document.querySelector('.button');

form.addEventListener('submit', e => {
  e.preventDefault();

  button.disabled = true;

  let score = 0;
  const userAnswers = [form.q2.value, form.q3.value, form.q1.value, form.q5.value, form.q4.value,]

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 20
    }
  });

  scrollTo(0,0);
  result.classList.remove('d-none');

  let output = 0
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`
    if (output === score) {
      clearInterval(timer);
    } else {
      output += 1
    }
  }, 10);

});