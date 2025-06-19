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
