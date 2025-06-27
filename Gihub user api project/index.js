const searchBar = document.querySelector("#search-bar");
const searchBox = document.querySelector("#search-box");
const searchBoxData = document.querySelectorAll('#search-box li')

console.log(searchBoxData);

// searchBox.innerHTML = ''

searchBar.addEventListener("focus", () => {
  // console.log("search Bars is active");
  displaySearchBox();
});

searchBar.addEventListener("blur", () => {
  // console.log('Seacrch bar out of focus');
  hideSearchBox();
});

searchBar.addEventListener('keyup', () => {

    const filter = searchBar.value.toUpperCase()

    searchBoxData.forEach(values => {
        // console.log(values);
        if(values.innerText.toUpperCase().indexOf(filter) > -1){
            values.style.display= '';
        } else {
            values.style.display= 'none';
        }
    })
});


searchBox.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("search-box-list")) {
    console.log(`Value: ${e.target.innerText}`);
  }
});



function displaySearchBox() {
  // console.log("displaySeach called");
  searchBox.style.display = "block";
}

function hideSearchBox() {
  searchBox.style.display = "none";
}

