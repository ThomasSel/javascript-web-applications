class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.model.setRepoInfo(repoData);
        this.display();
      });
    });
  }

  display() {
    const repoData = this.model.getRepoInfo();
  
    document.querySelector('#repo-name').textContent = repoData.full_name;
    document.querySelector('#repo-description').textContent = repoData.description;
    document.querySelector('#repo-image')
      .setAttribute('src', repoData.organization.avatar_url);
  }
}

module.exports = GithubView;