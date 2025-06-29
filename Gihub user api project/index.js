const searchBar = document.querySelector("#search-bar");
const searchBox = document.querySelector("#search-box");

// searchBox.innerHTML = ''

searchBar.addEventListener("focus", () => {
  // console.log("search Bars is active");
  displaySearchBox();
});

searchBar.addEventListener("blur", () => {
  // console.log('Seacrch bar out of focus');
  hideSearchBox();
});

const dgetData = debounce((searchQuery) => {
  searchBox.innerHTML = `
    <div id="search-spinner" style="display:block; text-align:center; padding:1rem;">
      <div class="spinner"></div>
    </div>
  `;
  showSpinner();
  getSearchData(searchQuery).then((data) => {
    hideSpinner();
    if (data && data.items) {
      fillSearchBox(data.items);
    } else {
      searchBox.innerHTML = "<li>No results found</li>";
    }
  });
}, 300);

searchBar.addEventListener("keyup", () => {
  const searchQuery = searchBar.value.toUpperCase();
  dgetData(searchQuery);
  // searchBoxData.forEach(values => {
  //     // console.log(values);

  //     if(values.innerText.toUpperCase().indexOf(filter) > -1){
  //         values.style.display= '';
  //     } else {
  //         values.style.display= 'none';
  //     }
  // })
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

function showSpinner() {
  document.getElementById("search-spinner").style.display = "block";
}
function hideSpinner() {
  document.getElementById("search-spinner").style.display = "none";
}

function fillSearchBox(users) {
  searchBox.innerHTML = `
  <div id="search-spinner" style="display:none; text-align:center; padding:1rem;">
    <div class="spinner"></div>
  </div>
`;
  users.forEach((user) => {
    const li = document.createElement(`li`);
    li.classList.add("search-box-list");
    li.innerText = user.login;
    searchBox.appendChild(li);
  });
}

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

async function getSearchData(search) {
  const url = `https://api.github.com/search/users?q=${search}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error.message);
  }
}

// https://api.github.com/search/users?q=
