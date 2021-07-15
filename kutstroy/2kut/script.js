const solveBtn = document.querySelector('#solve');

solveBtn.addEventListener('click', (event) => {
  let range_input_year = document.querySelector('#year');
  let range_input_percent = document.querySelector('#percent');
  let result = document.querySelector('#result');
  let per_month = Math.ceil((28080 - 28080 * parseInt(range_input_percent.value)*0.1) / (parseInt(range_input_year.value)*12));
  result.textContent = `от ${per_month}$`
});

var sliderMonth = document.getElementById('year');

sliderMonth.addEventListener("mousemove", function() {
    var x = (this.value - 1) * 20;
    var color = 'linear-gradient(90deg, rgb(255, 255, 0)' + x + '%, rgb(255, 255, 255)' + x + '%)';
    this.style.background = color;
})

var sliderPercent = document.getElementById('percent');

sliderPercent.addEventListener("mousemove", function() {
    var x = this.value * 10;
    var color = 'linear-gradient(90deg, rgb(255, 255, 0)' + x + '%, rgb(255, 255, 255)' + x + '%)';
    this.style.background = color;
})
