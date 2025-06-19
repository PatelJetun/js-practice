# Project Markdown file

# Solution Code

## project 1

```javascript
    console.log("Jetun")
    const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( (button) => {
      console.log(button)
      button.addEventListener('click', function(e) {
            console.log(e)
            console.log(e.target.id)
            let targetId = e.target.id

            switch (targetId){
              case "grey":
                  body.style.backgroundColor = e.target.id
                break;

              case "white":
                body.style.backgroundColor = e.target.id
                break;

              case "blue":
                body.style.backgroundColor = e.target.id
                break;

              case "yellow":
                body.style.backgroundColor = e.target.id 
                break;

              case "purple":
                body.style.backgroundColor = e.target.id 
                break;
            }
      }) 
})


```    
## project 2 solution

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //show result

    if (bmi <= 18.6) {
      results.innerHTML = `<span>BMI: ${bmi} <br> Underweight</span>`;
    } else if (bmi > 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>BMI: ${bmi} <br> Normal</span>`;
    } else {
      results.innerHTML = `<span>BMI: ${bmi} <br> Overweight</span>`;
    }
  }
});


```

## project 3 solution

```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```