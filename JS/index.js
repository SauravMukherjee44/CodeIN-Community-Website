//fetching data
async function fetchData() {
  await fetch(
    'https://api.github.com/repos/SauravMukherjee44/CodeIN-Community-Website/contributors'
  ) //api for the get request
    .then((response) => response.json())
    .then((data) => {
      /*  check if data is null or undefined using nullish collision js(2020)
            if undefined return no contributors  */
      let contributors = data ?? 'No contributors';
      console.log(data);
      let contributorsName = [];
      let contributorImageURL = [];
      let contributorGitHubURL = [];
      let contributor = [];
      // getting contributors img and url
      for (let i = 0; i < contributors.length; i++) {
        contributorImageURL[i] = contributors[i].avatar_url;
        contributorGitHubURL[i] = contributors[i].html_url;
        contributorsName[i] = contributors[i].login;
        contributor[i] = `<a href="${contributorGitHubURL[i]}">
            <img src="${contributorImageURL[i]}" alt="${contributorsName[i]}">
            <span>${contributorsName[i]}</span>
            </a>`;
      }
      console.log(contributor);
      // getting dom elements
      let contributorBox = document.querySelector('#contributor');

      contributorBox.innerHTML = contributor.join('');
    })
    .catch((e) => {
      console.error(e);
    });
}

//call the function after 1s
setTimeout(() => {
  fetchData();
}, 1000);
