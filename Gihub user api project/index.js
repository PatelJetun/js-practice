const searchBar = document.querySelector("#search-bar");
const searchBox = document.querySelector("#search-box");
const div = document.querySelector(".user");

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
    div.style.display = "none";
    const user = e.target.innerText;
    console.log(`Value: ${user}`);
    searchBar.value = user;
    getUserData(user).then((data) => {
      if (data) {
        displayUserData(data);
      }
    });
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

function displayUserData(data) {
  const h2 = document.querySelector("#user-h2");
  const userName = document.querySelector("#user-name");
  const followers = document.querySelector("#user-followers span");
  const following = document.querySelector("#user-following span");
  userName.innerHTML = `${data.login}`;
  followers.innerHTML = `${data.followers}`;
  following.innerHTML = `${data.following}`;
  h2.innerHTML = `${data.login}'s Repositories`;
  getUserRepo(data.repos_url).then((data) => {
    if(data){
      displayUserRepo(data)
    }
  });
  div.style.display = "block";
}

function displayUserRepo(data) {
  const grid = document.querySelector("#user-repo-grid");
  grid.innerHTML = ''
  data.forEach((value) => {
    const card = document.createElement("div");
    card.classList.add('repo-card')
    card.innerHTML = `<div class="repo-name">
                        <h2 class="repo-card-name">${value.name}</h2>
                        <p class="repo-description">${value.description}</p>
                      </div>

                    <div class="repo-data">
                        <p class="repo-language">Languages: <span>${value.language}</span></p>
                        <p class="repo-clone-url">Clone url: <span><a href=${value.clone_url}>Click Here</a></span></p>
                        <p class="repo-subscribers">Fork Count: <span>${value.forks_count}</span></p>
                    </div>`;
    grid.appendChild(card)
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
    console.error(error.message);
  }
}

async function getUserData(user) {
  const url = `https://api.github.com/users/${user}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

async function getUserRepo(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}
// https://api.github.com/search/users?q=
// https://api.github.com/users/;
