## Contributing

Hi there! We're thrilled that you'd like to contribute to this project. Your help is essential for keeping it great.

Please note that this project is released with a [Contributor Code of Conduct](https://github.com/SauravMukherjee44/CodeIN-Community-Website/blob/main/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## Issues and PRs

If you have suggestions for how this project could be improved, or want to report a bug, open an issue! We'd love all and any contributions. If you have questions, too, we'd love to hear them.

We'd also love PRs. If you're thinking of a large PR, we advise opening up an issue first to talk about it, though! Look at the links below if you're not sure how to open a PR.

## How to Contribute

- Take a look at the Existing [Issues](https://github.com/SauravMukherjee44/CodeIN-Community-Website/issues) or create your own!
- Fork the Repo and create a Branch for any Issue that you are working upon.
- Create a Pull Request which will be promptly reviewed and suggestions would be added to improve it.
- Add Screenshots to help us know what this is all about.

## How to make a Pull Request

**1.** Fork the repository by clicking on the <a href="https://github.com/SauravMukherjee44/CodeIN-Community-Website"><img src="https://img.icons8.com/ios/24/000000/code-fork.png"></a> symbol at the top right corner.

**2.** Clone the forked repository.
```
   git clone https://github.com/SauravMukherjee44/CodeIN-Community-Website.git
```

**3.** Navigate to the project directory.
```
   cd CodeIN-Community-Website
```

**4.** Create a new branch:
```
   git checkout -b YourBranchName
```

**5.** Make changes in source code.

**6.** Stage your changes and commit

```
   git add .
   git commit -m "<your_commit_message>"
```

**7.** Push your local commits to the remote repo.

```
   git push origin YourBranchName
```

**8.** Create a [PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)

**Note** If anyone contributes to this repository, then the changes will not be reflected in your local repository. For that:

**9.** Setup a reference(remote) to the original repository to get all the changes from the remote.
```
   git remote add upstream  https://github.com/SauravMukherjee44/CodeIN-Community-Website.git
```

**10.** Check the remotes for this repository.
```
   git remote -v
```

**11.** Fetching from the remote repository will bring in its branches and their respective commits.
```
   git fetch upstream
```

**12.** Make sure that you're on your master branch.
```
   git checkout master
```

**13.** Now that we have fetched the upstream repository, we want to merge its changes into our local branch. This will bring that branch into sync with the upstream, without losing our local changes.
```
   git merge upstream/master
```

### Alternatively, contribute using GitHub Desktop

1. **Open GitHub Desktop:**
   Launch GitHub Desktop and log in to your GitHub account if you haven't already.

2. **Clone the Repository:**
   - If you haven't cloned the CodeIN-Community-Website repository yet, you can do so by clicking on the "File" menu and selecting "Clone Repository."
   - Choose the CodeIN-Community-Website repository from the list of repositories on GitHub and clone it to your local machine.

3. **Switch to the Correct Branch:**
   - Ensure you are on the branch that you want to submit a pull request for.
   - If you need to switch branches, you can do so by clicking on the "Current Branch" dropdown menu and selecting the desired branch.

4. **Make Changes:**
   Make your changes to the code or files in the repository using your preferred code editor.

5. **Commit Changes:**
   - In GitHub Desktop, you'll see a list of the files you've changed. Check the box next to each file you want to include in the commit.
   - Enter a summary and description for your changes in the "Summary" and "Description" fields, respectively. Click the "Commit to <branch-name>" button to commit your changes to the local branch.

6. **Push Changes to GitHub:**
   After committing your changes, click the "Push origin" button in the top right corner of GitHub Desktop to push your changes to your forked repository on GitHub.

7. **Create a Pull Request:**
  - Go to the GitHub website and navigate to your fork of the CodeIN-Community-Website repository.
  - You should see a button to "Compare & pull request" between your fork and the original repository. Click on it.

8. **Review and Submit:**
   - On the pull request page, review your changes and add any additional information, such as a title and description, that you want to include with your pull request.
   - Once you're satisfied, click the "Create pull request" button to submit your pull request.

9. **Wait for Review:**
    Your pull request will now be available for review by the project maintainers. They may provide feedback or ask for changes before merging your pull request into the main branch of the CodeIN-Community-Website repository.

Here are a few things you can do that will increase the likelihood of your pull request being accepted:

- Follow the [style guide](https://gist.github.com/lisawolderiksen/a7b99d94c92c6671181611be1641c733). Any linting errors should be shown when running `npm test`.
- Write and update tests.
- Keep your changes as focused as possible. If there are multiple changes you would like to make that are not dependent upon each other, consider submitting them as separate pull requests.
- Write a [good commit message](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).

Work in Progress pull requests are also welcome to get feedback early on, or if there is something blocking you from working further.

## Resources

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Using Pull Requests](https://help.github.com/articles/about-pull-requests/)
- [GitHub Help](https://help.github.com)
